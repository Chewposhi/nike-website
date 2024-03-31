<template>
    <div class="flex-none bg-gray-200 shadow-lg" :class="{ 'w-60': isOpen, 'w-0': !isOpen }">
      <div class="p-4 bg-gray-300 flex justify-between items-center">
        <h2 class="text-lg font-semibold">Shopping Cart</h2>
        <button @click="toggleSidebar" class="text-gray-600">&times;</button>
      </div>
      <div class="p-4">
        <div v-if="cartItems.length === 0">No items in cart</div>
        <div v-for="(item, index) in cartItems" :key="index">
          <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
        </div>
        <p>Total: ${{ total }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean,
      cartItems: Array
    },
    computed: {
      total() {
        return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      }
    },
    methods: {
      toggleSidebar() {
        this.$emit('toggle');
      }
    }
  };
  </script>
  
  