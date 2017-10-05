import React from 'react';
import { connect } from 'react-redux';

class D3ChartComponent extends React.Component {
  render() {  
    return (            
      <div id="chart-component" className={chartComponent} >        
          <div className="col-sm-12">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
      </div>      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(D3ChartComponent);
