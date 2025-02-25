<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList
            v-model="products"
            dataKey="id"
            :pt="{
                list: { style: { height: 'auto' } },
                moveUpButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                }
            }"
        >
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-900">${{ slotProps.item.price }}</span>
                </div>
            </template>
        </OrderList>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            code: {
                basic: `
<OrderList
    v-model="products"
    dataKey="id"
    :pt="{
        list: { style: { height: 'auto' } },
        moveUpButton: {
            root: { class: 'bg-teal-400 border-teal-400' }
        }
    }"
>
    <template #header> List of Products </template>
    <template #item="slotProps">
        <div class="flex flex-wrap p-2 align-items-center gap-3">
            <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
            <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ slotProps.item.name }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ slotProps.item.category }}</span>
                </div>
            </div>
            <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
        </div>
    </template>
</OrderList>`,
                options: `
<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList
            v-model="products"
            dataKey="id"
            :pt="{
                list: { style: { height: 'auto' } },
                moveUpButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                }
            }"
        >
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </OrderList>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService'
export default {
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList
            v-model="products"
            dataKey="id"
            :pt="{
                list: { style: { height: 'auto' } },
                moveUpButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                }
            }"
        >
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (this.products = data));
});
<\/script>`,
                data: `
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`
            }
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
</script>
