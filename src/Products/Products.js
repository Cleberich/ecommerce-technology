import { useState, useEffect } from "react";
import { getProducts } from "../asynckMock";
import Card from '../Components/Card/Card'

const Products = () =>{
    const [products, setProducts] = useState([])
    useEffect (()=>{
        getProducts().then(resolve =>{
            console.log(resolve)
            setProducts(resolve)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            console.log("Carga finalizada")
        })
    })
    
    return (
        <div>
            <Card products = {products}/>
        </div>
    )
}
export default Products