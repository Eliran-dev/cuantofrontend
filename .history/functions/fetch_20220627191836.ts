import axios from "axios";

const fetchFunction = (path: string, email: string, password: string) => {
    console.log("res");

    axios.post(`${process.env.NEXT_PUBLIC_Backend}/${path}`, 
        {email, password})
        .then(res => {
            console.log("res");
            console.log(res.data);
        }


    )

}


export default fetchFunction;