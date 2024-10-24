import paging from './paging.js';
import businessForm from './business_form.js';
import skeleton from './skeleton.js';

class Facility {
    url;

    constructor() {
        this.url = 'http://localhost:8080/api/v1/facilities';
        
        this.initialEvents();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Facility();
        }

        return this.instance;
    }
    
    facility = document.getElementById('facility');
    
    initialEvents() {
        this.facility.addEventListener('click', () => {
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
    
        businessForm.codeValue = 'CSSX-' + (parseInt(paging.getMaxCode(data).split('-')[1]) + 1).toString().padStart(2, '0');
        businessForm.url = this.url;
    }
}

const facility = Facility.getInstance();

export default facility;