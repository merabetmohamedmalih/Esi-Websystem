import React from "react" ;
import userImage from "../../components/res/logo.svg" ;



export class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="main-container">
            <div className="header">Login portal</div>
            <div className="image">
                <img src={userImage} alt="login image"/>
            </div>
            <div className="radio-container">
                    <div className="option">
                        <input type="radio" name="demo1" value="one" id="radio-one" className="form-radio" />
                        <label  className="labelx" >Admin</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="demo1" value="two" id="radio-two" className="form-radio" />
                        <label className="labelx" >Teacher</label>
                    </div>  
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Mail</label>
                    <input className="input-form" type="email" id="mail" name="email" placeholder="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="input-form" type="password" id="pass" name="password" placeholder="password" />
                </div>
                <button className="button-log" type="button" 
                onClick={() => this.props.clickmethode(document.getElementById("mail").value 
                , document.getElementById("pass").value)}>Login</button>
            </div>
            
                
        </div>
        )
    }
}

