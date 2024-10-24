class SharedData {
    isClick;
    navItems;
    backgroundNavColor;
    
    constructor() {
        this.isClick = false;
        this.navItems = document.querySelectorAll('#navbar .border-round');
        this.backgroundNavColor = 'bg-teal-200';

        this.navItems.forEach((item) => {
            item.addEventListener('click', () => {
                this.checkNav(item.id);

                if (!this.isClick) {
                    item.classList.add(this.backgroundNavColor);
                    this.isClick = true;
                } else {
                    item.classList.remove(this.backgroundNavColor);
                    this.isClick = false;
                }
            });
        });
    }

    static getInstance() {
        if (!SharedData.instance) {
            SharedData.instance = new SharedData();
        }

        return SharedData.instance;
    }

    checkNav(currentId) {
        let id = document.querySelector(`#navbar .${this.backgroundNavColor}`)?.id;
        
        if (id === 'product') {
            document.getElementById('product-nav').classList.add('hidden');
        }

        if (id !== undefined && id !== currentId) {
            this.isClick = false;
            document.getElementById(id).classList.remove(this.backgroundNavColor);
        }
    }
}

const shareData = SharedData.getInstance();

export default shareData;