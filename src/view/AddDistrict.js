import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { SampleBase } from '../common/sample-base';
//import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

export default class AddDistrict extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	myelection: {},
            visible : false,
            items: [
	        { id: 0, label: "D01" },
	        { id: 2, label: "D02" },
	        { id: 3, label: "D03" },
	        { id: 4, label: "D04" }
	      ],
      		selectedItems: []
        }
    }


    handleChange = (selectedItems)  => {
    	this.setState({ selectedItems });
  	}

    openModal = () => {
        this.setState({
            visible : true
        });
    }

    closeModal = () => {
        this.setState({
            visible : false
        });
    }

    render() {
    	const { items, selectedItems } = this.state;
        return (
            <section>
                <FontAwesomeIcon icon="caret-square-down" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}>
                    <div>
                        <h4 style={{textAlign:'center'}}> Seleccionar distritos</h4>
                        <MultiSelect
					        items={items}
					        selectedItems={selectedItems}
					        onChange={this.handleChange}
				        />
                    </div>
                </Modal>
            </section>
        );
    }
}