import toastMessage from "./toast_message.js";
import managementBoard from "./management_board.js";
import facility from './facility.js';
import agency from './agency.js';
import center from './center.js';


class BusinessForm {
    url;
    id;
    codeValue;
    
    code;
    region;
    name;
    address;

    data;
    selectedRecords;

    constructor() {
        this.url = '';
        this.id = 0;
        this.codeValue = '';

        this.code = document.querySelector('#business-form #code');
        this.region = document.querySelector('#business-form #region');
        this.name = document.querySelector('#business-form #name');
        this.address = document.querySelector('#business-form #address');

        this.data = [];
        this.selectedRecords = [];

        this.initialEvents();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new BusinessForm();
        }

        return this.instance;
    }

    addBusiness = document.getElementById('add-business');
    businessForm = document.getElementById('business-form');
    closeBusiness = document.getElementById('close-business');
    cancelBusiness = document.getElementById('cancel-business');
    saveBusiness = document.getElementById('save-business');

    initialEvents() {
        this.addBusiness.addEventListener('click', () => {
            this.openForm();
        });

        this.closeBusiness.addEventListener('click', () => {
            this.closeForm();
        });

        this.cancelBusiness.addEventListener('click', () => {
            this.closeForm();
        });

        this.saveBusiness.addEventListener('click', () => {            
            if (this.id === 0) {
                this.createNewRecord();
            } else {
                this.updateRecord(this.id);                
            }
            
            this.closeForm();
        });
    }

    openForm() {
        this.code.value = this.codeValue;
        this.region.value = '';
        this.name.value = '';
        this.address.value = '';

        this.businessForm.classList.remove('hidden');
        this.businessForm.classList.add('flex');

        document.querySelector('#business-form #region').focus();

        this.id = 0;
    }

    closeForm() {
        this.businessForm.classList.remove('flex');
        this.businessForm.classList.add('hidden');
    }
 
    editForm(data) {                    
        this.openForm();        
        this.region.focus();

        this.id = data.id;
        this.code.value = data.code;
        this.region.value = data.region;
        this.name.value = data.name;    
        this.address.value = data.address;
    }

    async createNewRecord() {
        this.data = {
            code: this.code.value,
            name: this.name.value,
            region: this.region.value,
            address: this.address.value
        }

        let response = null;
        try {            
            if (this.url.endsWith('es')) {
                this.url = this.url.replace(/ies$/, 'y');
            } else this.url = this.url.slice(0, -1);

            response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.data)
            });
        } catch (error) {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Thêm bản ghi thất bại.');            
        }

        if (response.ok) {
            toastMessage.show('pi-check-circle', 'bg-green-300', 'Thành công! Thêm bản ghi thành công.');

            this.data = await response.json();            
            this.id = this.data.id;

            switch(this.data.code.split('-')[0]) {
                case 'BĐH':
                    managementBoard.loadData();
                    break;
                case 'CSSX':
                    facility.loadData();
                    break;
                case 'DLPP':
                    agency.loadData();
                    break;
                case 'TTBH':
                    center.loadData();
                    break; 
                default:
                    managementBoard.loadData();               
            }            
        } else {
            if (response.status === 409) {
                toastMessage.show('pi-exclamation-circle', 'bg-yellow-300', 'Lỗi! Mã đơn vị đã tồn tại.');                
            } else {
                toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Thêm bản ghi thất bại.');
            }
            
            this.data = {
                ...this.data,
                id: 0
            }
        }
    }

    async updateRecord(id) {
        this.data = {
            id: id,
            code: this.code.value,
            name: this.name.value,
            region: this.region.value,
            address: this.address.value
        }

        let response = null;
        try {
            if (this.url.endsWith('es')) {
                this.url = this.url.replace(/ies$/, 'y');
            } else this.url = this.url.slice(0, -1);

            response = await fetch(this.url + `/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.data)
            });
        } catch (error) {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Cập nhật bản ghi thất bại.');            
        }

        if (response.ok) {
            toastMessage.show('pi-check-circle', 'bg-green-300', 'Thành công! Cập nhật bản ghi thành công.');

            this.data = await response.json();
            this.id = this.data.id;

            switch(this.data.code.split('-')[0]) {
                case 'BĐH':
                    managementBoard.loadData();
                    break;
                case 'CSSX':
                    facility.loadData();
                    break;
                case 'DLPP':
                    agency.loadData();
                    break;
                case 'TTBH':
                    center.loadData();
                    break;
                default:
                    managementBoard.loadData();
            }            
        } else {
            if (response.status === 409) {
                toastMessage.show('pi-exclamation-circle', 'bg-yellow-300', 'Lỗi! Mã đơn vị đã tồn tại.');                
            } else {
                toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Cập nhật bản ghi thất bại.');
            }
        }
    }

    async deleteRecord() {
        let response = null;

        try {
            if (this.url.endsWith('es')) {
                this.url = this.url.replace(/ies$/, 'y');
            } else this.url = this.url.replace(0, -1);

            response = await fetch(this.url + `/${this.id}`, {
                method: 'DELETE'
            });
        } catch (error) {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Xóa bản ghi thất bại.');
        }

        if (response.ok) {
            toastMessage.show('pi-check-circle', 'bg-green-300', 'Thành công! Xóa bản ghi thành công.');

            switch(this.codeValue.split('-')[0]) {
                case 'BĐH':
                    managementBoard.loadData();
                    break;
                case 'CSSX':
                    facility.loadData();
                    break;
                case 'DLPP':
                    agency.loadData();
                    break;
                case 'TTBH':
                    center.loadData();
                    break;
                default:
                    managementBoard.loadData();
            }
        } else {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Xóa bản ghi thất bại.');
        }

        this.id = 0;
        this.data = {
            code: this.code.value,
            name: this.name.value,
            region: this.region.value,
            address: this.address.value
        }
    }

    async deleteManyRecords() {
        let response = null;

        try {            
            response = await fetch(this.url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.selectedRecords)
            });
        } catch (error) {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Xóa các bản ghi đã chọn thất bại.');
        }

        if (response.ok) {
            toastMessage.show('pi-check-circle', 'bg-green-300', 'Thành công! Xóa các bản ghi đã chọn thành công.');

            switch(this.codeValue.split('-')[0]) {
                case 'BĐH':
                    managementBoard.loadData();
                    break;
                case 'CSSX':
                    facility.loadData();
                    break;
                case 'DLPP':
                    agency.loadData();
                    break;
                case 'TTBH':
                    center.loadData();
                    break;
                default:
                    managementBoard.loadData();
            }
        } else {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Xóa các bản ghi đã chọn thất bại.');
        }
    }

    async createNewRecords() {
        let response = null;

        try {
            response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.data)
            });
        } catch (error) {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Thêm các bản ghi thất bại.');
        }

        if (response.ok) {
            toastMessage.show('pi-check-circle', 'bg-green-300', 'Thành công! Thêm các bản ghi thành công.');
            this.data = await response.json();

            switch(this.data[0].code.split('-')[0]) {
                case 'BĐH':
                    managementBoard.loadData();
                    break;
                case 'CSSX':
                    facility.loadData();
                    break;
                case 'DLPP':
                    agency.loadData();
                    break;
                case 'TTBH':
                    center.loadData();
                    break;
                default:
                    managementBoard.loadData();
            }
        } else {
            toastMessage.show('pi-times-circle', 'bg-red-300', 'Thất bại! Thêm các bản ghi thất bại.');            
            
            this.data = data.map((item) => {
                return {
                    ...item,                    
                }
            });
        }
    }
}

const businessForm = BusinessForm.getInstance();

export default businessForm;