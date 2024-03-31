<template>
    <div class="flex">
    <!-- Sidebar -->
    <div class="fixed left-0 top-0 h-full w-500 bg-gray-200 shadow-lg z-10 transform transition-transform duration-300 ease-in-out" :class="{ '-translate-x-full': !sidebarOpen, 'translate-x-0': sidebarOpen }">
        <div class="p-4 flex justify-between items-center bg-gray-300">
            <h2 class="text-lg font-semibold">Shopping Cart</h2>
            <button @click="toggleSidebar" class="text-gray-600">&times;</button>
        </div>
        <div class="p-4">
            <div v-if="cartItems.length === 0">No items in cart</div>
            <div v-else>
                <div class="flex justify-between items-center mb-2">
                    <p class="font-bold w-2/5 pr-4">Name</p>
                    <p class="font-bold w-1/5 pr-4">Price</p>
                    <p class="font-bold w-1/5 pr-4">Quantity</p>
                    <p class="font-bold w-1/5 pr-4">Total Price</p>
                    <p class="w-1/5"></p> <!-- Empty column for remove button -->
                </div>
                <div v-for="(item) in cartItems" :key=item.index>
                    <div class="flex justify-between items-center mb-2">
                        <p class="w-2/5 pr-4">{{ item.label }}</p>
                        <p class="w-1/5 pr-4">${{ item.price }}</p>
                        <p class="w-1/5 pr-4">x {{ item.quantity }}</p>
                        <p class="w-1/5 pr-4">${{ (item.price * item.quantity).toFixed(2) }}</p>
                        <button @click="removeFromCart(item.index)" class="w-1/5 bg-red-500 text-white px-3 py-1 rounded-md">Remove</button>
                    </div>
                </div>
                <div class="flex justify-between border-t pt-2">
                    <p class="font-bold w-2/5">Total:</p>
                    <p class="font-bold w-3/5">${{ total.toFixed(2) }}</p>
                </div>
                </div>
        </div>
    </div>







  
      <!-- Main Content -->
      <div class="ml-60 p-8 w-full">
        <button v-if="!sidebarOpen" @click="toggleSidebar" class="fixed left-8 top-8 bg-gray-800 text-white px-4 py-2 rounded-md z-10">Open Cart</button>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="(product) in products" :key=product.index class="bg-white shadow-md rounded-md p-2">
                <img :src="product.imgUrl" alt="Product Image" class="w-full h-auto mb-2">
                <h3 class="text-xs font-semibold">{{ product.label }}</h3>
                <p class="text-gray-600 text-xs">Price: ${{ product.price }}</p>
                <input type="number" v-model="product.quantity" min="1" max="10" class="w-12 mt-1 p-1 border border-gray-300 rounded-md text-xs">
                <button @click="addToCart(product)" class="mt-1 bg-gray-800 text-white px-2 py-1 rounded-md text-xs">Add</button>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { products } from '../constants';
  export default {
    data() {
      return {
        sidebarOpen: false,
        products: products.map(product => ({ ...product, quantity: 1 })), // Initialize quantity to 1 for each product
        cartItems: []
      };
    },
    computed: {
      total() {
        return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      }
    },
    methods: {
      toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
      },
      addToCart(product) {
        const index = this.cartItems.findIndex(item => item.index === product.index);
        if (index !== -1) {
          this.cartItems[index].quantity += product.quantity;
        } else {
          this.cartItems.push({ ...product });
        }
      },
      removeFromCart(indexToRemove) {
            const index = this.cartItems.findIndex(item => item.index === indexToRemove);
            if (index >= 0) {
                this.cartItems.splice(index, 1);
            } else {
                console.log("Invalid index to remove");
            }
        }

    }
  };
  </script>
  