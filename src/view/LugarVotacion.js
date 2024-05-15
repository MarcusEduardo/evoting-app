import React, { Component } from 'react'
import TextField from '../component/TextField';

class LugarVotacion extends Component {

	render() {
		const { drop_in_places } = this.props;
		return (
			<div className="style_txt">
              <TextField titulo="Drop in places" valor = {drop_in_places.map(drop_in_place => drop_in_place.name)} />
	        </div>
		);
	}
}

export default LugarVotacion;


