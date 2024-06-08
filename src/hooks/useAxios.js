import React, { useState, useEffect} from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";


const useAxios = (url) => {

    const [response, setResponse] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState();

    const addStateObj = async (url, options) => {

        if (options){
            url = `${url}/${options}`;
        }

        const resp = await axios.get(`${url}`);

        setResponse(response => [...response, {...resp.data, id: uuid()}]);
    }


    return [response, addStateObj]
}

export default useAxios