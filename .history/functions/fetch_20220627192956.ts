import axios from "axios";

const fetchFunction = (path: string, email: string, password: string) => {
    console.log("res");

    axios.post(`http://localhost:3001${path}`, 
        {email, password})
        .then(res => {
            console.log("res");
            console.log(res.data);
        }


    )

}


export default fetchFunction;