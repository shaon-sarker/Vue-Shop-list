<script setup>
import {onMounted } from 'vue'
import getproductbyapi from '../api/ShowProduct'
import { RouterLink } from 'vue-router'
const {products, featchProductData} = getproductbyapi()
onMounted(featchProductData)
</script>

<template>
 <div class="container mt-5 ">
    <div class="row">
        <div class="col-md-3" v-for="product in products" :key="product.id">
            <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
                <img :src="product.image" class="card-img-top " alt="product_image">
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">Price: {{ product.price }}</p>
                    <router-link :to="{name: 'product', params: {id: product.id}}" class="btn btn-primary card-link" >View Details</router-link>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
