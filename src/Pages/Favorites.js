import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'

const Favorites = ({favorites, setFavorites }) => {
  
const commentsIcon = <FontAwesomeIcon icon={faComment}  />
const heartIcon = <FontAwesomeIcon icon={faHeart}  />
const trashIcon = <FontAwesomeIcon icon={faTrash}  />

//Functionality to delete added favorites
const handleDelete =(id) =>{
const deleteElement = favorites.filter(el =>el.id !== id);
setFavorites(deleteElement);
}

 if( favorites.length == 0){
  return <h1 className='noFavoriteList'>No added favorites</h1>
 }

  return (
   <>
      
        {favorites.map((post) => (
          <li key={post.id}>
            <div className='container'>

             <div className='images'>
             <img src={post.image} />
           
               <div className='title'> 
              {post.title}

              <div className='text'>
                {post.text}

                {/* <div className={`author ${post.isLiked ? "liked" : ""}`}> */}
                 <div className='author'>
                    <p className='date'>{post.date}</p>
                    <span>{post.author}</span>
                  
                    <span className='commentIcon'>{commentsIcon}</span><span className='comment'>{post.comments.length}</span> 
                 
                 <span className={`heartIcon ${post.isLiked ? 'liked' : ''}`} >{heartIcon}</span>
                    <span className='like' >{post.likes}</span>
                    <span className='trashIcon' onClick={()=>handleDelete(post.id)}>{trashIcon}</span>
                  
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </li>
        ))}
 
    </>
  );
  
}

export default Favorites