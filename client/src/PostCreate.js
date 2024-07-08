import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('inside on submit: ')
    try {
      const response = await axios.post("http://localhost:4000/posts", {
        title,
      });      
      console.log('create post response:  ', response)
      setTitle("");
    } catch (error) {
      console.log('post submit error: ', error)
    }




  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
