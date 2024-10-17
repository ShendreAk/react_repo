import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

  return (
    <Form className="createPost">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User Id here:</label>
        <input type="text" name="userId" className="form-control" id="userId" placeholder="Your User Id" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputText" className="form-label">Title</label>
        <input type="text" className="form-control" id="exampleInputText" name="title" placeholder="Give a title to your post" />
        <div id="emailHelp" className="form-text">Share your thoughs!</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPost" className="form-label">Type content</label>
        <input type="text" rows='10' className="form-control" id="exampleInputPost" name="body" placeholder="Write here" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of likes
        </label>
        <input type="text" name="likes" className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of dislikes
        </label>
        <input type="text" name="dislikes" className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Views
        </label>
        <input type="text" name="views" className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input type="text" className="form-control" id="tags" name="tags" placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
  );
}

export async function submitPostAction(data) {
  // console.lof("in here");
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  // console.log(postData);
  // postData.reactions = { postData.likes}
  // fetch('https://dummyjson.com/posts/add', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ userId, title, body, reactions, views, tags })
  // })
  //   .then(res => res.json())
  //   .then(post => addPost(post))
  //   ;
  return redirect("/");
};
export default CreatePost;