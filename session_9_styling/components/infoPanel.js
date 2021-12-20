class InfoPanel {
    $container;

    $formAddUser;
    $input;
    $userList;

    activeConversation;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('info-panel');
        this.$container.style.width = '200px';
        this.$container.style.borderLeft = '1px solid #eee';

        this.$formAddUser = document.createElement('form');
        this.$formAddUser.classList.add('flex');
        this.$formAddUser.addEventListener('submit', this.handleSubmit);

        this.$input = document.createElement('input');
        this.$input.type = 'email';
        this.$input.placeholder = 'Enter user email ...';
        this.$input.classList.add('flex-1');
        this.$input.style.width = '100%';

        this.$userList = document.createElement('ul');
        this.$userList.classList.add('user-list');
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (!this.activeConversation){
            alert('You must choose conversation first!');
            return;
        }
        const newUsers = this.activeConversation.users.concat(this.$input.value);
        this.$input.value = '';
        db.collection('conversations').doc(this.activeConversation.id).update({
            users: newUsers,
        });

    }

    setActiveConversation(conversation) {
        this.activeConversation = conversation;
        this.updateActiveConversation(conversation.name, conversation.users);
    }

    handleDeleteUser = (email) => {
        const newUsers = this.activeConversation.users.filter((item) => {
            return item != email;
        });
        db.collection('conversations').doc(this.activeConversation.id).update({
            users: newUsers,
        });
    }

    updateActiveConversation = (name, users) => {
        this.activeConversation.name = name;
        this.activeConversation.users = users;

        this.$userList.innerHTML = '';
        this.activeConversation.users.forEach(email => {
            const $item = document.createElement('li');
            $item.addEventListener('click', () => {
                this.handleDeleteUser(email);
            })
            $item.innerHTML = email;
            this.$userList.appendChild($item);
        })
    }

    render() {
        this.$formAddUser.appendChild(this.$input);
        this.$container.appendChild(this.$formAddUser);
        this.$container.appendChild(this.$userList);
        return this.$container;
    };
}
export { InfoPanel };