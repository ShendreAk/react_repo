import { SlLike } from "react-icons/sl";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";

import { useContext } from "react";
import { PostList as deleter } from "../store/postsListStore";
const Post = ({ post }) => {
  const { deletePost } = useContext(deleter);
  return (
    <div className="post-card card " >
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletebtn" onClick={() => deletePost(post)}>
          <MdDeleteForever className='icon' />
        </span>
        <h5 className="card-title postTitle">{post.title}</h5>
        {post.tags.map((tag) => <span key={tag} className="badge text-bg-primary customBadge">#{tag}</span>)}

        <p className="card-text scrollbox">{post.body}</p>
        <div className="react">
          <button type="button" className="btn btn-primary position-relative reactions">
            <SlLike />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.reactions.likes}
            </span>
          </button>
          <button type="button" className="btn btn-primary position-relative reactions">
            <AiOutlineDislike />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.reactions.dislikes}
            </span>
          </button>
          <button type="button" className="btn btn-primary position-relative reactions">
            Views
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.views}
            </span>
          </button>

        </div>

      </div>
    </div>
  );
};
export default Post;