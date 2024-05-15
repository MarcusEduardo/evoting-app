import React, { Component } from 'react'
import TextField from '../component/TextField';

class Encriptadores extends Component {

	render() {
		const { authorization_authorities } = this.props;
		return (
			<div>
              {authorization_authorities.map((authorization, index) => (
                <div key={index}>
                  <TextField titulo="Nombre" valor={authorization.name} />
                  <TextField titulo="LLave pública" valor= {authorization.public_key}/>
                  <TextField titulo="Estado" valor= {authorization.state}/>
                </div>
              ))}
	        </div>
		);
	}
}

export default Encriptadores;


