import axios from "axios";
import fileDownload from "js-file-download";
const fetchFunction = (path: string, ...args:any) => {
    console.log(...args);

    axios.post(`http://localhost:3001/api${path}`, 
    ...args)
        .then(res => {
            console.log(...args)
            console.log("res");
            console.log(res.data);
        }


    )

}
const getFunctionDownload =  (path: string, fileName: string) => {
    axios.get(`http://localhost:3001/api${path}`, {  responseType: 'blob', // Important
})
    
            .then( res => {
         fileDownload(res.data,'fileName.jpg')
    })
}
const getFunction  = async  (path: string) => {
    return await axios.get(`http://localhost:3001/api${path}`)

}

const putFetchFunction = (productId: string, updates: any) => {
    console.log(productId,updates);

    axios.put(`http://localhost:3001/api/compare`, 
        {productId,updates})
        .then(res => {
            console.log("res");
            console.log(res.data);
        }
    )

}

export  {fetchFunction,putFetchFunction,getFunction,getFunctionDownload};