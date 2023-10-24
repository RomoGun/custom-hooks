import { useState } from 'react';


export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm);
    

    const onInputCahnge = ({target}) => {
        const {name,value} = target;
        setFormState({//Se desestructura el useState
            ...formState,//se recarga el valor asignado
            [name]: value//Propiedad computada del objeto
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputCahnge,
        onResetForm,
    }
}
