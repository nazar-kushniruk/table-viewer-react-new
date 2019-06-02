import React, {Component} from 'react';
import ColumnsListComponent from '../ColumnsListComponent';

class ColumnsSelectorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableColumns: this.props.availableColumns,
            selectedColumns: this.props.selectedColumns
        };
        this.deleteSelectedColumn = this.deleteSelectedColumn.bind(this);
        this.addSelectedColumn = this.addSelectedColumn.bind(this);
        console.log('ColumnsSelectorComponent  constructor  this.state->',   this.state);
    }

    deleteSelectedColumn(column) {
        this.setState((prevState) => {
            selectedColumn : prevState.selectedColumns.filter(i => i !== column)
        })
    }

    addSelectedColumn(column) {
        console.log('addSelectedColumn column->', column);
        console.log('ColumnsSelectorComponent addSelectedColumn this.state ->', this.state);
        const nowState =  this.state;
        this.setState(function(state, props)  {
            let {selectedColumns,availableColumns}  = state;

            availableColumns = availableColumns.reduce(function (result,column) {

                if(!nowState.selectedColumns.includes(column) ){
                    result.push(column);
                }
                return result;
            }, []);
            selectedColumns.push(column);
            console.log('ColumnsSelectorComponent setState selectedColumns ->', selectedColumns);
            return { selectedColumns,
                availableColumns

            }})
    }

    render() {
        const {availableColumns, selectedColumns} = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    <ColumnsListComponent
                        columns={availableColumns}
                        title='Available'
                        addSelectedColumn={this.addSelectedColumn}/>
                    <ColumnsListComponent
                        columns={selectedColumns}
                        deleteSelectedColumn={this.deleteSelectedColumn}
                        title='Selected'/>
                </div>
            </div>
        );
    }
}

export default ColumnsSelectorComponent;
