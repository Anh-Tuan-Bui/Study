import shareData from "../shared_data.js";
import paging from "./paging.js";
import businessForm from "./business_form.js";
import ProductNav from "./product_nav.js";
import skeleton from "./skeleton.js";
// import facility from "./facility.js";
// import agency from "./agency.js";
// import center from "./center.js";


// window.onload = async function() {
//     managementBoard.loadData();
// }

class ManagementBoard {
    url;

    constructor() {
        this.url = 'http://localhost:8080/api/v1/management-boards';

        new ProductNav();

        this.loadData();
        this.initialEvents();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ManagementBoard();
        }

        return this.instance;
    }
    
    logo = document.getElementById('logo');
    
    initialEvents() {
        this.logo.addEventListener('click', () => {
            shareData.checkNav('logo');
            this.loadData();
        })
    }

    async loadData() {
        skeleton.skeletonTable();

        const response = await fetch(this.url);
        const data = await response.json();

        paging.searchBar.value = '';
        paging.data = data;
        paging.totalRecord.textContent = `Tổng số ${data.length} bản ghi`;
        paging.currentPage = 1;        
        paging.paging();
        paging.selectedRecords = [];

        businessForm.codeValue = 'BĐH-' + (parseInt(paging.getMaxCode(data).split('-')[1]) + 1).toString().padStart(2, '0');
        businessForm.url = this.url;
    }
}

const managementBoard = ManagementBoard.getInstance();

export default managementBoard;
