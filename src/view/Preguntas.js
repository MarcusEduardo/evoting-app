import React, { Component, Fragment } from 'react'
import TextField from '../component/TextField';
import BooleanData from '../component/BooleanData';

class Preguntas extends Component {
	render() {
		const { questions } = this.props;
		return (
			<Fragment>
				{questions.map((question, i) => (
	                <Fragment key={i}>
	                    <TextField titulo="Posición relativa" valor={question.relative_position}/>
	                    <TextField titulo="Opción mínima" valor={question.min_options}/>
	                    <TextField titulo="Opción máxima" valor={question.max_options}/>
	                    <BooleanData titulo="Accept null" valor={question.accept_null}/>
	                    <BooleanData titulo="Accept null explicit" valor={question.accept_null_explicit}/>
	                    <BooleanData titulo="Accept blank explicit" valor={question.accept_blank_explicit}/>
	                    <TextField titulo="Id" valor={question._id}/>
	                    <TextField titulo="Nombre" valor={question.name}/>
	                    {question.choices.map((choice, i) =>
	                      <Fragment key={i}>
	                        <TextField titulo="Nombre choices" valor={choice.name}/>
	                        <TextField titulo="Valor" valor={choice.value}/>
	                        <TextField titulo="Posición absoluta" valor={choice.absolute_position}/>
	                        <TextField titulo="Posición relativa" valor={choice.relative_position}/>
	                      </Fragment>
	                    )}
	                </Fragment>
	              ))}
	        </Fragment>
		);
	}
}

export default Preguntas;


