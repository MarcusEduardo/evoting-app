import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const election = require('../t56dJWBy.json');

class CreateChoices extends Component {
	defaultState = {
		myelection: {},
		question_name:'',
		name_option: '',
		description: '',
		imagen_url: '',
		list: '',
		loading: true

	}

	state = {...this.defaultState};

	handleInputChange = (event) => {
        event.preventDefault()
        //console.log(event)
        //console.log(event.target.name)
        //console.log(event.target.value)
        this.setState({
          [event.target.name]: event.target.value
        })
    }

	handleSubmit = (event) => {
	    event.preventDefault()
	    this.setState({ loading: false });
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
			window.location.href = "/:election_id/list_choices";
	    	
	    }, 1500);
  	}


	componentDidMount() {

		console.log('...')
		setTimeout(() => {
			this.setState({ loading: false })
		}, 1500)
	}

	renderLoading = () => {
		return (
			<div>
				Cargando formulario...
			</div>
		)
	}


	render(){
		const {loading, question_name, name_option, description, imagen_url, list} = this.state;
		return (
			<div className="ui container">
					<div><h1>CREAR CHOICES</h1></div>
					{loading ? this.renderLoading() : (
			        <Form onSubmit={this.handleSubmit}>       
			            <Form.Group controlId="exampleForm.ControlInput1">
			                <Form.Label style={{marginTop:'10px'}}>Pregunta: </Form.Label>
			                <Form.Control
			                	name="question_name" 
			                	value={question_name}           
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
			                <Form.Label>Nombre opción: </Form.Label>
			                <Form.Control
			                	name="name_option"
			                	type="text"
			                	value={name_option}
			                	onChange={this.handleInputChange}	
			                	style={{ width: 400 }} 
			                	placeholder=""
			                	disabled={loading}
			                	/>
			                <Form.Text className="text-muted">
			                  Largo máximo = 5, largo mínimo = 200
			                </Form.Text>  
			            </Form.Group>
			            <Form.Group controlId="exampleForm.ControlInput3">
			                <Form.Label>Descripción: </Form.Label>
			                <Form.Control
			                	name="description"
			                	value={description}
			                	onChange={this.handleInputChange}
			                	type="text" 
			                	style={{ width: 400 }} 
			                	placeholder="" />
			                <Form.Text className="text-muted">
			                  Largo máximo = 5, largo mínimo = 200
			                </Form.Text>  
			            </Form.Group>
			            <Form.Group controlId="exampleForm.ControlInput4">
			                <Form.Label>Imagen URL: </Form.Label>
			                <Form.Control
			                	name="imagen_url"
			                	value={imagen_url}
			                	onChange={this.handleInputChange}
			                	type="text" 
			                	style={{ width: 400 }}/>
			                <Form.Text className="text-muted">
			                  Ingrese url de la imagen para mostrar en esta opción de la papeleta
			                </Form.Text>  
			            </Form.Group>
			            <Form.Group controlId="exampleForm.ControlInput5">
			                <Form.Label>Lista: </Form.Label>
			                <Dropdown.Menu />
			                <Form.Control
			                	name="list"
			                	value={list}
			                	onChange={this.handleInputChange}
			                	type="text" 
			                	style={{ width: 400 }}/>
			            </Form.Group>
			                <div style={{marginTop: '10px', margin:'2px'}}>
			                	<Button className="btn" type="submit" disabled={loading}>Guardar</Button>
			                	<Button className="btn">Cancelar</Button>
			            		<Button className="btn" href={`/${election.questions.map(question => question._id)}/list_choices`} id="btn">Volver</Button>
	          				</div>
	          		</Form>
	          	)}
     		</div>
		)
	}

}

export default CreateChoices;