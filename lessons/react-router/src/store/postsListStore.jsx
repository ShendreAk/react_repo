import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },

  deletePost: () => { },
});

const postListtackler = (currentVal, action) => {
  let newPostList = currentVal;
  if (action.type === 'ADD_NEW') {
    // console.log("action post:", action.payload);
    newPostList = [action.payload, ...currentVal];

  }
  else if (action.type === 'DEL_NEW') {

    newPostList = currentVal.filter((element) => element != action.payload.post);
    // console.log(newPostList);
  }
  else if (action.type === 'FETCH_DATA') {
    // console.log(action.payload.fetchedPosts);
    newPostList = [...action.payload.fetchedPosts];
  }
  return newPostList;
};


const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListtackler, []);

  const addPost = (post) => {
    // console.log('added post: ', post);
    dispatchPostList({
      type: 'ADD_NEW',
      payload: post,
    });
  };
  // using useState to run fetch at initial stage
  // const [dataFetched, setFetched] = useState(false);
  // if (!dataFetched) {
  //   fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then((obj) => {
  //       let fetchedPosts = obj.posts;
  //       dispatchPostList({
  //         type: 'FETCH_DATA',
  //         payload: { fetchedPosts },
  //       });
  //     });
  //   setFetched(true);

  // }



  // using useEffect for fetching data and maintaining state
  // const [fetching, setFetching] = useState(false);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   setFetching(true);
  //   fetch('https://dummyjson.com/posts', { signal })
  //     .then(res => res.json())
  //     .then((obj) => {
  //       let fetchedPosts = obj.posts;
  //       dispatchPostList({
  //         type: 'FETCH_DATA',
  //         payload: { fetchedPosts },
  //       });
  //       setFetching(false);
  //     });
  //   return () => { controller.abort(); }
  // }, [postList.length === 0]);




  const deletePost = (post) => {
    // console.log('delete clicked');
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

