import React, { Component } from 'react';
// import axios from 'axios';
//import TextField from './TextField';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
//import Form from 'react-bootstrap/Form';
//import { Nav } from 'react-bootstrap';
//import EditQuestions from './view/EditQuestions';
//import CreateQuestions from './view/CreateQuestions';
//import AddOption from './view/AddOption';
//import StyleHome from './styles/StyleHome.css';
//import Home from './Home';
//import Districs from './Districs';
import AddDistrict from './AddDistrict'
import Table from 'react-bootstrap/Table';
import BooleanData from '../component/BooleanData';
import Button from 'react-bootstrap/Button';


const election = require('../t56dJWBy.json');

class Questions extends Component {
	state = { 
		myelection: {}, // election
		loading: true
	}
	
	componentDidMount() {
		/*
			Ejemplo simple con axios
			axios.get('http://my-api-url.com/election').then(response => {
				this.setState({myelection: response.data, loading: false})
			}).catch(err => {
				console.log(err);
				err.response
			})
		*/
		// Emular llamada a API
		setTimeout(() => {
			this.setState({myelection: election, loading: false})
		}, 1000)
	}

	renderLoading = () => {
		return (
			<div>
				Cargando datos...
			</div>
		)
	}

	handleDelete = id => {
		/* 
			//Con API
			 o axios.post...
			axios.delete(`http://my-api-url.com/election/${id}`).then(response => {
				this.setState(prevState => {
					const questions = myelection.questions.filter(question => question._id !== id)
					return { myelection: { ...prevState, questions }}
				})
			}).catch(err => {
				console.log(err)
			})
		*/
		//Con timeout(Emulación de una API)
		console.log('Eliminando pregunta de id', id)
		setTimeout(() => {
			this.setState(({myelection}) => {
				const questions = myelection.questions.filter(question => question._id !== id)
				return { myelection: { ...myelection, questions }}
			})
			console.log('Pregunta eliminada')
		}, 1500);
	}


  	render() {
  		const { myelection, loading } = this.state
        return (
      		<div className="ui container">
      				<div style={{marginTop:'10px', marginLeft:'65%'}}>
			    		<Button href={`/${election._id}/create_districts`} style={{background:'green', color:'white'}} variant="id_district">
			    			Crear distritos
			    		</Button>
			    		<Button href={`/${election._id}/createQuestions`}>
			    			Crear nueva pregunta
			    		</Button>
			    	</div>
			    	<div>
	      				<h1>Preguntas</h1>
	      			</div>
			    	{/*
			    	<Nav activeKey="/distritoPregunta">

			          <Nav.Item className="styleLink">
			          	<Link to="/t56dJWBy"> Inicio /</Link>
			            <Link to="/:election_id/districs"> Distritos </Link>
			            <Link to="/:election_id/createQuestions">/ Crear nueva pregunta</Link>
			          </Nav.Item>
			        </Nav>
					*/}
			        {loading ? this.renderLoading() : (
				        <Table responsive>
				       		<thead>
				       			<tr>
				       				<th>Id</th>
				       				<th>Pregunta</th>
				       				<th>Opciones</th>
				       				<th>Mínimo de opciones</th>
				       				<th>Máximo de opciones</th>
				       				<th>Voto nulo</th>
				       				<th>Incluir opción nulo</th>
				       				<th>Incluir opción blanco</th>
				       				<th>Distritos</th>
				       			</tr>
				       		</thead>
				       		<tbody>
				       			{myelection.questions.map(question => (
				       				<tr key={question._id}>
					       				<td>{question._id}</td>
					       				<td>{question.name}</td>
					       				<td>{question.choices.length} <Link to={`/${question._id}/list_choices`}>
					       					<FontAwesomeIcon className="align-left" icon = "align-left"/></Link>
					       				</td>
					       				<td>{question.min_options}</td>
					       				<td>{question.max_options}</td>
					       				<td>
					       					<BooleanData valor={question.accept_null}/>
					       				</td>
					       				<td>
					       					<BooleanData valor={question.accept_null_explicit}/>
					       				 </td>
					       				<td>
					       					<BooleanData valor={question.accept_blank_explicit}/>
					       				</td>
					       				<td>
					       					<AddDistrict style={{alignItems:'center'}} />
					       					{/*<Link to={`/${question._id}/add_district`}></Link>*/}
					       				</td>
					       				<td>
					       					<Button
					       						className="btn btn-light"
					       						variant="outline-primary"
					       						onClick={() => this.handleDelete(question._id)}>
					       						Eliminar
					       					</Button>
					       					<Button
					       						href={`/${question._id}/edit_questions`}
					       						className="btn btn-light"
					       						variant="outline-primary">
					       						Editar
					       					</Button>
					       				</td>
					       			</tr>
				       			))}
				       		</tbody>
				        </Table>
				    )}
        		<Card.Footer>
        			<Button 
        				style={{marginLeft:'80%'}}  
        				href="/t56dJWBy"
        			>
        				Volver al inicio
        			</Button>
        		</Card.Footer>
	    	</div>
        )
    }

} 

export default Questions;
