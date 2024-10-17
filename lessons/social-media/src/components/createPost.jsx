import { useContext, useRef } from "react";
import { PostList as Postadder } from "../store/postsListStore";

const CreatePost = () => {
  const { addPost } = useContext(Postadder);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    const userid = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";
    const post = { userid, title, body, likes, dislikes, tags }
    addPost(post);
  }
  return (
    <form className="createPost" onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User Id here:</label>
        <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Your User Id" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputText" className="form-label">Title</label>
        <input type="text" className="form-control" id="exampleInputText" ref={postTitleElement} placeholder="Give a title to your post" />
        <div id="emailHelp" className="form-text">Share your thoughs!</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPost" className="form-label">Type content</label>
        <input type="text" rows='10' className="form-control" id="exampleInputPost" ref={postBodyElement} placeholder="Write here" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Likes
        </label>
        <input type="text" ref={likesElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Dislikes
        </label>
        <input type="text" ref={dislikesElement} className="form-control" id="reactions" placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input type="text" className="form-control" id="tags" ref={tagsElement} placeholder="Please enter tags using space"
        />
      </div>
      {/* <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div> */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
export default CreatePost;