<template>
    <div class='Catalog-c'>
        <b-container>
            <div align="left">
                <b>
                    <font size="10">
                        <b>Каталог автомобилей</b><br />
                    </font>
                </b>
            </div>
            <div class="catalog_list">
                <CatalogItem v-for="product in this.$store.state.products" 
                :key="product.id" 
                v-bind:product_data="product" 
                @AddToCart="AddToCart" />
            </div>
        </b-container>
    </div>
</template>

<script>
import CatalogItem from './Catalog-item'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    name: "Catalog-c",
    components: {
        CatalogItem
    },
    props: {},
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        AddToCart(data) {
             this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>



<style lang="scss">
.Catalog {
    &_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}

.catalog_list {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: row;
}
</style>