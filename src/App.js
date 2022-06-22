import './App.css';
import Feeds from './component/Feeds';
import Header from './component/Header';
import BlogPost from './component/BlogPost';

import Modal from 'react-modal';
import { useState } from 'react';

export const BASEURL = 'https://blog-api344.herokuapp.com/blogposts';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="app">
      <Header handleOpenModal={handleOpenModal} />
      {/* feed */}
      <Feeds />
      {/* posting to blog modal */}
      <Modal isOpen={modalIsOpen} className="app__modal">
        <BlogPost handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default App;
