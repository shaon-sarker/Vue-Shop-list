<script setup>
const props = defineProps({
    id:{
        type: Number,
        required: true
    }
})
import {onMounted } from 'vue'
import getproductbyapi from '../api/ShowProduct'
const {singleproduct, featchSingleProduct} = getproductbyapi(props.id)
onMounted(featchSingleProduct)
</script>

<template>
<div class="container mt-5">
  <div class="row">
    <div class="col-md-4">
      <img :src=singleproduct.thumbnail class="card-img-top img-thumbnail shadow-lg p-3 mb-5 bg-body-tertiary rounded" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="width: 50rem;">
            <div class="card-body">
                <h3 class="card-title">{{ singleproduct.title }}</h3>
                <p class="card-title">{{ singleproduct.description }}</p>
                <p class="card-text badge rounded-pill text-bg-dark"><strong>Category</strong>: {{ singleproduct.category }}</p><br>
                <p class="card-text badge rounded-pill text-bg-dark"><strong>Price</strong>: {{ singleproduct.price }}</p>
            </div>
      </div>
    </div>
  </div>
</div>
</template>
