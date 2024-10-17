import Post from "./post.jsx";
import { useContext } from "react";
import { PostList as PostListData } from "../store/postsListStore.jsx"
import Message from "./message.jsx";
import LoadingSpinner from "./loadingSpinner.jsx";
const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div className="post-container">
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <Message></Message>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </div>
  )
}
export default PostList;