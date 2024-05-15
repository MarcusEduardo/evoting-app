import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';	

const election = require('../t56dJWBy.json');

class AddChoices extends Component {
	defaultState = {
		myelection: {},
		loading: true
	}

	state = {...this.defaultState}

	renderLoading = () => {
		return (
			<div style={{}}>
				Cargando los datos...
			</div>
		)
	}

	handleSubmit = event => {
		event.preventDefault();
		const { election_id } = this.props.match.params;
		window.location.href = "/:election_id/listQuestions";
		/*
			En ves de POST, para editar generalmente se usa PUT o PATCH
			axios.put('http://my-api-url/questions/election_id', this.state.question).then(res => {
				console.log(res)
				Hacer lo que sea al terminar....
			}).catch(err => {
				console.log(err)
			})
		*/
	}

	componentDidMount() {
		console.log(this.props) 
		// Aqui viene el prop match.params que guarda el valor de la variable de la URL
		// en una variable del mismo nombre que se le asigno en la ruta, en este caso :election_id
		// por lo que la variable es election_id
		const { election_id } = this.props.match.params;
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
		console.log('...')
		setTimeout(() => {
			this.setState({ question: {}, loading: false })
		}, 1500)
	}

	render(){
		const {loading, question_, name_option, description, imagen_url, list} = this.state;
		return(
			<div className="ui container">
					<div><h1>CREAR CHOICES</h1></div>
					{loading ? this.renderLoading() : (
			        <Form onSubmit={this.handleSubmit}>       
			            <Form.Group controlId="exampleForm.ControlInput1">
			                <Form.Label style={{marginTop:'10px'}}>Pregunta: </Form.Label>
			                <Form.Control
			                	name="question_" 
			                	value={question_}           
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
			                	<Button className="btn btn-light" variant="outline-primary" type="submit" disabled={loading}>Guardar</Button>
			                	<Button className="btn btn-light" variant="outline-primary">Cancelar</Button>
			            		<Button className="btn btn-light" variant="outline-primary" href={`/${election._id}/add_option`} id="btn">Volver</Button>
	          				</div>
	          		</Form>
	          	)}
     		</div>
		)
	}
}

export default AddChoices;