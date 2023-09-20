import {ref} from 'vue'
import axios from 'axios'

export default function getproductbyapi(id)
{
    const products = ref([])
    const singleproduct = ref([])

    const featchProductData = async () =>{
    let response = await axios.get('http://127.0.0.1:8000/api/v1/products')
    products.value = response.data.data
    // https://fakestoreapi.com/products
    }

    const featchSingleProduct = async () =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/products/${id}`)
        singleproduct.value = response.data.data
        }

    return{
        products,
        singleproduct,
        featchProductData,
        featchSingleProduct
    }

}