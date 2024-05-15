import React, { Component } from 'react'
import TextField from '../component/TextField';
import BooleanData from '../component/BooleanData';

class Configuracion extends Component {
	render() {
		const { support, default_district_id, safe_conduct_timeout_seconds } = this.props.configuration;
		const { factor, registration_required, can_choose_ballotbox, open_registration,
			 	default_state, identity_regex, restricted, weighted, listed, result_delay,
			  	max_ips, max_registrations } = this.props.configuration.advanced_config;
		return (
			<div className="style_txt">
	            <TextField titulo="Support" valor={support}/>
	            <TextField titulo="Default district" valor={default_district_id}/>
	            <TextField titulo="Safe conduct timeout" valor={safe_conduct_timeout_seconds}/>
                <TextField titulo="Factor" valor={factor}/>
                <BooleanData titulo="Registration required" valor={registration_required}/>
                <BooleanData titulo="Can choose ballotbox" valor={can_choose_ballotbox}/>
                <BooleanData titulo="Open registration" valor={open_registration}/>
                <TextField titulo="Default state" valor={default_state}/>
                <TextField titulo="Identity regex" valor={identity_regex}/>
                <BooleanData titulo="Restricted" valor={restricted}/>
                <BooleanData titulo="Weighted" valor={weighted}/>
                <BooleanData titulo="Listed" valor={listed}/>
                <TextField titulo="Result delay" valor={result_delay}/>
                <TextField titulo="Max ips" valor={max_ips}/>
                <TextField titulo="Max registrations" valor={max_registrations}/>
	        </div>
		);
	}
}

export default Configuracion;