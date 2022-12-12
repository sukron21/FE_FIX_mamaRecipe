import { combineReducers } from "redux";
import recipeReducer from './recipe'
import recipeprofileReducer from "./recipeprofile";

const rootReducer = combineReducers({
    detailrecipe : recipeReducer, //detail resep
    detailprofile : recipeprofileReducer //profile
})

export default rootReducer