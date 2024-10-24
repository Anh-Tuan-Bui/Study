import paging from "./paging.js";
import businessForm from './business_form.js';
import skeleton from "./skeleton.js";

class Agency {
    url;

    constructor() {
        this.url = 'http://localhost:8080/api/v1/agencies';

        this.initialEvents();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Agency();
        }

        return this.instance;
    }
    
    agency = document.getElementById('agency');
    
    initialEvents() {
        this.agency.addEventListener('click', () => {
            this.loadData();
        });
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

        businessForm.codeValue = 'DLPP-' + (parseInt(paging.getMaxCode(data).split('-')[1]) + 1).toString().padStart(2, '0');
        businessForm.url = this.url;
    }
}

const agency = Agency.getInstance();

export default agency;