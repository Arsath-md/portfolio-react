
export default function Contact(){

        return(
           <div className="container text-center m-5 mx-auto" id="contact">
                <h1>Get in touch</h1>
                <div className="row m-5">
                    <div className="col-12 col-md-6 d-flex flex-column" >
                        <div className="d-flex flex-row">
                                <i className="bi-telephone-fill m-2"></i>
                                <a href="telephone " className="m-2">88386 xxxxx</a>
                        </div>
                        <div className="d-flex flex-row ">
                        <i className="bi-envelope-fill m-2"></i>
                        <a href="mailto:" className="m-2">vippismart@gmail.com</a>
                        </div>
                       <div className="d-flex flex-column">
                      
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15660.621733139029!2d79.64226883848214!3d11.101791181365526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5526c731f25c21%3A0x4339eccad0b5866a!2sMayiladuthurai%2C%20Tamil%20Nadu%20609001!5e0!3m2!1sen!2sin!4v1735747185088!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  title="Google Maps location of our office"></iframe>
                       </div>
                    </div>
                    <div className="col-12 col-md-6">
                            <form action="">
                                 <label htmlFor="name">Name</label>
                                 <input type="text" />
                                 <label htmlFor="Email">Email</label>
                                 <input type="text" />
                                 <label htmlFor="name">Message</label>
                                 <textarea  name="" id=""></textarea>
                                 <div>
                                        <button type="submit" className="text-center">submit</button>
                                 </div>
                            </form>
                    </div>
                </div>
           </div>
        );
}