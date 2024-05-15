import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const election = require('../t56dJWBy.json');
// import axios from 'axios';

class EditQuestions extends Component {
	defaultState = {
		question:{},
		title: '',
		description: '',
		max_opc: 0,
		min_opc: 0,
		votos_nulo: false,
		votos_nulo_incluir: false,
		votos_blancos: false,
		loading: false
	}

	state = {...this.defaultState}
	
	componentDidMount() {
		console.log(this.props) 
		// Aqui viene el prop match.params que guarda el valor de la variable de la URL
		// en una variable del mismo nombre que se le asigno en la ruta, en este caso :election_id
		// por lo que la variable es election_id
		const { election_id } = this.props.match.params
		/*
			// Pedirle a la API una pregunta especifica por medio de la ID
			axios.get(`http://my-api-url/questions/${election_id}`).then(response => {
				Aqui la idea seria pasarle al state todos los datos de la pregunta
				Y usar esos datos para llenar los campos del formulario
				this.setState({question: response.data, loading: false})
			}).catch(err => {
				console.log(err)
			})
		*/
		console.log('Guardando datos...')
		setTimeout(() => {
			this.setState({ question: {}, loading: false })
		}, 1500)
	}

	renderLoading = () => {
		return (
			<div>Guardando datos...</div>
		)
	}

	//{//handleSubmit = event => {
		//event.preventDefault();
		//const { election_id } = this.props.match.params
		/*
			En ves de POST, para editar generalmente se usa PUT o PATCH
			axios.put('http://my-api-url/questions/election_id', this.state.question).then(res => {
				console.log(res)
				Hacer lo que sea al terminar....
			}).catch(err => {
				console.log(err)
			})
		*/
	//}
	
	
	handleSubmit = (event) => {
	    event.preventDefault()
	    this.setState({ loading: true });
	    const {loading, ...rest} = this.state
	    /*
	    	// Sin async/await
			axios.post('http://my-api-url/question', rest).then(response => {
				console.log(response.data)
				this.setState({loading: false})
			}).catch(err => {
				console.log(err);
				this.setState({loading: false})
			})

			// Con async/await
			try {
				const response = await axios.post('http://my-api-url/question', rest);
			} catch (err) {
				console.log(err)
			}
			this.setState({ loading: false })
	    */
	    // Emulando envio de datos a api
	    console.log('Enviando datos...')
	    setTimeout(() => {
	    	console.log('Datos enviados', rest);

	    	// this.setState({...this.defaultState})
			// O en ves de limpiar los campos, redireccionar a la lista de preguntas
			window.location.href = "/:election_id/listQuestions";
	    	
	    }, 1500);
  	}

	handleCheckboxChange = (event) => {
  		this.setState({
  			[event.target.name]: event.target.checked
  		})
  	}

	handleInputChange = (event) => {
  		event.preventDefault()
  		//console.log(event)
  		//console.log(event.target.name)
  		//console.log(event.target.value)
  		this.setState({
  			[event.target.name]: event.target.value
  		})
  	}

