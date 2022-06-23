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
      const { data } = await axios.get(`${BASEURL}?&offset=${pages} `);
      const allPost = data?.results;
      setGetPost((oldPost) => [...oldPost, ...allPost]);
      console.log(pages);
    } catch (e) {
      console.log(e);
    }
    pages += 5;
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(`${BASEURL}${id}`);
    setGetPost(getPosts.filter((getPost) => getPost.id !== id));
  };
  return (
    <div className="feeds">
      {getPosts.map((getPost) => {
        return (
          <div className="feeds__blog" key={getPost?.id}>
            <div className="feeds__post">
              <div className="feeds__header">
                {/* title */}
                <h1>
                  {getPost?.title} {getPost?.id}
                </h1>
                {/* Author */}
                <p>By {getPost?.author}</p>
              </div>
              <div className="feeds__content">
                {/* content */}
                <p>{getPost?.content} </p>
              </div>
            </div>

            <div className="feeds__delete">
              <AiFillDelete onClick={() => handleDelete(getPost?.id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
