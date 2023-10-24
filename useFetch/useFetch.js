import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async() =>{//Realisa la peticion

        setState({
            ...state,
            isLoading:true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,// se deja solo como data ya que hay redundancia en el nombre de las bariables 
            isLoading: false,
            hasError: null,
        });
    }
  
 
    useEffect(() => {
        getFetch();
    }, [url])
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
