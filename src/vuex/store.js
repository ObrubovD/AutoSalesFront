import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    form: {}
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    //
    SET_CART: (state, cart) => {
       state.cart = cart;
    },
    SEND_FORM_ORDER:(state,form) => {
      state.form=form;
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:5003/Cars', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((eror) => {
          console.log(eror)
          return eror;
        })
    },
    GET_CART_FROM_API({commit}){
      return axios('http://localhost:5003/api/ShopCart', {
        method: "GET"
      })
      .then((cart)=>{
        commit('SET_CART',cart.data);
        return cart;
      })
      .catch((eror) => {
        console.log(eror)
        return eror;
      })
    },
    ADD_TO_CART({ commit }, product) {
    const response=axios.post('http://localhost:5003/api/ShopCart/AddCarItem',product );
      console.log(response.data);
      commit('SET_CART',product);
    },
     DELETE_FROM_CART({commit},cart) {
      const response=axios.delete('http://localhost:5003/api/ShopCart?id=' + cart.id)
      console.log(response.data);  
      commit('SET_CART',{commit});
    },
    ALL_DELETE_FROM_CART() {
      const response=axios.delete('http://localhost:5003/api/ShopCart/AllDelete')
      console.log(response.data);
    },
    SEND_FORM({commit},form) {
      const response=axios.post('http://localhost:5003/api/ShopOrder',form );
      console.log(response.data);
      commit('SEND_FORM_ORDER',{commit});
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    FORM(state){
      return state.form;
    }
  },
});

export default store;