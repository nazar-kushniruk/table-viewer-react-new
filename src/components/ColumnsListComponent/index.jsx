import React, {Component} from 'react';
import ColumnsItemComponent from '../ColumnsItemComponent';

class ColumnsListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {columns, addSelectedColumn} = this.props;
        console.log('ColumnsListComponent render columns->', columns);
        return (
            <div className='col'>
                <ul className="list-group">

                    {columns && columns.length ? columns.map(column =>
                        <ColumnsItemComponent
                            column={column}
                            addSelectedColumn={addSelectedColumn}
                        />) : 'No columns selected'}

                </ul>
            </div>


        );
    }
}

export default ColumnsListComponent;
