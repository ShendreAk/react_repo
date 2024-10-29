import Post from "./post.jsx";
import { useContext } from "react";
import { PostList as PostListData } from "../store/postsListStore.jsx"
const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <div className="post-container">
      {postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </div>
  )
}
export default PostList;