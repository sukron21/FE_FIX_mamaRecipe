import { combineReducers } from "redux";
import recipeReducer from './recipe'
import recipeprofileReducer from "./recipeprofile";

const rootReducer = combineReducers({
    detailya : recipeReducer, //detail resep
    detailyo : recipeprofileReducer //profile
})

export default rootReducer