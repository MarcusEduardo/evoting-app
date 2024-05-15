import React, { Component, Fragment } from 'react'
import TextField from '../component/TextField';

class Autoridades extends Component {

	render() {
		const { encrypters } = this.props;
		return (
			<Fragment	>
                  {encrypters.map((encrypter, index) => (
                    <Fragment key={index}>
                      <TextField titulo="Nombre" valor={encrypter.name}/>
                      <TextField titulo="LLave pública" valor={encrypter.public_key}/>
                      <TextField titulo="Estado" valor={encrypter.state}/>
                    </Fragment>
                  ))}
	        </Fragment	>
		);
	}
}

export default Autoridades;
