import { NavLink, Outlet } from "react-router-dom"
import Footer from "../Pages/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
const NavBarLayout = () => {


const menu = <FontAwesomeIcon icon={faBars}  />

const [isMenuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
}

  return (
    <div className="navbar-layout">
       <header>
          <h1 className="logo">LOGO</h1>
          <nav className="navbar">
            {/* <NavLink className='nav-link' style={style}  to='/'>Home</NavLink> */}
            <NavLink className='nav-link'   to='project/posts'>Blog</NavLink>  
            <NavLink className='nav-link'   to='about'>About Us</NavLink>
            <NavLink className='nav-link'   to='review'>Review</NavLink>
            <div className="SignUpandLogIn">
            <NavLink className='signup'   to='signup'>Sign up</NavLink>
            <NavLink className='login'   to='login'>Log In</NavLink>   
            </div>
          </nav>

          <div className="hamburger-menu">
           <span onClick={toggleMenu}>{menu}

        {isMenuOpen && (

        <div className="menu-container">      
            <ul>
              <NavLink className='nav-link'   to='project/posts'>Blog</NavLink>  
                <NavLink className='nav-link'   to='about'>About Us</NavLink>
                <NavLink className='nav-link'   to='review'>Review</NavLink>
            
                <NavLink className='signup'   to='signup'>Sign up</NavLink>
                <NavLink className='login'   to='login'>Log In</NavLink>   
              
            </ul>
        </div>
      )}
           </span>
          </div>
          
      </header>

      <main>
        <Outlet />
      
      </main>
    
      <footer>
         <Footer />
     </footer>
    
    </div>
    
  )
}

export default NavBarLayout