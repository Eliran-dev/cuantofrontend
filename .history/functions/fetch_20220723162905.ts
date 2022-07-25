import axios from "axios";

const fetchFunction = (path: string, ...args:any) => {
    console.log(...args);

    axios.post(`http://localhost:3001/api${path}`, 
        {...args})
        .then(res => {
            console.log(...args)
            console.log("res");
            console.log(res.data);
        }


    )

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

export  {fetchFunction,putFetchFunction};