import React, {Component} from 'react';

class TableComponent extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        const {users, columns} = this.props;

        return (
            <table className="mt-h1 table">
                <thead>
                <tr>
                    {columns && columns.length && columns.map(columnName =>  <th scope="col"> {columnName}</th>)  }

                </tr>
                </thead>
                <tbody>
                {users && users.length &&
                users.map( i =>(
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.username}</td>
                        <td>{i.phone}</td>
                        <td>{i.website}</td>
                        <td>{i.address.city}</td>
                    </tr>)
                )}
                </tbody>
            </table>);
    }
}

export default TableComponent;
