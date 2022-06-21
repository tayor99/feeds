import "./App.css";
import Feeds from "./component/Feeds";
import Header from "./component/Header";
import BlogPost from "./component/BlogPost";

import Modal from "react-modal";
import { useState } from "react";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    console.log("lol");
  };
  return (
    <div className="app">
      <Header handleOpenModal={handleOpenModal} />
      {/* feed */}
      <Feeds />
      {/* posting to blog modal */}
      <BlogPost />
    </div>
  );
}

export default App;
