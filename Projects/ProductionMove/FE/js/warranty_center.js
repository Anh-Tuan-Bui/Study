import shareData from './shared_data.js';

export default class WarrantyCenter {
    constructor() {
        this.initialEvents();
    }

    navbar = document.getElementById("navbar");
    warrantyCenter = document.getElementById("warranty-center");

    initialEvents() {
        this.warrantyCenter.addEventListener("click", () => {
            if (shareData.currentContent === "warranty-center") {
                this.closeWarrantyCenter();
                shareData.currentContent = "";
            } else {
                this.openWarrantyCenter();
                shareData.currentContent = "warranty-center";
            }
        });
    }

    openWarrantyCenter() {
        this.navbar.innerHTML = `
            <div class="col-6">
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Sản phẩm bảo hành</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Sản phẩm triệu hồi</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Trả sản phẩm</div>
            </div>
            <div class="col-6">
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Báo hỏng</div>
                <div class="px-3 hover:bg-cyan-100 cursor-pointer">Thống kê sản phẩm</div>
            </div>
        `;
    }

    closeWarrantyCenter() {
        this.navbar.innerHTML = '';
    }
}