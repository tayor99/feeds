import '../styles/feeds.css';
import { BASEURL } from '../App';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
const Feeds = () => {
  let pages = 0;
  const [getPosts, setGetPost] = useState([]);
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASEURL}?page=${pages}`);
      const allPost = data?.getBlogPost?.docs;
      setGetPost((oldPost) => [...oldPost, ...allPost]);
      pages++;
    } catch (e) {
      console.log(e);
    }
  };
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      getBlogs();
    }
  };

  useEffect(() => {
    getBlogs();
    window.addEventListener('scroll', handleScroll);
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(`${BASEURL}/${id}`);
    setGetPost(getPosts.filter((getPost) => getPost._id !== id));
  };
  return (
    <div className="feeds">
      {getPosts.map((getPost) => {
        return (
          <div className="feeds__blog" key={getPost?._id}>
            <div className="feeds__post">
              <div className="feeds__header">
                {/* title */}
                <h1>{getPost?.title}</h1>
                {/* Author */}
                <p>By {getPost?.author}</p>
              </div>
              <div className="feeds__content">
                {/* content */}
                <p>{getPost?.content} </p>
              </div>
            </div>

            <div className="feeds__delete">
              <AiFillDelete onClick={() => handleDelete(getPost?._id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
