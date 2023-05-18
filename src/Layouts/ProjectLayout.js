
import { NavLink, Outlet } from "react-router-dom"


const ProjectLayout = () => {


  return (

  <div clasName='layout'> 
    <div className="linkContainer">
       <div className='navlink'>
            <NavLink className='linkPost' to='posts'>All Posts</NavLink>
            <NavLink className='linkFavorites' to='favorites'>Favorites</NavLink>  
      </div>  
           <div className="addpost">
            <NavLink className='addpostLink'  to='addpost'>+ Add Post</NavLink>  
          
       </div>
  </div>
      <main className="outlet">
        <Outlet />
      </main>
   
  </div> 
 
  )
}

export default ProjectLayout