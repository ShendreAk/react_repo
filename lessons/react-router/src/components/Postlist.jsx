import Post from "./post.jsx";
// import { useContext } from "react";
// import { PostList as PostListData } from "../store/postsListStore.jsx"
import Message from "./message.jsx";
// import LoadingSpinner from "./loadingSpinner.jsx";
import { useLoaderData } from "react-router-dom";

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((obj) => { return obj.posts });
}

const PostList = () => {
  const postList = useLoaderData();
  return (
    <div className="post-container">
      {/* {fetching && <LoadingSpinner></LoadingSpinner>} */}
      {postList.length === 0 && <Message></Message>}
      {postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </div>
  )
}
export default PostList;