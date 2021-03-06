import { SideBar } from './sideBar.js';
import { TitleBar } from './titleBar.js';

class Chat {
    activeConversation;
    $container;
    $sideBar;
    $titleBar;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('flex');

        this.$sideBar = new SideBar(this.setActiveConversation);
        this.$titleBar = new TitleBar();
        
        this.activeConversation = null;
    }

    setActiveConversation = (conversation) => {
        console.log(conversation);
        this.activeConversation = conversation;
        this.$titleBar.setName(this.activeConversation.name);
        this.$sideBar.setConversation(this.activeConversation);
    };

    render() {
        this.$container.appendChild(this.$sideBar.render());
        
        const chatArea = document.createElement('div');
        chatArea.classList.add('flex-1', 'flex', 'flex-col');
        chatArea.appendChild(this.$titleBar.render());

        const messageArea = document.createElement('div');
        messageArea.innerHTML = 'Message Area';

        chatArea.appendChild(messageArea)

        this.$container.appendChild(chatArea);
        return this.$container;
    }
}

export { Chat };