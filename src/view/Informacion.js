import React, { Component } from 'react'
import TextField from '../component/TextField';

class Informacion extends Component {
	render() {
		const { name , organization_name } = this.props.election;
		const { logo_url, identification_field, time_zone} = this.props.election.configuration;
		return (
			<div className="style_txt">
	            <TextField titulo="Título de la elección" valor={name}/>
                <TextField titulo="Nombre de la organización" valor={organization_name}/>
                <TextField titulo="Identification field" valor={identification_field}/>
                <TextField titulo="Time zone" valor={time_zone}/>
                <TextField titulo="Logo" valor={logo_url} ></TextField>
	        </div>
		);
	}
}

export default Informacion;
