import axios from "axios";

const fetchFunction = (path: string, email: string, password: string) => {
    console.log("res");

    axios.post(`http://localhost:3001/api${path}`, 
        {email, password})
        .then(res => {
            console.log("res");
            console.log(res.data);
        }


    )

}

const putFetchFunction = (productId: string, updates: any) => {
    console.log(productId,updates);

    axios.put(`http://localhost:3001/api/compare`, 
        {productId})
        .then(res => {
            console.log("res");
            console.log(res.data);
        }
    )

}

export  {fetchFunction,putFetchFunction};