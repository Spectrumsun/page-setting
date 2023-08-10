import Mobile from '../../Icon/Mobile';
import './index.scss';

const NavBar = ({ setShowSideBar, showSideBar}) => {
  return (
    <header className="navbar">
      <div className="flex items-center">
      <img src="/logo192.png" alt="logo" width="40px;" />
        <h3 
          className="nav__h3 text-xl flex align-top"
          >
            Untitled UI
        </h3>
      </div>
      <button onClick={() => setShowSideBar(!showSideBar)}>
      { 
        !showSideBar 
          ? <Mobile /> 
          : <p className="text-3xl text-3xl">X</p> 
      }
      </button>
    </header>
  )
};

export default NavBar;

