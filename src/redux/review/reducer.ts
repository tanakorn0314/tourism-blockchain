import { ReviewActionTypes } from './actions';

const initialState = {
    reviewData: []
};

export const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ReviewActionTypes.GET_REVIEWS_DATA:
            return {
                ...state,
                reviewData: action.payload
            }
        default: return state;
    }
}
