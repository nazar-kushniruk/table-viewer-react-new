import React, { Component } from 'react';
import {Button} from "reactstrap";

class ColumnsItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.columnAction =  this.columnAction.bind(this);
  }
  columnAction() {
    const {column,columnAction} = this.props;

    columnAction(column);
  }
  render() {
    const{column,action} = this.props;
    return (

         <li className="list-group-item list-group-item-action">
           {column}
          <Button type="button" className="btn btn-outline-secondary btn-xs float-right"
                  onClick={this.columnAction}>{action}</Button></li>

  );
  }
}

export default ColumnsItemComponent;
