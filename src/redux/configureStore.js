import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    //This ConfigureStore function creates a store as seen below. The store uses combineReducers to 
    //combine and map the different initial states of the application.
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
        })
    );
    return store;
}


//This application is then updated in the App.js file to make it possible to use the redux.