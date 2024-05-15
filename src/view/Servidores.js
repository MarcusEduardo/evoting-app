import React, { Component } from 'react'
import TextField from '../component/TextField';

class Servidores extends Component {
	render() {
		const { ballot_box_url, home_url, encrypter_url, bulletin_url } = this.props.configuration;
		return (
			<div className="style_txt">
	            <TextField titulo="Ballot Box Url" valor= {ballot_box_url}/>
                <TextField titulo="Home Url" valor={home_url}/>
                <TextField titulo="Encrypter Url" valor={encrypter_url}/>
                <TextField titulo="Bulletin Url" valor={bulletin_url}/>
	        </div>
		);
	}
}

export default Servidores;
