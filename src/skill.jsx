

export default function Skill(){
        return(
                <div className="text-center p-3 m-5 mx-auto  ">
  <h1 className="m-5 mt-4 " id="Skill">Skills</h1>
  <div className="row p-5 m-5" >
    {/* <!-- Frontend Section --> */}
    <div className="col-12 col-md-6 mb-4  skill-heads ">
      <h2 className="skill-head">Frontend</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3 " id="front">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5" className="icon-size" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS3" className="icon-size" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="icon-size" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" className="icon-size" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" className="icon-size" />
      </div>
    </div>

    {/* <!-- Backend Section --> */}
    <div className="col-12 col-md-6 mb-4 skill-heads">
      <h2 className="skill-head">Backend</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3" id="back">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="icon-size" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express.js" className="icon-size" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" className="icon-size" />
      </div>
    </div>

    {/* <!-- Database Section --> */}
    <div className="col-12 col-md-6 mb-4 skill-heads" id="data">
      <h2 className="skill-head">Database</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" className="icon-size" />
      </div>
    </div>

    {/* <!-- Design Section --> */}
    <div className="col-12 col-md-6 mb-4 skill-heads" id="design">
      <h2 className="skill-head">Design</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="icon-size" />
      </div>
    </div>
  </div>
</div>

        );
}