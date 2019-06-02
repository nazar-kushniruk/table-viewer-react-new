import React, {Component} from 'react';
import ColumnsListComponent from '../ColumnsListComponent';

class ColumnsSelectorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableColumns: [],
            selectedColumns: []
        };
        this.deleteSelectedColumn = this.deleteSelectedColumn.bind(this);
        this.addSelectedColumn = this.addSelectedColumn.bind(this);
        this.updateSelectedColumnsForTable = this.updateSelectedColumnsForTable.bind(this);
        console.log('ColumnsSelectorComponent  constructor  this.state->', this.state);
    }

    componentDidMount() {
        const {availableColumns, selectedColumns} = this.props;
        this.setState({availableColumns, selectedColumns})
        console.log(this.props);
    }

    deleteSelectedColumn(column) {
        let {selectedColumns, availableColumns} = this.state;
        availableColumns.push(column);

        this.setState({
                selectedColumns: selectedColumns.filter(i => i !== column),
                availableColumns: availableColumns
            }
        );
    }

    addSelectedColumn(column) {
        const nowState = this.state;
        let {selectedColumns, availableColumns} = this.state;

        selectedColumns.push(column);
        availableColumns = availableColumns.reduce(function (result, column) {
            if (!nowState.selectedColumns.includes(column)) {
                result.push(column);
            }
            return result;
        }, []);

        this.setState({
                selectedColumns,
                availableColumns
            }
        )
    }
    updateSelectedColumnsForTable() {
        this.props.changeLists(this.state.selectedColumns);

    }

    componentDidUpdate(prevProps) {
        if (this.props.takeColumns !== prevProps.takeColumns &&  this.props.takeColumns === true) {
            this.updateSelectedColumnsForTable();
            console.log('componentDidUpdate work!!->', this.props);
        }
    }

    render() {
        const {availableColumns, selectedColumns} = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    <ColumnsListComponent
                        columns={availableColumns}
                        title='Available'
                        columnAction={this.addSelectedColumn}
                        action="+"/>
                    <ColumnsListComponent
                        columns={selectedColumns}
                        columnAction={this.deleteSelectedColumn}
                        title='Selected'
                        action="x"/>
                </div>
            </div>
        );
    }
}

export default ColumnsSelectorComponent;
