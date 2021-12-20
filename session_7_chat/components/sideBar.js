import { ConversationItem } from "./conversationItem.js";
import { CreateConversationModal } from "./createConversationModal.js";

class SideBar {
    $container;
    $buttonCreateConversation;
    $conversationList;
    $createConversationModal;
    $listConversationItem;
    setActiveConversation;

    constructor(setActiveConversation) {
        this.$container = document.createElement('div');
        this.$container.style.width = '200px';
        this.$container.style.borderRight = '3px solid #ececec';

        this.$buttonCreateConversation = document.createElement('button');
        this.$buttonCreateConversation.innerHTML = ' + New';
        this.$buttonCreateConversation.addEventListener('click', this.handleCreateConversation);

        this.$createConversationModal = new CreateConversationModal();
        this.$createConversationModal.setVisible(false);

        this.$conversationList = document.createElement('div');
        this.$conversationList.classList.add("flex", "flex-col", "items-stretch");
        this.setActiveConversation = setActiveConversation;

        this.$listConversationItem = [];

        db.collection('conversations').onSnapshot(this.conversationListener);
    }

    conversationListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const conversation = change.doc.data();
            console.log(conversation);
            const id = change.doc.id;
            const $conversationItem = new ConversationItem(
                id, 
                conversation.name, 
                conversation.users.length, 
                this.setActiveConversation
            );

            this.$listConversationItem.push($conversationItem);
            this.$conversationList.appendChild($conversationItem.render());

        });
    };

    setConversation = (conversation) => {
        this.$listConversationItem.forEach(item => {
            if (item.id === conversation.id) {
                item.setActive(true);
            } else {
                item.setActive(false);
            }
        });
    };

    handleCreateConversation = () => {
        this.$createConversationModal.setVisible(true);
    }

    render() {
        this.$container.appendChild(this.$buttonCreateConversation);
        this.$container.appendChild(this.$conversationList);
        this.$container.appendChild(this.$createConversationModal.render());
        return this.$container;
    }
}

export { SideBar };