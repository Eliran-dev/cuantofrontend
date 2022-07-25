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

const putFetchFunction = (product: any, email: string, password: string) => {
    console.log("res");

    axios.post(`http://localhost:3001/api/compare`, 
        {product,email, password})
        .then(res => {
            console.log("res");
            console.log(res.data);
        }
    )

}

export default fetchFunction;