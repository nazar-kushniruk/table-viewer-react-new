import React, {Component} from 'react';
import TableComponent from '../TableComponent';
import HeaderComponent from '../HeaderComponent';

/**
 * const leftColumns = [1,2], rightColumns = [];
 * method confirm =
 * */
class RootComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isLoading: false,
            allColumns: ['name', 'username', 'email', 'website', 'address'],
            selectedColumns: ['id'],

        };
        this.setLoading = this.setLoading.bind(this);
        this.changeLists = this.changeLists.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users').then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(users =>
                this.setState({
                    users: users,
                    isLoading: false,
                }, () => {
                    console.log('in set state callbaxck', this.state)
                })).catch(error => {
                console.log('parsing failed', error)
            })
        }, 2000);
        console.log('componentDidMount->', this.state);

    }

    setLoading() {
        this.setState((prevState, prevProps) => ({isLoading: !prevState.isLoading}));
    }

    changeLists(selectedColumns) {
        this.setState({selectedColumns})
    }

    render() {
        const {users, isLoading, allColumns, selectedColumns} = this.state;
        console.log('render state ->', this.state);
        return (
            <div className="container">
                <HeaderComponent
                    allColumns={allColumns}
                    selectedColumns={selectedColumns}
                    changeLists={this.changeLists}/>
                {!isLoading ? <TableComponent users={users} columns={selectedColumns}/> :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
            </div>
        );
    }
}

export default RootComponent;
