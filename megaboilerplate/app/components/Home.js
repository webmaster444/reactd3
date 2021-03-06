import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Header from './Header/Header';
import Footer from './Footer';
import D3ChartComponent from './D3ChartComponent';
class Home extends React.Component {
  render() {

    let sidebarshown = 'page-wrapper';
    if(this.props.token)
      sidebarshown = 'page-wrapper sidebarshown';    

    return (      
      <div>      
      <Header />
      <div id="page-wrapper" className={sidebarshown} >
        <Messages messages={this.props.messages}/>
        <div className="row">
          <div className="col-sm-4">
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
          <div className="col-sm-8">
            <D3ChartComponent />
          </div>          
        </div>
        <Footer />
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

export default connect(mapStateToProps)(Home);
