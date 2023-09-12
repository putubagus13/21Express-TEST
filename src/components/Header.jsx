import { Link } from 'react-router-dom';

function Header() {
  const currentPath = window.location.pathname;
  return (
    <div className='fixed z-40 top-0 w-full h-10 flex justify-center items-center px-10 bg-primary shadow-lg'>
      <ul className='flex w-full justify-center items-center gap-6 text-white'>
        {currentPath === '/' ? <Link to={'/'} className="navSelect"><li>Home</li></Link> : 
          <Link to={'/'} className="nav"><li>Home</li></Link>}
        {currentPath === '/about-me' || currentPath === '/about-me' ? <Link to={'/about-me'} className="navSelect"><li>About me</li></Link> : 
          <Link to={'/about-me'} className="nav"><li>About me</li></Link>}
      </ul>
    </div>
  );
}

export default Header;