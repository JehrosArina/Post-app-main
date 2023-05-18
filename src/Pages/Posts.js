
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Posts.css'


export const Posts = ({posts, setPosts, favorites, setFavorites }) => {


const commentsIcon = <FontAwesomeIcon icon={faComment}  />
const heartIcon = <FontAwesomeIcon icon={faHeart}  />
const trashIcon = <FontAwesomeIcon icon={faTrash}  />

const hadleFavorites = (id) =>{
  const updatedPosts = posts.map((post) => {
    if (post.id === id) {
      const likeUpdates = post.likes + 1   // incrementing the number of likes
      return {
        ...post,
        isLiked: true,   
        likes: likeUpdates  // update the like counter
      };
    }
    return post;
  });
  const updatedFavorites = [...favorites, updatedPosts.find(post => post.id === id)];
  setPosts(updatedPosts);
  setFavorites(updatedFavorites);
}

// Delete Blog element functionality
const deleteBlogElement =(id) =>{
 const deleteelement = posts.filter(el => el.id !== id)
 setPosts(deleteelement)
}

  return (
    <>
      
        {posts.map((post) => (
          <li key={post.id}>
            <div className='container'>

             <div className='images' >
                    
           <Link to={`${post.id}`}><img src={post.image} alt="Post" /></Link>
               <div className='title'> 
                  {post.title}

                   <div className='text'>
                     {post.text}

                 <div className='author'>
                    <p className='date'>{post.date}</p>
                    <span>{post.author}</span>
                    <span className='commentIcon'>{commentsIcon}</span><span className='comment'>{post.comments.length}</span> 
                 <span className={`heartIcon ${post.isLiked ? 'liked' : ''}`} onClick={() => hadleFavorites(post.id)}>{heartIcon}</span>
                    <span className='like' >{post.likes}</span>
                    <span className='delIcon' onClick={() =>deleteBlogElement(post.id)}>{trashIcon}</span>
                    
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </li>
        ))}
 
    </>
  );
};

