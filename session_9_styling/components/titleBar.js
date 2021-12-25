class TitleBar {
    $container;
    $btnShowSidebar;
    $btnShowPanel;
    $txtName;
    $btnLogout;
    setSidebarVisible;
    setPanelVisible;
    displayName;

    constructor(setSidebarVisible, setPanelVisible, user){
        this.setSidebarVisible = setSidebarVisible;
        this.setPanelVisible = setPanelVisible;

        if(user.displayName){
            this.displayName = user.displayName;
        }else{
            this.displayName = 'Khách';
        }

        this.$container = document.createElement('div');
        this.$container.classList.add('title-bar');

        this.$txtName = document.createElement('div');
        this.$txtName.classList.add('title-text');
        this.$txtName.innerHTML = 'Welcome Chat!';
        this.$btnShowSidebar = document.createElement('div');
        this.$btnShowSidebar.classList.add('btn-show-sidebar');
        this.$btnShowSidebar.innerHTML = '☰';
        this.$btnShowSidebar.addEventListener('click', this.showSidebar);

        this.$btnShowPanel = document.createElement('div');
        this.$btnShowPanel.classList.add('panel-icon');
        this.$btnShowPanel.innerHTML = '⛭';
        this.$btnShowPanel.addEventListener('click', this.showPanel)

        this.$btnLogout = document.createElement('div');
        this.$btnLogout.classList.add('logout');
        this.$btnLogout.innerHTML = `${this.displayName} (Logout)`;
        this.$btnLogout.addEventListener('click', this.handleLogout);

    }

    handleLogout = () => {
        firebase.auth().signOut();
    }

    setName(name){
        this.$txtName.innerHTML = name;
    }
    showSidebar = () => {
        this.setSidebarVisible(true);
    }
    showPanel = () => {
        this.setPanelVisible(true);
    }
    render(){
        const title = document.createElement('div');
        title.classList.add('flex');
        title.appendChild(this.$btnShowSidebar);
        title.appendChild(this.$txtName);

        this.$container.appendChild(title);
        
        const tool = document.createElement('div');
        tool.classList.add('tool');
        tool.appendChild(this.$btnShowPanel);
        tool.appendChild(this.$btnLogout);

        this.$container.appendChild(tool);
        return this.$container;
    }
}
export { TitleBar };