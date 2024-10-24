import businessForm from "./business_form.js";

class ToastMessage {
    toastMessage;
    toastIcon;
    toastDescription;
    toastUndo

    constructor() {
        this.toastMessage = document.getElementById('toast-message');
        this.toastIcon = this.toastMessage.querySelector('.toast__icon');
        this.toastDescription = this.toastMessage.querySelector('.toast__description');
        this.toastUndo = this.toastMessage.querySelector('.toast__undo');

        this.initialEvents();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ToastMessage();
        }

        return this.instance;
    }

    initialEvents() {
        this.toastMessage.querySelector('.toast__close').addEventListener('click', () => {
            this.toastMessage.classList.add('hidden');
        });

        this.toastUndo.addEventListener('click', () => {
            this.toastMessage.classList.add('hidden');
            if (businessForm.selectedRecords.length > 0) {
                businessForm.createNewRecords();
            } else {
                if (businessForm.id != 0) {
                    businessForm.editForm(businessForm.data);
                } else {
                    businessForm.createNewRecord();                    
                }
            }
        });
    }

    show(icon, bgColor, message) {
        this.toastIcon.classList.add(icon);
        this.toastIcon.classList.add(bgColor);
        this.toastDescription.textContent = message;
        
        this.toastMessage.classList.remove('hidden');
        this.toastMessage.classList.add('fadeinright');
        this.toastMessage.classList.add('animation-duration-100');
        
        setTimeout(() => {
            this.toastMessage.classList.remove('fadeinright');
            this.toastMessage.classList.remove('animation-duration-100');
            
            this.toastMessage.classList.add('fadeout');
            this.toastMessage.classList.add('animation-duration-1000');
        }, 5000);
        setTimeout(() => {
            this.toastMessage.classList.add('hidden');
            
            this.toastIcon.classList.remove(icon);
            this.toastIcon.classList.remove(bgColor);
            this.toastMessage.classList.remove('fadeout');
            this.toastMessage.classList.remove('animation-duration-1000');
        }, 5900);
    }
}

const toastMessage = ToastMessage.getInstance();

export default toastMessage;
