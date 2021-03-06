import React from "react" ;
import ReactDOM from 'react-dom';
import {Panel} from '../index';
import $ from 'jquery';
import axios from 'axios';

function getlist(){
	var tmp=[];
	$.get('/api/etudiant/list')
	.done(function(res){
		res.data.map(item => {
			tmp.push([item.name,item.lastname,item.UID,item.degree])
		})
		return tmp;
	})
	.fail(function(err){
		alert('error of conexion')
		console.log(err.data)
	})
	return tmp;
}
const list =getlist();

export class ListEditor extends React.Component {
    constructor(props){
		super(props);
		this.state = {studentList : list}
	}
	
	RemoveMethod(uid,index){
		return axios
		.post('/api/etudiant/destroy',{
			uiddelet:uid
		})
		.then(res=>{
			//alert()
			console.log(res)
			list.splice(index , 1);
			this.setState({
				studentList : list
			})
		})
		.catch(err=>{
			alert('error');
		})
	}
	AddMethod(){
		const listx = [ $('#name').val() , $('#lastn').val(),$('#uid').val(), $('#deg').val()];
		return axios
		.post('/api/etudiant/add',{
			nom:$('#name').val(),
			prenom:$('#lastn').val(),
			sid:$('#uid').val(),
			degree:$('#deg').val()
		})
		.then(res=>{
			//alert()
			console.log(res)
			list.push(listx);
			this.setState({
			studentList : list
			})
			
		})
		.catch(err=>{
			alert('error');
		})
		
		
	}
	
	back(){
		const pan = (
		<div className="App2">
			<div>
		  		<Panel emailadr={this.props.mailuser}/>
			</div>
		  </div>);

		ReactDOM.render(pan , document.getElementById('app'));
	}



    render(){
        return(
				<div className="Two-container">
					<button className="back-button" onClick={this.back.bind(this)}>&#8592;</button>
					<div className="list-items">
					<div className="title">
							Student List
						</div>
						<ol>
							{this.state.studentList.map(item => {
								return(
								<li className="list-item" key={item}>
									<div>
									<ul className="list-mini-item">
											{item.map(miniitem =>{
												return(
													<li className="list-mini-item" key={miniitem[2]}>
														{miniitem}
													</li>
												)
											})}
										</ul>
										<button className="button-spice1" 
										type="button" 
										onClick={() => this.RemoveMethod(item[2],this.state.studentList.indexOf(item)) }>	
											&minus;
										</button>
									</div>
									<hr/>
								</li>)
							})}
						</ol>
					</div>
					<div className="list-items">
						<div className="title">
							Add student
						</div>
						<div className="form-group">
                    		<input className="input-form" id="name" type="text" name="subject" placeholder="Name" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" id="lastn" type="text" name="subject" placeholder="Last name" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" id="uid" type="text" name="subject" placeholder="UID" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" id="deg" type="text" name="subject" placeholder="Degree" />
                		</div>
						
						<button className="button-spice2" type="button" onClick={() => this
							.AddMethod()}>&#43;</button>
					</div>
						
				</div>
				
        )
    }
}