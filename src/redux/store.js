import { configureStore } from '@reduxjs/toolkit';

import CocktailReducer from "./feature/cocktailSlice";

export default configureStore({
    reducer: {
        app: CocktailReducer
    }
})