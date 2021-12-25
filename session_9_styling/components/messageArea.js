import { MessageItem } from "./messageItem.js";

class MessageArea {
    $container;
    $messageList;

    $composer;
    $input;
    $btnSend;

    activeConversation;
    messageSubscribe;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('flex', 'flex-col', 'flex-1');

        this.$messageList = document.createElement('div');
        this.$messageList.classList.add('message-list');
        this.$messageList.innerHTML = `
            <div class="intro">✍️ Đây là trang chủ của <b style="color:#337ab7">APP CHAT GROUPS</b><br>
            📝 Vui lòng Tạo mới chủ đề với: <b style="color:#5cb85c;">New conversation</b> <br>
            🌞 Hoặc Chọn chủ đề sẵn có <b style="color:#f0ad4e">bên trái / Menu</b></div>
        `;

        this.$composer = document.createElement('form');
        this.$composer.classList.add('flex', 'composer');
        this.$composer.addEventListener('submit', this.handleSendMessage);

        this.$input = document.createElement('input');
        this.$input.type = 'text';
        this.$input.placeholder = 'Please be nice in the chat!';
        this.$input.classList.add('flex-1');

        this.$btnSend = document.createElement('button');
        this.$btnSend.type = 'submit';
        this.$btnSend.innerHTML = '➤';
    }   

    setConversation(conversation) {
        this.activeConversation = conversation;
        this.$messageList.innerHTML = '';

        if(this.messageSubscribe){
            this.messageSubscribe();
        }
        this.messageSubscribe = db
            .collection('messages')
            .where('conversationId', '==', this.activeConversation.id)
            .orderBy('sentAt')
            .onSnapshot(this.messageListener);
    };

    messageListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type == 'added'){
                const data = change.doc.data();
                const $messageItem = new MessageItem(data.sender, data.content);
                this.$messageList.insertBefore($messageItem.render(), this.$messageList.childNodes[0]);
            }
        });
    };
    
    handleSendMessage = (event) => {
        event.preventDefault();

        if(this.activeConversation){
            db.collection('messages').add({
                sender: firebase.auth().currentUser.email,
                content: this.$input.value,
                conversationId: this.activeConversation.id,
                sentAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            this.$input.value = '';
        } else {
            alert('You must select conversation first');
        }
    };

    render() {
        this.$composer.appendChild(this.$input);
        this.$composer.appendChild(this.$btnSend);

        this.$container.appendChild(this.$messageList);
        this.$container.appendChild(this.$composer);

        return this.$container;
    };
}
export { MessageArea };