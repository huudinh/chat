import { ConversationItem } from "./conversationItem.js";
import { CreateConversationModal } from "./createConversationModal.js";

class SideBar {
    $bgContainer;
    $container;
    $buttonCreateConversation;
    $conversationList;
    $createConversationModal;
    $listConversationItem;
    updateActiveConversation;
    setActiveConversation;
    activeConversation;

    constructor(setActiveConversation, updateActiveConversation) {
        this.$bgContainer = document.createElement('div');
        this.$bgContainer.classList.add('sidebar-container');
        this.$bgContainer.addEventListener('click', ()=> {
            this.setBgContainerVisible(false);
        });

        this.$container = document.createElement('div');
        this.$container.classList.add('sidebar');

        this.$buttonCreateConversation = document.createElement('button');
        this.$buttonCreateConversation.innerHTML = ' + New';
        this.$buttonCreateConversation.classList.add('btn','btn-primary', 'btn-block');
        this.$buttonCreateConversation.addEventListener('click', this.handleCreateConversation);

        this.$createConversationModal = new CreateConversationModal();
        this.$createConversationModal.setVisible(false);

        this.$conversationList = document.createElement('div');
        this.$conversationList.classList.add('conversation-list');
        this.setActiveConversation = setActiveConversation;
        this.updateActiveConversation = updateActiveConversation;

        this.$listConversationItem = [];

        db.collection('conversations')
            .where('users', 'array-contains', firebase.auth().currentUser.email)
            .onSnapshot(this.conversationListener);

    }

    handleCreateConversation = () => {
        this.$createConversationModal.setVisible(true);
    }

    conversationListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const conversation = change.doc.data();
            const id = change.doc.id;

            if(change.type == 'added'){
                const $conversationItem = new ConversationItem(
                    id, 
                    conversation.name, 
                    conversation.users, 
                    this.setActiveConversation
                );
    
                this.$listConversationItem.push($conversationItem);
                this.$conversationList.appendChild($conversationItem.render());
            } else if (change.type == 'modified') {
                const modifyingConversation = this.$listConversationItem.find((item) => {
                     return item.id == id;
                });
                modifyingConversation.updateData(conversation.name, conversation.users);
                if( id == this.activeConversation.id ){
                    this.updateActiveConversation(conversation.name, conversation.users);
                }
            }

        });
    };

    setConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$listConversationItem.forEach(item => {
            if (item.id === conversation.id) {
                item.setActive(true);
            } else {
                item.setActive(false);
            }
        });
    };

    setBgContainerVisible = (visible) => {
        if (visible) {
            this.$bgContainer.classList.add('visible');
        } else {
            this.$bgContainer.classList.remove('visible');
        }
    }

    render() {
        this.$container.appendChild(this.$buttonCreateConversation);
        this.$container.appendChild(this.$conversationList);
        this.$container.appendChild(this.$createConversationModal.render());
        this.$bgContainer.appendChild(this.$container);
        return this.$bgContainer;

    }

}

export { SideBar };