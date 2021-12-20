class Chat {
    $container;
    $title;
    $btnLogout;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.style.textAlign = 'center';
        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Chat';
        this.$btnLogout = document.createElement('button');
        this.$btnLogout.innerHTML = 'Logout';
        this.$btnLogout.addEventListener('click', this.handleLogout);
    }

    handleLogout = () =>{
        firebase.auth().signOut();
    };

    render() {
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$btnLogout);
        return this.$container;
    }
}

export { Chat };