


export default function Projects(props){
     const {project}=props
        return(

                <>
                     
                                <div className="d-flex flex-row justify-content-center projects m-5 mx-auto" id="proj">
                                <div className="d-flex flex-column flex-wrap justify-content-center align-items-center ">
                                         <img src={"/imgs/"+project.img}  className="h-0 w-25 img-thumbnail" alt="" />
                                         <h1>{project.name}</h1>
                                         <h6>{project.des}</h6>
                                         <div className="d-flex flex-row " id="stack">
                                            <i class="devicon-html5-plain-wordmark colored"></i>
                                            <i class="devicon-css3-plain-wordmark colored"></i>
                                           <i class="devicon-react-original-wordmark colored"></i>
                                           <i class="devicon-bootstrap-plain-wordmark colored"></i> 
                                         </div>
                                         <div className="d-flex flex-row"><i className="bi-link fs-5"></i><a href="/about">view on github</a></div>
                                </div>
                                </div>
                                    
                </>
        );
}