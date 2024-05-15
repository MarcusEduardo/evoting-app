import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class TextField extends Component { 
    constructor(props){
      super(props);
      this.state = {
        userInput: (this.props.valor),
        new_input: (this.props.valor),
        isInEditMode: false
      }
  }

  updateComponentValue = () => {
      this.setState({
      userInput: this.state.new_input,
      isInEditMode: !this.state.isInEditMode
     })
  } 

  changeEditMode = () => {
      this.setState({
        new_input: this.state.userInput,
        isInEditMode: !this.state.isInEditMode
      })
  }

  handleUserInput = (e) => {
      this.setState({
        new_input: e.target.value
      });
  }

  renderEditView = () => {
    return (
      <div>
        <div className="input-group mb-3">
          {this.props.titulo}:
            <input type="text" value={this.state.new_input} onChange={this.handleUserInput} class="form-control" 
              aria-label="" aria-describedby="button-addon2"/>
              <div className="input-group-append mb-3">
                <button className="btn1 btn-outline-primary" type="button" 
                        id="button-addon2" onClick={() => this.updateComponentValue()} >Guardar</button>
              </div>
        </div>
    </div>
    )
  }

  renderDefaultView = () => {
    return (
      <div>
          <span> {this.props.titulo}: </span>
          <span onDoubleClick={() => this.changeEditMode()} > {this.state.userInput} </span>
          <FontAwesomeIcon className="icon_edit" icon = "edit" onClick={() => this.changeEditMode()}/>
      </div>
    )
  }

  render(){
    return this.state.isInEditMode ? 
    this.renderEditView():
    this.renderDefaultView()
  }
}

export default TextField;