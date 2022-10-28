import { getDocs, collection, query, where } from 'firebase/firestore'
import { baseDeDatos } from '.'

export const getProducts = (categoryId)=>{
    return new Promise((resolve, reject)=>{

        const collectionReferencia = categoryId
        ? query(collection(baseDeDatos, 'products'), where('category', '==', categoryId))
        :collection(baseDeDatos, 'products')
       
        getDocs(collectionReferencia).then(response =>{
       
            const productosAdaptados = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            response(productosAdaptados)
        }).catch(error =>{
           reject(error)
        })
    })
}