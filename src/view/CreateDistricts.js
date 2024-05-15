import React, { Component } from 'react';
//import TextField from './TextField';
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
//import { Link } from "react-router-dom";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
//import Card from 'react-bootstrap/Card';
const election = require('../t56dJWBy.json');
//import StyleHome from './styles/StyleHome.css';
//import Nav from 'react-bootstrap/Nav';
//import Questions from './Questions';
library.add(faEdit, faCheck, faTimes);

class CreateDistricts extends Component {
    defaultState = {
        myelection: {},
        name_district: '',
        district_description: '',
        check_districts: false,
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
    //Con timeout(Emulación de una API)
      console.log('Eliminando distrito con id', id)
      setTimeout(() => {
        this.setState(({myelection}) => {
          const districts = myelection.districts.filter(district => district._id !== id)
          return { myelection: { ...myelection, districts }}
        })
        console.log('Distrito eliminado')
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
        <div style={{}}>
          Guardando datos...
        </div>
      )
    }

    render() {
        const {name_district, district_description, loading, check_districts, district} = this.state
        return (
          <div className="ui container">
            <Form onSubmit={this.handleSubmit} className="ui form">
                <div style={{marginLeft:'65%', marginTop:'10px'}}>
                    <Button href={`/${election._id}/listQuestions`}>
                      Ir a preguntas
                    </Button>
                    <Button href={`/${election._id}`}>
                      Volver al inicio
                    </Button>
                </div>    
                <div>
                  <h1> Crear distritos</h1>
                </div>
                    <Form.Group controlId="controlInput1">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                          name="name_district"
                          value={name_district}
                          onChange={this.handleInputChange}
                          type="text" 
                          style={{ width: 400 }}
                          placeholder="Nombre de distrito"
                        />
                    </Form.Group>
                    <Form.Group controlId="controlInput2">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control
                          name="district_description"
                          value={district_description}
                          onChange={this.handleInputChange}
                          type="text" 
                          style={{ width: 400 }}
                          placeholder="Descripción"
                        />
                    </Form.Group>
                <ButtonToolbar>
                  <div>
                    <div>
                      <Button type="submit" value="Submit" disabled={loading}>Guardar</Button>
                      <Button href="/t56dJWBy" id="btn">Cancelar</Button>
                    </div>
                  </div>
                </ButtonToolbar>
            </Form>
            <div style={{marginTop:'30px'}}>
              <div>
                <h1>Asignación de preguntas a distritos</h1>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Pregunta</th>
                    <th>Distrito</th>
                  </tr>
                </thead>
                <tbody>
                {election.questions.map(question => (
                  <tr key={question._id}>
                    <td>{question._id}</td>
                    <td>{question.name}</td>
                    <td>
                        <input
                            name="check_districts"
                            type="checkbox" 
                            onChange={this.handleCheckboxChange}
                            checked={check_districts} 
                        />
                    </td>
                    <td>
                      <Button
                              className="btn"
                              onClick={() => this.handleDelete(district._id)}>
                              Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </div>
          </div>
        )
      } 
} 

export default CreateDistricts;
