// import { useNavigate } from 'react-router-dom'
import './index.css'
import About from './about'
import Skill from './skill'
import React, { useEffect } from "react";
import Project from './project';
import Contact from './contact';


export default function Home(){
 

    useEffect(() => {
      // Ensure Typed.js is loaded from the CDN
      if (window.Typed) {
        const typed = new window.Typed("#typed-element", {
          strings: ["Frontend Developer", "Backend Developer", "Full-Stack Developer"],
          typeSpeed: 50,
          backSpeed: 25,
          loop: true,
        });
  
        // Cleanup on component unmount
        return () => {
          typed.destroy();
        };
      }
    }, []);

   

    
    return(
        <>


            <nav className='navigations d-flex '>
                <div className='div1'><img src="/logo192.png" className=' h-0 w-25 m-2' alt="logo" /></div>

                <div className='d-none d-lg-flex d-md-flex div2 col-md-flex col-lg-flex' id='navs'>
                    <li><a href="#home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">skills</a></li>
                <li><a href="#Project">projects</a></li>
                <li><a href="#contact">Contact</a></li>
                </div>
             

                <div className='div3 m-1  text-center'>
                    <button className='mx-auto' type='button' onClick={()=> {document.getElementById('contact').scrollIntoView({behavior:'smooth'})}} >let's connect</button>
                </div>
            </nav>
            
            {/* hero section */}
            <div className='container  vh-100 ' id="home">
                    <div className="row d-flex justify-content-center align-items-center">
                         <div className='d-none d-md-flex flex-column justify-content-center col-1  text-start' id="hero-icon">
                                 <i className="bi-github"></i>
                                 <i className="bi-linkedin"></i>
                                 <i className="bi-facebook"></i>
                         </div>
                         
                         <div className='col-10 d-flex flex-column text-center d-sm-flex mx-auto'>
                              <img src="/logo192.png" className="h-0 w-25 mx-auto" alt="profile" />
                                <h1>I am arsath and a</h1>
                                <h2>i am a </h2>
                                <h4>
                                   <span id="typed-element"></span>
                              </h4>
                                <div className='d-block 'id='hero-btn'>
                                     <button >Explore </button>
                                     <button>download CV</button>
                                </div>
                         </div>
                         <div className='d-none d-md-flex flex-column justify-content-center  col-1 text-center bg-primary ' id='hero-icons'>
                      
                         <a href="#home"><i className="bi-house-door-fill"></i></a>
                                 
                                 <a href="#About"><i className="bi-person-fill"></i></a>
                                 <a href='#Skill'><i className="bi-gear-fill"></i></a>
                                 <a href='#Project'><i className="bi-folder-fill"></i></a>
                                 <a href='#contact'><i className="bi-telephone-fill"></i></a>
                                
                         
                         
                         </div>
                        </div>                                  

            </div>
     
       <About/>
     
       <Skill/>
         
       <Project/>
 
        <Contact/>
    
          
        </>
    )
}
