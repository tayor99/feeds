import axios from 'axios';
import { useState } from 'react';
import '../styles/blogpost.css';
import { BASEURL } from '../App';

const BlogPost = ({ handleCloseModal }) => {
  const [details, setDetails] = useState({
    author: '',
    title: '',
    content: '',
  });
  const postDetails = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASEURL, details);
    } catch (e) {
      console.log(e);
    }
    setDetails({
      author: '',
      title: '',
      content: '',
    });
  };
  return (
    <div className="blogpost">
      <div className="blogpost__close">
        <button onClick={handleCloseModal}>X</button>
      </div>
      <div className="blogpost__form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            value={details.author}
            onChange={postDetails}
          />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={details.title}
            onChange={postDetails}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            name="content"
            id="content"
            rows="10"
            value={details.content}
            onChange={postDetails}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
