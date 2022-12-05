// init state
const initialState ={
    data:[],
    isLoading:false,
    isError:false,
}


const recipeprofileReducer= (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIST_DETAIL_PROFILE_PENDING":
            return {...state,isLoading:true}
        case "GET_LIST_DETAIL_PROFILE_FULFILLED":
            return{...state,isLoading:false, data:action.payload.data.rows}
        case "GET_LIST_DETAIL_PROFILE_REJECTED":
            return{...state,isLoading:false, isError:true}
        default:
            return state
    }
}

export default recipeprofileReducer