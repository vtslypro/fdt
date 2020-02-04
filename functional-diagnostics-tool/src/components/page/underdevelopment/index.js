import React from 'react';
import { Component } from 'react';

export default class underdevelopment extends Component {
  componentDidMount(){
      $('#pageContent').css('height', $(window).height());
  }
  render() {
    return (
      <div>
      {/* BEGIN CONTENT */}
      <div className="page-content-wrapper">
          {/* BEGIN CONTENT BODY */}
          <div className="page-content" id="pageContent">
              {/* BEGIN PAGE HEADER*/}
              <h3 className="page-title">Under Development
                  <small> </small>
              </h3>
              {/* END PAGE HEADER*/}
              <img src="http://www.theupdates.pk/index_files/under_dev.jpg" style={{width: 100 + '%'}}/>
          </div>
          {/* END CONTENT BODY */}
      </div>
      {/* END CONTENT */}
      </div>
    );
  }
}
