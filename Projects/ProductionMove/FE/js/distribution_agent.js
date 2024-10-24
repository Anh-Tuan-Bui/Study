import shareData from './shared_data.js';

export default class distributionAgent {
    constructor() {
        this.initialEvents();
    }

    navbar = document.getElementById('navbar');
    distributionAgent = document.getElementById('distribution-agent');

    initialEvents() {
        this.distributionAgent.addEventListener('click', () => {
            if (shareData.currentContent === 'distribution-agent') {
                this.closeDistributionAgent();
                shareData.currentContent = '';
            } else {
                this.openDistributionAgent();
                shareData.currentContent = 'distribution-agent';
            }
        });
    }

    openDistributionAgent() {
        this.navbar.innerHTML = `
            <div class="col-6">
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Nhập sản phẩm mới</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Bán sản phẩm</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Sản phẩm bảo hành</div>
            </div>
            <div class="col-6">
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Báo hỏng</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Thống kê sản phẩm</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Triệu hồi sản phẩm</div>
            </div>
        `;
    }

    closeDistributionAgent() {
        this.navbar.innerHTML = '';
    }
}