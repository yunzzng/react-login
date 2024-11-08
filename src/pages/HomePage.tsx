import { useEffect } from "react";
import { API_BASE_URL } from "../consts/api";

const HomePage = () =>{
    console.log(API_BASE_URL);
    useEffect(()=> {
        throw Error("This is CustomError");
    }, []);

    return <h2>This is HomePage</h2>;
};

export default HomePage;