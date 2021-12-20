import { CreateConversationModal } from './createConversationModal.js';

class SideBar{
    $container;
    $btnCreateConversation;
    $conversationList;
    $createConversationModal;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.style.width = '200px';

        this.$btnCreateConversation = document.createElement('button');
        this.$btnCreateConversation.innerHTML = '+ New';
        this.$btnCreateConversation.addEventListener('click', this.handleCreateConversation);
        this.$createConversationModal = new CreateConversationModal();

        this.$conversationList = document.createElement('div');
        this.$conversationList.innerHTML = 'Conversation List';

        db.collection('conversations').onSnapshot(this.conversationListener)

    }

    handleCreateConversation = () =>{
        this.$createConversationModal.setVisible(true);
    }

    conversationListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            console.log(change.doc.data());
        });
    };
    render(){
        this.$container.appendChild(this.$btnCreateConversation);
        this.$container.appendChild(this.$conversationList);
        this.$container.appendChild(this.$createConversationModal.render());
        return this.$container
    }
}
export { SideBar }