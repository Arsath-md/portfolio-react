import Projects from "./components/projects";
import { useState,useEffect } from "react";
export default function Project(){

         //create a project file handiling
         const[pro,setPro] =useState([])
          
         useEffect(()=>{
                fetch('./project.json')
                .then(res => res.json())
                // .then(datam => datam.map((go)=>{console.log(go.project)}))
                .then( datam => setPro(datam))
                .catch(err => console.log("error is the: ", err));
         },[])


        return(
            <>
              <div className="container text-center  p-5 " >
                <h1 id="Project">Projects</h1>
                <div className="row">
                        <div className=" d-flex flex-row text-center flex-wrap "id="project">
                               {
                                pro.map((projs,index)=> <Projects key={index} project={projs}/>)
                               }
                        </div>
                </div>
              </div>
            </>
        );
}