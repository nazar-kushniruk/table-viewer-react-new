import React, {Component} from 'react';
import ColumnsItemComponent from '../ColumnsItemComponent';

class ColumnsListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {columns, columnAction,action} = this.props;

        return (
            <div className='col'>
                <ul className="list-group">

                    {columns && columns.length ? columns.map(column =>
                        <ColumnsItemComponent
                            column={column}
                            columnAction={columnAction}
                            action={action}
                        />) : 'No columns selected'}

                </ul>
            </div>


        );
    }
}

export default ColumnsListComponent;
