import { useState } from "react";

const AddPost = ({ setPosts }) => {

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");



const handleImageChange = (event) => {
  const file = event.target.files[0];
  setImage(file);
};

const handleTitleChange = (event) => {
  const value = event.target.value;
  setTitle(value);
};

const handleTextChange = (event) => {
  const value = event.target.value;
  setText(value);
};


const handleSubmit = (event) => {
  event.preventDefault();

  // Create a new post object
  const newPost = {
    id: Date.now(),
    image: URL.createObjectURL(image),
    title: title,
    text: text,
    author: "Jehros Rina", 
    date: new Date().toLocaleDateString(), // get the current date
    likes: 0,
    isLiked: false,
    comments: [],
  };

  // Update the posts state with the new post
  setPosts((prevPosts) => [...prevPosts, newPost]);

  // Clear the form inputs
  setImage(null);
  setTitle("");
  setText("");
};


return (
  < div className="containerPost">
    
   <h2 className="headerTitle">New Post</h2>
    
    <form onSubmit={handleSubmit}>

      <div>
       <div className="titleText">
        <label htmlFor="title" >Add Title*</label>
        <input className='text' placeholder="Title" required type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>

      <div className="addText">
        <label htmlFor="text" >Add Text*</label>
        <textarea className='textArea'placeholder="Add content" id="text" required value={text} onChange={handleTextChange}></textarea>
      </div>
       <div className="uploadImage"> 
        <label htmlFor="image" ></label>
        <input  type="file" accept="image/*"  onChange={handleImageChange}  />
      </div>
      
       <button className='postBtn' type="submit">Post</button>
   </div>

    <div className="imageContainer">
      
       {image && (
          <div className="imagePreview">
            <img src={URL.createObjectURL(image)} alt="Image Preview" className="imageDisplay"/>
          </div>
          
        )}
        </div>

    </form>
  </div>
);

};
export default AddPost



