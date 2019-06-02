import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import ColumnsSelectorComponent from '../ColumnsSelectorComponent';


class ColumnsWindowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            allColumns: this.props.allColumns,
            selectedColumns: this.props.selectedColumns

        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const {allColumns, selectedColumns} = this.state;
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <ColumnsSelectorComponent availableColumns={allColumns} selectedColumns={selectedColumns}/>

                    </ModalBody>
                    <ModalFooter>

                        <Button color="secondary" onClick={this.toggle}>Cancel</Button> {' '}
                        <Button color="primary" onClick={this.toggle}>Confirm</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


export default ColumnsWindowComponent;
