import React, { Component } from 'react';
// import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

const election = require('../t56dJWBy.json');

class CreateQuestions extends Component {
	defaultState = {
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

  	handleInputChange = (event) => {
  		event.preventDefault()
  		//console.log(event)
  		//console.log(event.target.name)
  		//console.log(event.target.value)
  		this.setState({
  			[event.target.name]: event.target.value
  		})
  	}

  	handleCheckboxChange = (event) => {
  		this.setState({
  			[event.target.name]: event.target.checked
  		})
  	}

  	renderLoading = () => {
		return (
			<div>
				Guardando datos...
			</div>
		)
	}

  	render() {
  		const {title, description, max_opc, min_opc, votos_nulo_incluir, votos_nulo, votos_blancos, loading} = this.state
      return (
	    <div className="ui container">
	    		<div style={{marginTop:'10px', marginLeft:'65%'}}>
			    		<Button href={`/${election._id}/create_districts`} style={{background:'green', color:'white'}} variant="id_district">
			    			Crear distritos
			    		</Button>
			    		<Button href={`/${election._id}/listQuestions`}>
			    			Ir a preguntas
			    		</Button>
			    </div>
        		<h1>Nueva pregunta</h1>
                <div className="ui container">
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
				                	required
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
				                	required
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
				                	required />
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
				                	required />
				                <Form.Text className="text-muted">
				                  Mínimo de opciones 0
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
     	</div>
    )
  }
}

export default CreateQuestions;