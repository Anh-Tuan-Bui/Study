import businessForm from "./business_form.js";

class Dialog {
    dialog;
    hasDeleteMany;

    constructor() {
        this.dialog = document.getElementById('dialog');
        this.hasDeleteMany = false;

        this.initialEvents();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Dialog();
        }

        return this.instance;
    }

    initialEvents() {
        this.dialog.querySelector('#close-dialog').addEventListener('click', () => {
            this.closeDialog();
        });

        this.dialog.querySelector('#cancel-dialog').addEventListener('click', () => {
            this.closeDialog();
        });

        this.dialog.querySelector('#confirm-dialog').addEventListener('click', () => {
            this.closeDialog();
            if (this.hasDeleteMany) {
                businessForm.deleteManyRecords();
                this.hasDeleteMany = false;
            } else {
                businessForm.deleteRecord();
            }
        });
    }

    openDialog(description) {
        this.dialog.classList.remove('hidden');
        this.dialog.querySelector('.dialog__description').textContent = description;
        this.dialog.classList.add('flex');
    }

    closeDialog() {
        this.dialog.classList.add('hidden');
        this.dialog.classList.remove('flex');
    }

}

const dialog = Dialog.getInstance();

export default dialog;
