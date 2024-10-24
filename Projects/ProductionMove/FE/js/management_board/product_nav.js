import shareData from "../shared_data.js";

export default class ProductNav {
    constructor() {
        this.initialEvents();
    }

    product = document.getElementById('product');
    productNav = document.getElementById('product-nav');

    
    initialEvents() {
        this.product.addEventListener('click', () => {
            if (shareData.isClick) {
                this.openProductNav();
            } else {
                this.closeProductNav();
            }
        });
    }
    
    openProductNav() {
        this.productNav.classList.remove('hidden');
    }
    
    closeProductNav() {
        this.productNav.classList.add('hidden');
    }
}