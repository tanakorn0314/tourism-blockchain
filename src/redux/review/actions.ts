import ReviewController from "../../services/review/controller"

const reviewController = new ReviewController();

export const ReviewActionTypes = {
    GET_REVIEWS_DATA: 'GET_REVIEWS_DATA',
    CREATE_REVIEW: 'CREATE_REVIEW'
}

export const ReviewActions = {
    getReviewData: () => async (dispatch, getState) => {
        const data = await reviewController.getReviewData();
        dispatch({ type: ReviewActionTypes.GET_REVIEWS_DATA, payload: data });

        reviewController.addReviewCreatedListener(() => { });

        return data;
    },
    pushReviewData: (to, score, message) => async (dispatch, getState) => {
        let store = getState().Review.reviewData;

        const idx = store.findIndex((item) => item.name === to);

        if (store[idx]) {
            store[idx].reviews.push({ score, message });
        }

        dispatch({ type: ReviewActionTypes.GET_REVIEWS_DATA, payload: [...store] });

        return store;
    },
    createReview: (to, score, message) => async () => {
        const result = await reviewController.createReview(to, score, message);
        return result;
    }
}