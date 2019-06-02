import React, { Component } from 'react';

import ColumnsWindowComponent from '../ColumnsWindowComponent';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {allColumns, selectedColumns,changeLists} = this.props;
   return <ColumnsWindowComponent buttonLabel='Configure'
                                  allColumns={allColumns}
                                  selectedColumns={selectedColumns}
                                  changeLists={changeLists}
   />;

  }
}

export default HeaderComponent;
