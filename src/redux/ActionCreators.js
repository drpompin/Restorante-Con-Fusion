//Line below imports all exports in the ActionTypes folder and names it ActionTypes
import * as ActionTypes from './ActionTypes'; 

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