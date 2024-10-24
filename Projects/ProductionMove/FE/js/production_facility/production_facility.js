import shareData from '../shared_data.js';

export default class ProductionFacility {
    constructor() {
        this.initialEvents();
    }

    navbar = document.getElementById('navbar');
    productionFacility = document.getElementById('production-facility');
    productionFacilityNavId = document.getElementById('production-facility-nav');

    initialEvents() {
        this.productionFacility.addEventListener('click', () => {    
            if (shareData.currentContent === 'production-facility') {
                this.closeProductionFacility();
                shareData.currentContent = '';
            } else {
                this.openProductionFacility();
                shareData.currentContent = 'production-facility';
            }
        });
    }

    openProductionFacility() {
        // this.productionFacilityNavId.classList.remove('hidden');
        this.navbar.innerHTML = `
        <div class="col-6">
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Nhập sản phẩm mới</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Xuất sản phẩm</div>
        </div>
        <div class="col-6">
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Nhận sản phẩm lỗi</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Thống kê sản phẩm</div>
        </div>
        `;
    }

    closeProductionFacility() {
        // this.productionFacilityNavId.classList.add('hidden');
        this.navbar.innerHTML = '';
    }
}