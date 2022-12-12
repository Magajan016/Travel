import React,{useState} from "react";
import './ace.css';
class  Travel extends React.Component{
    render(){
    return(
        <div className="main">
        <div className="site-color">
         <nav>
            <h1>Ace Adventures</h1>
            <ul>
                <button>Home</button>                
                <button>About Us</button>
                <button>Support</button>
                <button>Login</button>
                <button>Get Started</button>
            </ul>
            <h1 className="contact">Contct Us</h1>
        </nav>
        </div>  
            <div className="body">
                <div className="number">
                  <p><h3>PHONE_NUMBER:</h3>+14-7568-9843</p>
                  <address><i className="cis_location_pin"></i><h3>ADDRESS:</h3>WWGG+FF53,Vivekanadapuram,Kovaipudur,<br/>Sri Krishna College of Technology,<br/>Coimbatore 641105 , Tamil Nadu</address>
                  <p className="email"><h3>EMAIL_ID:</h3>aceadventure@123.com</p>
                </div>
                <div>
                    <h2 className="text-align">We can't solve problems if you don't tell us about it!</h2>
                    <form>
                        <div className="align_correct">
                            <div className="f1"><label className="form_label"  ><h4>Name</h4></label><input type="text" placeholder="Name" name="n1"></input></div>
                            <div className="f2"><label className="form_label"  ><h4>Email</h4></label><input type="email" placeholder="Enter Email" name="n1"></input></div>
                            <div className="f3"><label className="form_label"  ><h4>Message</h4></label><textarea placeholder="Message"></textarea></div>
                            <button className="align-button">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>    

    );
}
}
export default Travel;