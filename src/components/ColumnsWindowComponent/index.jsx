import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import ColumnsSelectorComponent from '../ColumnsSelectorComponent';


class ColumnsWindowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            allColumns:props.allColumns,
            selectedColumns: props.selectedColumns,
            takeColumns : false

        };

        this.toggle = this.toggle.bind(this);
        this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    onConfirmButtonClick ( ) {
        this.setState({takeColumns : true});
        this.toggle();
    }
    render() {
        const {allColumns, selectedColumns,takeColumns} = this.state;

        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <ColumnsSelectorComponent availableColumns={allColumns}
                                                  selectedColumns={selectedColumns}
                                                  changeLists={this.props.changeLists}
                                                  takeColumns={takeColumns}
                        />

                    </ModalBody>
                    <ModalFooter>

                        <Button color="secondary" onClick={this.toggle}>Cancel</Button> {' '}
                        <Button color="primary" onClick={this.onConfirmButtonClick}>Confirm</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


export default ColumnsWindowComponent;
