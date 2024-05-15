import React, { Component, Fragment } from 'react'
import TextField from '../component/TextField';

class Distritos extends Component {

	render() {
		const { districts } = this.props;
		return (
			<Fragment>
              {districts.map((district, i) => (
                  <Fragment key={i}>
                    <TextField titulo="Identificador único" valor={district._id}/>
                    <TextField titulo="Nombre" valor={district.name}/>
                    <TextField titulo="Descripción" valor={district.description}/>
                    <TextField titulo="Default ballotbox id" valor={district.default_ballotbox_id}/>
                    <TextField titulo="Questions Ids" valor={district.question_ids}/>
                    {district.ballotboxes.map((ballotbox, i )=> (
                        <Fragment key={i}>
                          <TextField titulo="Identificador del ballotbox" valor={ballotbox._id}/>
                          <TextField titulo="Nombre del ballotbox" valor={ballotbox.name}/>
                          <TextField titulo="Descripción del ballotbox" valor={ballotbox.description}/>
                          <TextField titulo="Tipo ballotbox" valor={ballotbox.ballotbox_type}/>
                        </Fragment>
                    ))}
                  </Fragment>
             	))}
	        </Fragment>
		);
	}
}

export default Distritos;


