// Created a PostData json file
// created a Post component
// created addPost component
//created a favorite component
//created a routing layout for each component link
// created a functionality to delete an element blog post 
// created a functionality to click the heart Icon, it will be added to a favorite component. On top of that, I created a functionality to delete a favorite element
// updated the like counter state
//created a card details with a routing Id to see the list of comments. On top of that, can also add comments and update the posts state object array comments.
// cerated addPost to upload images and once uploaded, it will be added to current posts state
// addedd user in each object element and also in teh array comments so I can display the avatar images for each user to my postData json file
// Made it responsive for mobile views
// limit to two comments only when displayed but it has an option to show more to view all the comments

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import NavBarLayout from "./Layouts/NavBarLayout";

import About from "./Pages/About";
import Review from "./Pages/Review";
import ProjectLayout from "./Layouts/ProjectLayout";
import Favorites from "./Pages/Favorites";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import postsData from './PostData.json'
import { Posts } from "./Pages/Posts";
import AddPost from "./Components/AddPost";
import { useState, useEffect } from "react";
import CarBlogDetails from "./Pages/CarBlogDetails";


function App() {

  
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([])

  // useeffect to load the blog elements when the page loads 
   useEffect(() => {
    setPosts(postsData);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<NavBarLayout />}>
       
        <Route path="about" element={<About />} />
            <Route path="review" element={<Review />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
              
            <Route path="/" element={<Posts posts={posts} setPosts={setPosts} setFavorites={setFavorites} favorites={favorites} />} />     
                  <Route path="project" element={<ProjectLayout />}>
                
                    <Route path="posts" element={<Posts posts={posts} setPosts={setPosts} setFavorites={setFavorites} favorites={favorites}/>} /> 
                    <Route path="favorites" element={<Favorites setFavorites={setFavorites} favorites={favorites}/>} />
                  
                    <Route path="addpost" element={<AddPost setPosts={setPosts}/>} />
                
                
                    <Route path="posts/:id" element={<CarBlogDetails posts={posts} setPosts={setPosts}/>} />  
                  
                   
                    </Route>
                 
           </Route>  
        
        

  )
);

  return (
    <div className="App">
       <RouterProvider router={router} />
       <>
        
       </>
    </div>
  );
}

export default App;
