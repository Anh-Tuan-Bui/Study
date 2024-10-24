class Skeleton {
    constructor() {

    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Skeleton();
        }

        return this.instance;
    }

    skeletonTable() {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            tbody.innerHTML += `
                <tr class="h-3rem border-bottom-1 border-primary hover:bg-teal-50 text-base white-space-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer">
                    <td class="px-3 border-right-1 border-primary text-center">                                
                        <div class="skeleton w-full h-1rem border-round-sm"></div>
                    </td>
                    <td class="px-3 border-right-1 border-primary">
                        <div class="skeleton w-full h-1rem border-round-sm"></div>
                    </td>
                    <td class="px-3 border-right-1 border-primary">
                        <div class="skeleton w-full h-1rem border-round-sm"></div>
                    </td>
                    <td class="px-3 border-right-1 border-primary">
                        <div class="skeleton w-full h-1rem border-round-sm"></div>
                    </td>
                    <td class="px-3">
                        <div class="skeleton w-full h-1rem border-round-sm"></div>
                    </td>
                </tr>`;
        }        
    }
}

const skeleton = Skeleton.getInstance();

export default skeleton;
