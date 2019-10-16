//Line below imports all exports in the ActionTypes folder and names it ActionTypes
import * as ActionTypes from './ActionTypes'; 
import { DISHES } from '../shared/dishes';

//The function below is a function that creates an action object .i.e. A plain javascript object.
//In order to create a comment, "dishId", "rating", "author" and "comment" are all values in the default
//comment object; hence, their use as parameters here
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment 
    }
    //the payload above specifies the data that needs to be carried in the action object to the 
    //reducer function. .i.e. the data that will be sent back by the exact ActionType
});


//Below function is a Thunk that dispatches several actions/functions
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}


//All the below are functions that dispatch an action. i.e. They're returning an action object
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});


export const dishesFailed = (err_msg) => ({
    type: ActionTypes.DISHES_FAILED,

    payload: err_msg,
});


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,

    payload: dishes,
});

