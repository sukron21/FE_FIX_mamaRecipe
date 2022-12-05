import axios from "axios";

export const detailrecipe = (id) => {
        return  {
            type: 'GET_LIST_DETAIL',
            payload: axios ({
                url:`${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`,
                method:"GET"
            })
        }
    }