import axios from "axios";

export const addrecipe = (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipe`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

// export const getRecipe = (limit, page) => {
//     return  {
//         type: 'GET_LIST_DETAIL_PROFILE',
//         payload: axios ({
//             url:`${process.env.REACT_APP_BACKEND_URL}/recipe?limit=${limit}${
//                 page ? `&page=${page}` : ""
//               }`,
//             method:"GET"
//         })
//     }
// }

export const getRecipe = (sort, limit, page) => {
    return {
        type: 'GET_LIST_DETAIL_PROFILE',
        payload: axios({
            url: `${process.env.REACT_APP_BACKEND_URL
                }/recipe?sort=${sort}&limit=${limit}${page ? `&page=${page}` : ""
                }`,
            method: "GET"
        })
    }
}
export const getRecipeSearch = (titleSearch, sort, limit, page) => {
    return {
        type: 'GET_LIST_DETAIL_PROFILE',
        payload: axios({
            url: `${process.env.REACT_APP_BACKEND_URL
                }/recipe/listsearch/${titleSearch}?sort=${sort}&limit=${limit}${page ? `&page=${page}` : ""
                }`,
            method: "GET"
        })
    }
}

export const updaterecipe = (form, id) => {
    return new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export const deleterecipe = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


    export const searchrecipedetail = (titleSearch) => {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipe/search/${titleSearch}`)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }