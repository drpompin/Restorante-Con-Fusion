import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes'; 

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            var comment = action.payload;
            comment.id = state.length; //state.length is used bcos there's no server to auto-generate id
            comment.date = new Date().toISOString();
            return state.concat(comment);
            //the return statement above uses concat to add a new comment without mutating the 
            //original state of the comment object.

        default: return state;
    }
}