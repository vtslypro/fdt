import React from 'react';
//import Component from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

export class BlankWithRedux extends React.Component {
  componentDidMount() {
      $('.td_head').nextAll('table').hide();
      $('.td_head').click(function(){
        $(this).nextAll('table').fadeToggle()
      });
  }
  render() {
    return (
      <div>
        {/* BEGIN CONTENT */}
        <div className="page-content-wrapper">
            {/* BEGIN CONTENT BODY */}
            <div className="page-content" style={{minHeight: 800 + 'px'}}>
                {/* BEGIN PAGE HEADER*/}
                <h3 className="page-title">Blank With Redux
                    <small> </small>
                </h3>

                {/* END PAGE HEADER*/}
                <div className="note note-info">
                    <p>....Please come back later............</p>
                </div>
            </div>
            {/* END CONTENT BODY */}
        </div>
        {/* END CONTENT */}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    responseData: state.appCast.all,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch
//   };
// }
// injects increment and decrement
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ }, dispatch);
// }

export default connect(mapStateToProps)(BlankWithRedux);
