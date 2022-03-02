export const ADD_TO_PRIVATE = "ADD_TO_PRIVATE";
export const REMOVE_FROM_PRIVATE = "REMOVE_FROM_PRIVATE";

const initialPrivateState = []

const privatePostsReducer = (state = initialPrivateState, action) => {
    console.log("privatePostsReducer: " + action.payload);
    switch (action.type) {
      case ADD_TO_PRIVATE:
          if (state.find(post => post.id === action.payload.id)) {
            return state;
          } else {
            return [...state, action.payload]
          }
      case REMOVE_FROM_PRIVATE:
        return state.filter(privateItem => privateItem.id !== action.payload.id)
    }
    return state
  }

export default privatePostsReducer;