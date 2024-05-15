import React, { Component } from 'react';

export class BooleanData extends Component { 

  constructor(props){
    super(props);
    this.state = {
      userInput: JSON.stringify(this.props.valor),
      new_input: JSON.stringify(this.props.valor),
      check1: this.props.valor,
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

  onCheckChange = (event) => {
    this.setState({
      [event.target.name] : event.target.checked 
    })
  }
 
  handleUserInput = (event) => {
    this.setState({
      new_input: event.target.value
    });
  }

  renderEditView = () => {
    return (
      <div>
        <div className="input-group mb-3">
          {this.props.titulo}:
        </div>
      </div>
    )
  }

  renderDefaultView = () => {
    return (
      <div>
          <span> {this.props.titulo} </span>
            <input type="checkbox" name="check1" checked={this.state.check1} onChange={this.onCheckChange}/>
      </div>
    )
  }

  render() {
    return this.state.isInEditMode ? 
    this.renderEditView():
    this.renderDefaultView()
  }
}

export default BooleanData;