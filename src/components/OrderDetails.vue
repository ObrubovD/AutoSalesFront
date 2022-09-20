<template>
  <div id="OrderDetails">
    <b-container>
      <div>
        <b-form @submit="SendForm"  >
        <b-card bg-variant="light">
          <b-form-group 
          label-cols-lg="3" 
          label="Введите данные:" 
          label-size="lg" 
          label-class="font-weight-bold pt-0"
            class="mb-0">
            <b-form-group 
            label="Имя:" 
            label-for="nested-name" 
            label-cols-sm="3" 
            label-align-sm="right">
              <b-form-input 
              v-model="form.name" 
              id="nested-name">
            </b-form-input>
            </b-form-group>

            <b-form-group label="Фамилия:" label-for="nested-surname" label-cols-sm="3" label-align-sm="right">
              <b-form-input v-model="form.surname" id="nested-surname"></b-form-input>
            </b-form-group>

            <b-form >
              <b-form-group id="input-group-1" label="Phone number:" label-for="input-1"
                description="Мы никогда не будем делиться с вашим телефоном с кем-то другим">
                <b-form-input class="raz" id="input-1" v-model="form.phone" type="number"  placeholder="Enter phone" required></b-form-input>
              </b-form-group>
            </b-form>

            <b-form >
              <b-form-group id="input-group-1" label="Email adres:" label-for="input-1"
                description="Ваши персональные данные остануться конфиденциальными.">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required>
                </b-form-input>
              </b-form-group>
            </b-form>
            
          </b-form-group>       
        </b-card>
      </b-form>
      <div style=" padding-top: 20px">
         <b-button v-on:click=" SendForm(); ALL_DELETE_FROM_CART();" 
           variant="warning" size="lg"
           href="#/OrderFinish"
              >Заказать автомобиль
              </b-button>
            </div>
      </div>
    </b-container>
    <div style="position:absolute; bottom:0px; left: 120px;">
      <h6 font size="5">
        © Все права защищены
      </h6>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
      },
      show: true
    }
  },
  methods: {
    ...mapActions([
      'SEND_FORM',
      'ALL_DELETE_FROM_CART'
    ]),
        SendForm() {
       this.SEND_FORM(this.form)
     },
     AllDelete(){
      this.ALL_DELETE_FROM_CART()
    },
  }
}

</script>

<style>
#OrderDetails {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-left: 400px;
  margin-right: 400px;
}
.raz { 
  -moz-appearance: textfield;
}
.raz::-webkit-inner-spin-button { 
  display: none;
}
</style>