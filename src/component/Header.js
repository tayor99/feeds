import '../styles/Header.css';

function Header({ handleOpenModal }) {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>TY's Blog</h1>
      </div>
      <div className="header__nav">
        <h3 onClick={handleOpenModal}>Post Blog</h3>
      </div>
    </div>
  );
}

export default Header;
