import React, {Component} from 'react';
// import axios from 'axios';
//import TextField from './TextField';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import Button from 'react-bootstrap/Button';
//import {Link} from "react-router-dom";
//import Form from 'react-bootstrap/Form';
//import { Nav } from 'react-bootstrap';
//import EditQuestions from './view/EditQuestions';
//import StyleHome from './styles/StyleHome.css';
//import Home from './Home';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const election = require('../t56dJWBy.json');

class ListChoices extends Component {
	state = {
		myelection: {},
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
		//Con timeout(Emulación de una API) ¡¡¡¡INCOMPLETO!!!!
		console.log('Eliminando pregunta de id', id)
		setTimeout(() => {
			this.setState(({myelection}) => {
				const questions = myelection.questions.filter(question => question._id !== id)
				return { myelection: { ...myelection, questions }}
			})
			console.log('Pregunta eliminada')
		}, 1500);
	}

	renderLoading = () => {
		return (
			<div style={{}}>
				Cargando datos...
			</div>
		)
	}

	render(){
		const { loading } = this.state
		return(
			<div className="ui container">
				<div style={{marginTop:'10px', marginLeft:'65%'}}>
					<Button 
						href={`/${election._id}/listQuestions`}>
						Ir a preguntas
					</Button>
					<Button 
						style={{background: 'green'}} 
						href={`/${election.questions.map( question => question._id)}/create_choices`}>
						Crear opción
					</Button>
				</div>
      			<h1>Lista de Opciones</h1>
			    	{/*<Nav activeKey="/distritoPregunta">
			          	<Nav.Item className="styleLink">
			            	<Link to="/:election_id/listQuestions"> Ir a preguntas </Link>
				            	<Link to="/:election_id/createQuestions">/ Crear Opción</Link>
				          	</Nav.Item>
				        </Nav>		
			    	*/}
			        <div style={{marginTop: '10px'}}>
			        	{election.questions.map(question => (
			        		question.name
			        	))}
			        </div>
			        {loading ? this.renderLoading() : (
					        <Table striped bordered hover style={{marginTop:'10px'}}>
					       		<thead>
					       			<tr>
					       				<th>Nombre</th>
					       				<th>Descripción</th>
					       				<th>Imagen URL</th>
					       				<th>Pregunta</th>
					       				<th>Lista</th>
					       				<th>Valor</th>
					       				<th>Posición absoluta</th>
					       				<th>Posición relativa</th>
					       			</tr>
					       		</thead>
					       		<tbody>
					       			<tr>
						       			<td></td>
						       			<td></td>
						       			<td></td>
						       			<td>{election.questions.map(question => (
								        		question._id
								        	))}</td>
						       			<td></td>
						       			<td></td>
						       			<td></td>
						       			<td></td>
						       			<td>
					       					<Button
					       						href={`/${election.questions.map(question => (question._id))}/edit_choices`}
					       						style={{color:'white', background:'orange'}}
					       						className="btn"
					       						variant="btn_light"
					       						>
					       						Editar
					       					</Button>
					       					<Button
					       						style={{color:'white', background:'red'}}
					       						className="btn"
					       						variant="btn_light"
					       						>
					       						Eliminar
					       					</Button>
					       				</td>
					       			</tr>
					       		</tbody>
					        </Table>
				    )}
				    <Card.Footer>
					    <Button
					    	style={{marginLeft:'80%'}} 
			       			className="btn"
		       				href={`/${election._id}`}
						>
			       		Volver al inicio
			       		</Button>
		       		</Card.Footer>
	    	</div>

		)
	}
}

export default ListChoices;
