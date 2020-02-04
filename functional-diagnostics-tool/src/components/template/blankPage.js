import React from 'react';
import { Component } from 'react';

export default class BlankPage extends Component {
  render() {
    return (
      <div>
      {/* BEGIN CONTENT */}
      <div className="page-content-wrapper">
          {/* BEGIN CONTENT BODY */}
          <div className="page-content">
              {/* BEGIN PAGE HEADER*/}
              <h3 className="page-title">Blank Title
                  <small> Title</small>
              </h3>

              {/* END PAGE HEADER*/}
              <div className="note note-info">
                  <p>........Content goes here...........</p>
              </div>
          </div>
          {/* END CONTENT BODY */}
      </div>
      {/* END CONTENT */}
      </div>
    );
  }
}
