import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
import './app.css';
import { Login } from './components/index' ;
import { Panel } from './components/index' ;


export default class Appli extends Component {

  

  constructor(props){
    super(props);
    this.state = {value: true , rate: "" ,emailadr : ""}
  }

 
  handelclick(mail , password){
    //handle the registration here
    if(mail != null && password != null  && mail != '' && password != ''){
      /*if(document.getElementById('radio-one').checked || document.getElementById('radio-two').checked){
        if(document.getElementById('radio-one').checked){
          this.setState({ rate: document.getElementById('radio-one').value});
          
        }else if (document.getElementById('radio-one').checked){
          this.setState({ rate: document.getElementById('radio-two').value});
        }*/

        this.setState({
          value : !this.state.value ,
          emailadr : mail
        });
        //here add the user mail and password
        alert(mail + password)
      /*}else{
        alert('choose if you are a techer or an admin')

      }*/
    }else{
      alert('put your mail and password');
    }
    
    
    
  }
  
  render() {
    if(this.state.value){
      return (
        <div className="App">
          <div>
            <Login clickmethode={this.handelclick.bind(this)}/>
          </div>
        </div>
      );
    }else{
      return (
        <div className="App2">
          <div>
            <Panel emailadr={this.state.emailadr} />
          </div>
        </div>
      );
    }
    
  }
}

ReactDOM.render(<Appli />, document.getElementById('app'));
