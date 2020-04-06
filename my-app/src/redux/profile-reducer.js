const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {

    posts: [
        {id: 1, message: 'hi my first post', likesCount: 12},
        {id: 2, message: 'hi my second post', likesCount: 222},
        {id: 3, message: 'hi my second post222', likesCount: 22222},

    ],
        newPostText: 'Privet',


}


 const profileReducer =(state = initialState, action) => {
 switch(action.type){
     case ADD_POST:
         let newPost = {
             id: 5,
             message: state.newPostText,
             likesCount: 0

         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
     case UPDATE_NEW_POST_TEXT:
         state.newPostText = (action.newText);
         return state;
     default:
         return state;
 }


}

export default profileReducer;


export const appPostActionCreator = () => ({

    type: ADD_POST

})

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})