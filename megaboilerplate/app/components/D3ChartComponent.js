import React from 'react';
import { connect } from 'react-redux';
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';

class D3ChartComponent extends React.Component {
  render() {  
    return (            
      <div id="chart-component" className='chart' >        
          <div className="col-sm-12">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <ForceGraph simulationOptions={{ height: 300, width: 300 }}>
                <ForceGraphNode node={{ id: 'first-node' }} fill="red" />
                <ForceGraphNode node={{ id: 'second-node' }} fill="blue" />
                <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
              </ForceGraph>
              </div>
            </div>
          </div>
      </div>      
    );
  }
}

export default D3ChartComponent;