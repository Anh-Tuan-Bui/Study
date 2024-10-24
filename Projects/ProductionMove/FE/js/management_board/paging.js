import businessForm from "./business_form.js";
import dialog from "./dialog.js";

class Paging {
    data;
    currentPage;
    itemsPerPage;

    constructor() {
        this.data = [];
        this.currentPage = 1;
        this.itemsPerPage = 20;

        this.initialEvents();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Paging();
        }

        return this.instance;
    }

    searchBar = document.getElementById('search-bar');

    selectAll = document.getElementById('select-all');

    records;
    selectedRecords = [];
    totalRecord = document.getElementById('total-record');

    page = document.getElementById('page');
    pageOptions = document.getElementById('page-options');
    option = document.getElementById('option');
    
    itemsPerPageOptions = document.querySelectorAll('#page-options .mx-3');
    
    chevronUp = document.querySelector('.pi-chevron-up');
    chevronDown = document.querySelector('.pi-chevron-down');
    
    chevronNext = document.querySelector('.pi-chevron-right');
    chevronBack = document.querySelector('.pi-chevron-left');

    isShowing = false;

    initialEvents() {
        this.searchBar.addEventListener('input', e => {
            const searchValue = e.target.value.toLowerCase();
            const filteredData = this.data.filter((item) => {
                return item.code.toLowerCase().includes(searchValue) || item.name.toLowerCase().includes(searchValue) || item.region.toLowerCase().includes(searchValue) || item.address.toLowerCase().includes(searchValue);
            });

            const html = Array.from(filteredData).map((item) => {
                return `
                    <tr class="h-3rem border-bottom-1 border-primary hover:bg-teal-50 text-base white-space-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer">
                        <td class="px-3 border-right-1 border-primary text-center">
                            <input type="checkbox" name="" id="${item.id}" class="cursor-pointer">
                        </td>
                        <td class="px-3 border-right-1 border-primary">${item.code}</td>
                        <td class="px-3 border-right-1 border-primary">${item.name}</td>
                        <td class="px-3 border-right-1 border-primary">${item.region}</td>
                        <td class="px-3">${item.address}</td>
                        <td class="relative hidden">
                            <div class="absolute right-100 z-1" style="bottom: 12px">
                                <i id = "edit" class="mx-2 bg-teal-50 hover:bg-teal-200 pi pi-pen-to-square"></i>
                                <i id = "delete" class="mr-8 bg-teal-50 hover:bg-teal-200 pi pi-trash"></i>
                            </div>
                        </td>
                    </tr>
                `;
            });

            document.querySelector('tbody').innerHTML = html.join('');

            this.handleRecord(filteredData);
            
            if (searchValue === '') {
                this.paging();
            }
        });

        this.page.addEventListener('click', () => {
            if (!this.isShowing) {
                this.openPageOptions();
            } else {
                this.closePageOptions();
            }
        });

        this.selectAll.addEventListener('click', () => {
            this.selectAllRecord();
        });

        this.chevronNext.addEventListener('click', () => {
            if (this.currentPage < Math.ceil(this.data.length / this.itemsPerPage)) {
                this.currentPage++;
                this.paging();
            }
        });

        this.chevronBack.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.paging();
            }
        });

        this.itemsPerPageOptions.forEach((item) => {
            item.addEventListener('click', () => {
                this.currentPage = 1;
                this.itemsPerPage = parseInt(item.textContent);
                this.option.textContent = item.textContent;

                this.paging();
                this.closePageOptions();
            });
        });
    }

    openPageOptions() {
        this.pageOptions.classList.remove('hidden');
        this.chevronDown.classList.add('hidden');
        this.chevronUp.classList.remove('hidden');

        this.isShowing = true;
    }

    closePageOptions() {
        this.pageOptions.classList.add('hidden');
        this.chevronDown.classList.remove('hidden');
        this.chevronUp.classList.add('hidden');

        this.isShowing = false;
    }

    paging() {
        this.selectAll.checked = false;

        let startIndex = (this.currentPage - 1) * this.itemsPerPage;
        let endIndex = startIndex + this.itemsPerPage;
        const displayItems = this.data.slice(startIndex, endIndex);

        const html = Array.from(displayItems).map((item) => {
            return `
                <tr class="h-3rem border-bottom-1 border-primary hover:bg-teal-50 text-base white-space-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer">
                    <td class="px-3 border-right-1 border-primary text-center">
                        <input type="checkbox" name="" id="${item.id}" class="cursor-pointer">
                    </td>
                    <td class="px-3 border-right-1 border-primary">${item.code}</td>
                    <td class="px-3 border-right-1 border-primary">${item.name}</td>
                    <td class="px-3 border-right-1 border-primary">${item.region}</td>
                    <td class="px-3">${item.address}</td>
                    <td class="relative hidden">
                        <div class="absolute right-100 z-1" style="bottom: 12px">
                            <i id = "edit" class="mx-2 bg-teal-50 hover:bg-teal-200 pi pi-pen-to-square"></i>
                            <i id = "delete" class="mr-8 bg-teal-50 hover:bg-teal-200 pi pi-trash"></i>
                        </div>
                    </td>
                </tr>
            `
        });

        document.querySelector('tbody').innerHTML = html.join('');
        
        this.handleRecord(this.data);
    }

    handleRecord(data) {
        this.records = document.querySelectorAll('tbody tr');
        
        let countRecord = 0;
        this.records.forEach((record) => {
            if (this.selectedRecords.find((selectedRecord) => selectedRecord.id == record.querySelector('td input').id)) {
                record.classList.add('bg-teal-100');
                record.querySelector('td input').checked = true;
                countRecord++;
            }

            if (countRecord == this.records.length) {
                this.selectAll.checked = true;
            } else {
                this.selectAll.checked = false;
            }

            record.addEventListener('mouseenter', () => {
                record.querySelector('.relative').classList.toggle('hidden');
            });

            record.addEventListener('mouseleave', () => {
                record.querySelector('.relative').classList.toggle('hidden');
            });

            record.querySelector('td input').addEventListener('click', () => {
                record.classList.toggle('bg-teal-100');
                if (record.querySelector('td input').checked) {
                    this.selectedRecords.push(data.find((item) => item.id == record.querySelector('td input').id));

                    if (data.length != this.data.length) {
                        if (this.selectedRecords.length == data.length) {
                            this.selectAll.checked = true;
                        }
                    } else {
                        if (this.selectedRecords.length == this.records.length) {
                            this.selectAll.checked = true;                            
                        }
                    }
                } else {
                    this.selectedRecords = this.selectedRecords.filter((selectedRecord) => selectedRecord.id != record.querySelector('td input').id);
                    this.selectAll.checked = false;
                }

                console.log(this.selectedRecords);                
            });

            record.querySelector('#edit').addEventListener('click', () => {
                businessForm.editForm(data.find((item) => item.id == record.querySelector('td input').id));
            });

            record.querySelector('#delete').addEventListener('click', () => {                
                if (this.selectedRecords.length > 0) {
                    dialog.openDialog('Bạn có chắc chắn muốn xóa tất cả bản ghi đã chọn không?');
                    businessForm.selectedRecords = Array.from(this.selectedRecords).map((record) => record.id);
                    businessForm.data = Array.from(this.selectedRecords).map((record) => {
                        return {        
                            code: record.code,
                            name: record.name,
                            region: record.region,
                            address: record.address
                        };
                    });
                    dialog.hasDeleteMany = true;
                } else {
                    dialog.openDialog('Bạn có chắc chắn muốn xóa bản ghi này không?');
                    businessForm.id = parseInt(record.querySelector('td input').id);
                    businessForm.codeValue = record.querySelector('td:nth-child(2)').textContent;
                    
                    businessForm.code.value = businessForm.codeValue;
                    businessForm.region.value = record.querySelector('td:nth-child(4)').textContent;
                    businessForm.name.value = record.querySelector('td:nth-child(3)').textContent;
                    businessForm.address.value = record.querySelector('td:nth-child(5)').textContent;
                }
            });
        });
    }

    selectAllRecord() {    
        if (this.selectAll.checked) {
            const presentRecords = Array.from(this.records).map((record) => {
                return {
                    id: parseInt(record.querySelector('td input').id),
                    code: record.querySelector('td:nth-child(2)').textContent,
                    name: record.querySelector('td:nth-child(3)').textContent,
                    region: record.querySelector('td:nth-child(4)').textContent,
                    address: record.querySelector('td:nth-child(5)').textContent
                }
            });

            if (this.selectedRecords.length == 0) {                
                this.selectedRecords.push(...presentRecords);
            } else {
                presentRecords.forEach((record) => {
                    if (!this.selectedRecords.find((selectedRecord) => selectedRecord.id == record.id)) {
                        this.selectedRecords.push(record);
                    }
                });
            }
            
            this.records.forEach((record) => {
                record.classList.add('bg-teal-100');
                record.querySelector('td input').checked = true;
            });
        } else {
            this.records.forEach((record) => {
                record.classList.remove('bg-teal-100');
                record.querySelector('td input').checked = false;

                this.selectedRecords = this.selectedRecords.filter((selectedRecord) => selectedRecord.id != record.querySelector('td input').id);
            });
        }

        console.log(this.selectedRecords);
    }

    getMaxCode(data) {
        let maxCode = data.reduce((max, obj) => (parseInt(max.split('-')[1]) < parseInt(obj.code.split('-')[1])) ? obj.code : max, data[0].code);

        return maxCode;
    }
}

const paging = Paging.getInstance();

export default paging;