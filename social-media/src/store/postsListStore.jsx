import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  // addInitialPosts: () => {},
  deletePost: () => { },
});

const postListtackler = (currentVal, action) => {
  let newPostList = currentVal;
  if (action.type === 'ADD_NEW') {
    newPostList = [action.payload.newPost, ...currentVal];

  }
  else if (action.type === 'DEL_NEW') {
    console.log('entered here');
    console.log(newPostList);
    newPostList = currentVal.filter((element) => element != action.payload.post);
    console.log(newPostList);
  }
  return newPostList;
};


const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListtackler, []);
  const addPost = (post) => {
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
      likes: post.likes,
      dislikes: post.dislikes,
      userId: post.id,
      tags: post.tags,
    };

    dispatchPostList({
      type: 'ADD_NEW',
      payload: {
        newPost
      }
    });
  };
  const deletePost = (post) => {
    console.log('delete clicked');
    dispatchPostList({
      type: 'DEL_NEW',
      payload: { post, },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};


// const DEFAULT_POST_LIST = [{
//   id: '1',
//   userId: 'user-9',
//   title: " ABC ",
//   body: 'I am just posting!!',
//   likes: 100,
//   dislikes: 2,
//   tags: ['vacation', "Chill", "Chillax"]
// },
// {
//   id: '2',
//   userId: 'user-8',
//   title: " ABC___pass ",
//   body: 'I am just posting_____xxx!!',
//   likes: 10,
//   dislikes: 5,
//   tags: ['Graduation', "jobs", "openforwork"]
// }];

export default PostListProvider;

