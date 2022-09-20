<template>
    <div class='Catalog-item'>
        <img :src="product_data.img" width="220" alt="img">
        <b class="Catalog-item__name">{{ product_data.name }}</b><br />
        <b class="Catalog-item__price">Price:{{ product_data.price }} $</b><br />
        <b-button class="Catalog-item__add_to_cart_btn btn" @click="AddToCart" variant="warning" size="lg">Добавить в
            корзину</b-button>
    </div>
</template>

<script>
export default {
    name: "Catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        AddToCart() {
            this.$emit('AddToCart',this.product_data);
        }
    },
}
</script>

<style lang="scss">
.Catalog-item {
    flex-basis: 25%;
    box-shadow: 0px 0px 8px 0px #a09f9f;
    padding: $padding*2;
    margin-bottom: $margin*2;
    width: 250px;
}
</style>