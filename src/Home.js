import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from "./component/LoadingSpinner";
import Footer from './Footer';
import StyleHome from './styles/StyleHome.css';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Servidores from './view/Servidores';
import Informacion from './view/Informacion';
import Configuracion from './view/Configuracion';
import Plantillas from './view/Plantillas';
import Button from 'react-bootstrap/Button';
import Autoridades from './view/Autoridades';
import Encriptadores from './view/Encriptadores';
import Card from 'react-bootstrap/Card';
//import Distritos from './view/Distritos';
//import Preguntas from './view/Preguntas';
import LugarVotacion from './view/LugarVotacion';
import {Nav}  from 'react-bootstrap';

const myelection = require('./t56dJWBy.json');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      election : null,
      loading : false,
    }
  }


render() {
  const { election } = this.state;
  return (
    <div className="ui container" >
      {this.state.loading && <LoadingSpinner />}
      {this.state.election === null ? (
        <div className="field">
          {!this.state.loading && (
            <p>No encontró la elección</p>
          )}
        </div>
        ):(
          <div className="ui container">
              <div className="ui container">
                <h1 className="style_title">Sistema configuración de elecciones</h1>
              </div>
            <div className="ui container">
                  <div className="ui container" >
                    <Card className="style_responsive_select_input">
                      <Card.Header></Card.Header>
                      <Card.Body>
                        <Card.Title>Importar archivo: </Card.Title>
                        <Card.Text>
                            <input type="file" className="" name="myfile" />
                        </Card.Text>
                        <Button variant="primary">Enviar</Button>
                      </Card.Body>
                    </Card>
                    <br />
                    <br />
                    <Nav activeKey="distritoPregunta">
                      <Nav.Item>
                        <Link id="link_id" to={`/${election._id}/listQuestions`}>Preguntas </Link>
                        {/*to={`/${question._id}/add_option`}*/}
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tabs defaultActiveKey='profile' id="tab_id" >
                    <Tab eventKey='informacion' title="Información" >
                      <Informacion election={election}/>
                    </Tab>
                    <Tab eventKey="configuracion" title="Configuración avanzada">
                      <Configuracion configuration={election.configuration}/>
                    </Tab>
                    <Tab eventKey="servidor" title="Servidores">
                      <Servidores configuration={election.configuration}/>
                    </Tab>
                    <Tab eventKey="plantilla" title="Plantillas">
                      <Plantillas templates = {election.configuration.templates}/>
                    </Tab>
                    <Tab eventKey="autoridad_aceptada" title="Autoridades aceptadas">
                      <Autoridades encrypters = {election.encrypters}/>
                      <Encriptadores authorization_authorities = {election.authorization_authorities}/>
                    </Tab>
                    <Tab eventKey="lugarVotacion" title="Lugar de votación">
                      <LugarVotacion drop_in_places = {election.drop_in_places}/>
                    </Tab>
                    {/*
                    <Tab eventKey="distritoPregunta" title="Distritos y Preguntas">
                      <Distritos districts = {election.districts}/>
                      <Preguntas questions = {election.questions}/>
                    </Tab>
                    */}
                  </Tabs>
            </div>
            <div>
              <Footer />
            </div>
          </div>
          )
        }
    </div>
    );
  }


componentDidMount() {

      this.setState({loading: true}, () => {

      axios.get('https://bulletin-api.evoting.cl/api/election/'+this.props.match.params.election_id)
      .then(res => {
          console.log(res.data)
          this.setState({ election: myelection, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
    });
  }
}


export default Home;