import React, { Component } from 'react';
import {Button} from "reactstrap";

class ColumnsItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.addSelectedColumn =  this.addSelectedColumn.bind(this);
  }
  addSelectedColumn() {
    const {column,addSelectedColumn} = this.props;

    addSelectedColumn(column);
  }
  render() {
    const{column} = this.props;
    return (
         <li className="list-group-item list-group-item-action">
           {column}
          <Button type="button" className="btn btn-outline-secondary btn-xs float-right"
                  onClick={this.addSelectedColumn}>+</Button></li>

  );
  }
}

export default ColumnsItemComponent;
