<template>
  <div>
    <b-container>
      <div align="left">
        <b>
          <font size="10">
            <b>Корзина покупок</b><br />
          </font>
        </b>
      </div>
      <div style="position: absolute; top:80px; right: 125px;">
        <b-button href="#/OrderDetails"  variant="warning" size="lg" :disabled="this.$store.state.cart.length === 0">Оформить заказ</b-button>
      </div>
      <div style="position:fixed; bottom:0px; left: 100px;">
        <h6 font size="5">
          © Все права защищены
        </h6>
      </div>
      <CartItem 
      v-for="(item) in this.$store.state.cart" 
      :key="item.id" 
      :cart_item_data="item"
        @deleteFromCart="deleteFromCart" />
    </b-container>
  </div>
</template>

<script>
import CartItem from './cart-item.vue';
import { mapActions } from 'vuex';

export default {
  name: 'cart-v',
  components:
  {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'GET_CART_FROM_API',
      'ALL_DELETE_FROM_CART'
    ]),
    deleteFromCart(data) {
      this.DELETE_FROM_CART(data)
    },
    AllDelete(){
      this.ALL_DELETE_FROM_CART()
    },
  },
  mounted() {
        this.GET_CART_FROM_API()
    }
}
</script>

<style>

</style>