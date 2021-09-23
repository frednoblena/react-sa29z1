import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { SampleBase } from './sample-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

import * as dataSource from './dataSource/local-data.json';
const SAMPLE_CSS = `
.control-section {
    overflow: auto;
}`;
export class LocalData extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = dataSource;
        // Hierarchical data source for TreeView component
        this.fields = { dataSource: this.data.hierarchicalData, id: 'code', text: 'name', child: 'countries' };
        // Self-referential list data source for TreeView component
        this.listfields = { dataSource: this.data.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    }
    render() {
        return (<div className='control-pane'>
        <style>
            {SAMPLE_CSS}
        </style>
        <div className='control-section'>
          <div className='col-lg-6 nested-data'>
            <div className='content'>
              <h4>Hierarchical Data</h4>
              <TreeViewComponent id='tree' fields={this.fields}/>
            </div>
          </div>
          <div className='col-lg-6 list-data'>
            <div className='content'>
              <h4>List Data</h4>
              <TreeViewComponent id='listtree' fields={this.listfields}/>
            </div>
          </div>
        </div>
      </div>);
    }
}

render(<LocalData />, document.getElementById('sample'));