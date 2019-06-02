import React, { Component } from 'react';

import ColumnsWindowComponent from '../ColumnsWindowComponent';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {allColumns, selectedColumns} = this.props;
   return <ColumnsWindowComponent buttonLabel='Configure' allColumns={allColumns} selectedColumns={selectedColumns} />;

  }
}

export default HeaderComponent;