  	render() {
  		// Mostrar algo con los datos de this.state.question
  		// Poner un form como en la pantalla de creacion
  		// con los datos pre completados
  		// y usar misma logica que en la pantalla de creacion para enviar los datos a la api y hacer que se guarden
  		/* <input ... value={this.state.question.title} onChange={this.handleInputChange}/>*/
      		const {loading, title, description, max_opc, min_opc, votos_nulo_incluir, votos_nulo, votos_blancos} = this.state;
      		return( 
      			this.state.loading ? this.renderLoading() : (
      			<div className="ui container">
      				<div style={{marginTop:'10px', marginLeft:'65%'}}>
			    		<Button href={`/${election._id}/listQuestions`}>
			    			Ir a preguntas
			    		</Button>
			    	</div>
      				<div><h1>Editar pregunta</h1></div>
			        <Form onSubmit={this.handleSubmit}>       
			            <Form.Group controlId="exampleForm.ControlInput1">
			                <Form.Label style={{marginTop:'10px'}}>Título</Form.Label>
			                <Form.Control
			                	name="title" 
			                	value={title}            
			                	onChange={this.handleInputChange}
			                	type="text" 
			                	style= {{ width: '400px' }} 
			                	placeholder="Seleccione su presidente favorito"
			                	disabled={loading}
			                	/>
			                <Form.Text className="text-muted">
			                  Largo máximo = 5, largo mínimo = 200
			                </Form.Text>  
			            </Form.Group>
			            <Form.Group controlId="exampleForm.ControlInput2">
			                <Form.Label>Descripción</Form.Label>
			                <Form.Control
			                	name="description"
			                	value={description}
			                	onChange={this.handleInputChange}	
			                	style={{ width: 400 }} 
			                	placeholder="Permite elegir presidente"
			                	disabled={loading}
			                	/>
			                <Form.Text className="text-muted">
			                  Largo máximo = 5, largo mínimo = 200
			                </Form.Text>  
			            </Form.Group>
			            <Form.Group controlId="exampleForm.ControlInput3">
			                <Form.Label>Máximo de opciones</Form.Label>
			                <Form.Control
			                	name="max_opc"
			                	value={max_opc}
			                	onChange={this.handleInputChange}
			                	type="number" 
			                	style={{ width: 400 }} 
			                	placeholder="1" />
			                <Form.Text className="text-muted">
			                  Máximo de opciones
			                </Form.Text>  
			            </Form.Group>
			            <Form.Group controlId="exampleForm.ControlInput4">
			                <Form.Label>Mínimo de opciones</Form.Label>
			                <Form.Control
			                	name="min_opc"
			                	value={min_opc}
			                	onChange={this.handleInputChange}
			                	type="number" 
			                	style={{ width: 400 }} 
			                	placeholder="0" />
			                <Form.Text className="text-muted">
			                  Mínimo de opciones
			                </Form.Text>  
			            </Form.Group>
			            <div className="styleVotosNulos">
			            	<h4>Votos Nulos</h4>
			            	<h5>---------------------------------------</h5>
			            	<Form.Label htmlFor="voto_nulo">Permitir al usuario votar nulo</Form.Label>
			            		<input 
			            			type="checkbox"
			            			name="votos_nulo"
			            			id="voto_nulo"
			            			onChange={this.handleCheckboxChange}
			            			checked={votos_nulo}
			            		/>
			            	<Form.Text className="text-muted">
			                  El usuario podrá votar nulo marcando dos opciones
			                </Form.Text>
			                <Form.Label htmlFor="voto_nulo_incluir">Incluir opción votar nulo</Form.Label>
			            		<input 
			            			type="checkbox"
			            			name="votos_nulo_incluir"
			            			checked={votos_nulo_incluir}
			            			id="voto_nulo_incluir"
			            			onChange={this.handleCheckboxChange}
			            			/>
			            	<Form.Text className="text-muted">
			                  Mínimo de opciones
			                </Form.Text>
				                <h4>Votos blancos </h4>
				                <h5>---------------------------------------</h5>
			                <Form.Label htmlFor="voto_blanco">Incluir opción blanco</Form.Label>
			            		<input 
			            			type="checkbox"
			            			name="votos_blancos"
			            			checked={votos_blancos}
			            			onChange={this.handleCheckboxChange}
			            			id="voto_blanco"
			            			/>
			            	<Form.Text className="text-muted">
			                  Mínimo de opciones
			                </Form.Text>
			            </div>
			        <Card.Footer style={{marginTop:'12%'}} >
	                	<Button  type="submit" >Guardar</Button>
	                	<Button >Cancelar</Button>
	            		<Button  href="/t56dJWBy" id="btn">Volver al inicio</Button>
		          	</Card.Footer>
	          		</Form>
     			</div>
   			)
   		)
  	}		
}

export default EditQuestions;