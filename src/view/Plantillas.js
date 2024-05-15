import React, { Component } from 'react'
import TextField from '../component/TextField';

class Plantillas extends Component {
	render() {
		const { templates } = this.props;
		return (
			<div className="style_txt">
	            {/*<TextField titulo="Templates" valor={templates.map((template) => 
	            	            	<a href={template.content}>{template.name}</a>)}/>*/}
				<TextField titulo="Templates" valor={templates.map(template => template.name)}/>	
	            <TextField titulo="Templates" valor={templates.map(template => template.content)}/>
	        </div>
		);
	}
}

export default Plantillas;
