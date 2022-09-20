<template>
   <div class="cart-item">
      <img :src="cart_item_data.img" width="220" alt="img" />
      <div class="cart-item__info">
         <b>{{ cart_item_data.name }}</b> <br />
         <b>{{ cart_item_data.price }}$</b>
      </div>
      <div class="cart-item__quantity">
      </div>
      <b-button pill variant="outline-secondary" @click="deleteFromCart">Удалить</b-button>
   </div>

</template>

<script>
import { mapActions } from 'vuex';
export default {
   name: "cart-item",
   props: {
      cart_item_data: {
         default() {
            return {}
         }
      }
   },
   data() {
      return {}
   },
   computed: {},
   methods: {
      ...mapActions([
      'GET_CART_FROM_API',
      'DELETE_FROM_CART'
      
    ]),
      deleteFromCart() {
         this.$emit('deleteFromCart',this.cart_item_data),
         this.GET_CART_FROM_API()
         
      }
   },
    mounted() {
      this.GET_CART_FROM_API()
     }
}
</script>

<style lang="scss">
.cart-item {
   display: flex;
   flex-wrap: nowrap;
   justify-content: space-between;
   align-items: center;
   
    box-shadow: 0px 0px 8px 0px #a09f9f;
    padding: $padding*2;
    margin-bottom: $margin*2;
}
</style>