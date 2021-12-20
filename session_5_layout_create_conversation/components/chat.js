import { SideBar } from './sideBar.js'

class Chat {
    $container;
    $sideBar;

    constructor(){
        this.$container = document.createElement('div');
        this.$sideBar = new SideBar();
    }

    render() {
        this.$container.appendChild(this.$sideBar.render());
        return this.$container;
    }
}

export { Chat };