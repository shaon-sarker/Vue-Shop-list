import {ref} from 'vue'
import axios from 'axios'

export default function getproductbyapi(id)
{
    const products = ref([])
    const singleproduct = ref([])

    const featchProductData = async () =>{
    let response = await axios.get('https://dummyjson.com/products?limit=28')
    products.value = response.data.products
    }

    const featchSingleProduct = async () =>{
        let response = await fetch(`https://dummyjson.com/products/${id}`)
        singleproduct.value = await response.json()
        }
    return{
        products,
        singleproduct,
        featchProductData,
        featchSingleProduct
    }

}