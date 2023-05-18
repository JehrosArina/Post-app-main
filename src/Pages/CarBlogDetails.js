import React from 'react'
import { Link, useParams,  } from 'react-router-dom';
import { useState  } from 'react'; 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

const CarBlogDetails = ({posts, setPosts}) => {

const commentsIcon = <FontAwesomeIcon icon={faComment}  />
const heartIcon = <FontAwesomeIcon icon={faHeart}  />

const { id } = useParams();
const [comment, setComment] =useState('')
const [showAllComments, setShowAllComments] = useState(false);

 const getComment = (event) => {
    const content = event.target.value;
    setComment(content)
    
  }

  
const card = posts.filter((el) => el.id === parseInt(id)); //passing the filtered element 

const handleComment = (postId) => {
  const updatedPosts = posts.map((post) => {
    if (post.id === postId) {
      const newComment = {
        text: comment,
        author: "Sorj Rin", // Replace with the actual author name
        date: new Date().toLocaleDateString(), // Replace with the actual date
        likes: 0,
        isLiked: false,
        user:"/assets/avatar1.jpg" //added a user avatar
      };
      return {
        ...post,
          comments: [newComment, ...post.comments] // updating the comments array
      };
    }
    return post;
  });

  setPosts(updatedPosts); 
 

};

const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };
  

  return (
    <div className='card' >
     {card.map(el =>{
     return (
      <div className='containerDisplay'>
           <div className='DisplayImage'>
              <img src={el.image}  className='cardBlogImage'/>
           </div>

       <div className='displayTitle'>
          <h1 className='cardBlogTitle'>{el.title}</h1>
          <div className='displayAuthorDetails-Date'>

             <img className='user' src={el.user} />

          <p className='cardBlogAuthor'>{el.author}</p>
           <p className='cardBlogDate'>{el.date}</p>
        </div>

        <div className='cardBlogTextArea'>
         <p className='textDetails'>{el.text}</p>
        </div>

           <div className='iconDisplay'>
            
           
            
                <span className='cIcon'>{commentsIcon}</span><span className='commentCount'>{el.comments.length}</span> 
                <span className='hIcon' >{heartIcon}</span>
                <span className='likeCount' >{el.likes}</span>
           </div>

            <h3 className='leavecomment'>Leave a comment</h3>

            <div className='textarea'>
              <textarea className='textareaField' placeholder='write your comments here' onChange={getComment}></textarea>
           
            </div>
             
             {/* Button disabled when comment area is empty */}
              <button
                className={`sendBtn ${comment.trim() === '' ? 'disabled' : 'changeColor'}`}
                onClick={() => handleComment(el.id)}
                disabled={comment.trim() === ''}
              >
                Send
              </button>
           <h3 className='existingComments'>Comments</h3>
             
         {/* Display the existing comments  and limit it to two comments only*/}

                  <ul className='listcontainer'>
                    {card.map((el) =>
                      el.comments.slice(0, showAllComments ? el.comments.length : 2).map((comment, index) => (
                        <li className='list'key={index}>
                         
                          <div className='commentContainer'>
                            <div className='commentImageContainer'>
                            <img className='commentUserImage' src={comment.user} />
                             <p>{comment.author} </p>
                             <div>
                                </div>
                              
                             </div>
                             
                             <p >{comment.text}</p><br />
                              <p className='commetnTextDetail'>{comment.date} 
                             <span className='iconComment'>{heartIcon}</span>{comment.likes}</p> <br /><br />
                         
                           </div> 
                            
                        </li>
                        
                      ))
                    )}
                  </ul>


                  {/* Show more comments when toogle  */}
                  
                  {el.comments.length > 2 && (
                      <div className='showMoreContainer'>
                        <span className='showMore' onClick={toggleShowAllComments}>
                          {showAllComments ? 'Show Less' : 'Show More'}
                        </span>
                      </div>
                  )}
                  
                 
           </div>

          

        
       
      </div>
     )
     })}
    </div>
  )
}

export default CarBlogDetails