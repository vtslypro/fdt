import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppCast } from '../../actions/index';

import { Link } from 'react-router';

class AppCast_Index extends Component {
  constructor(props) {
    super(props);

    this.onPreviewChange = this.onPreviewChange.bind(this)
    this.state = {
      data: [],
      preview: false
    };
  }
  componentWillMount() {
  }
  onPreviewChange() {
    if (this.state.preview == true) {
      this.setState({
        preview: false
      });
    }
    else {
      this.setState({
        preview: true
      });
    }
  }
  onSubmit() {
    this.props.fetchAppCast();
  }
  renderData() {
    return this.props.data.map((data) => {
      return (
        <li classname="list-group-time">
          <span className="pull-xs-right">
            {data.id}
          </span>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
      {/* BEGIN CONTENT */}
      <div className="page-content-wrapper">
          {/* BEGIN CONTENT BODY */}
          <div className="page-content">
              {/* BEGIN PAGE HEADER*/}
              <h3 className="page-title"> Functional Diagnostic Tool
                  <small>  FDT - The first user-friendly QA tool introduced by Delivery Team</small>
              </h3>
              <div className="page-bar">
                  <ul className="page-breadcrumb">
                      <li>
                          <i className="icon-home"></i>
                          <a href="index.html"> Home</a>
                          <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                          <Link to="/fdt">Functional Diagnostic Tool</Link>
                          <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                          <span>Upload System Log</span>
                      </li>
                  </ul>
                  <div className="page-toolbar">
                      <div className="btn-group pull-right">
                          <button type="button" className="btn btn-fit-height grey-salt dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true"> Actions
                              <i className="fa fa-angle-down"></i>
                          </button>
                          <ul className="dropdown-menu pull-right" role="menu">
                              <li>
                                  <a href="#">
                                      <i className="icon-bell"></i> Bookmark</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              {/* END PAGE HEADER*/}

              <div className="row">
                  <div className="col-md-12 ">
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption font-red-sunglo">
                                  <i className="icon-settings font-red-sunglo"></i>
                                  <span className="caption-subject bold uppercase"> Input Form</span>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form role="form">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label>Log file upload</label>
                                          <input
                                            type="file"
                                            onChange={this.handleFile}
                                            id="exampleInputFile1" />
                                          <p className="help-block"> Please upload the log file.</p>
                                      </div>
                                      <div className="form-group">
                                          <div className="checkbox-list">
                                              <label>
                                                  <input type="checkbox" onChange={event => this.onPreviewChange()}/> Preview Mode</label>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Output Result</label>
                                          <div className="radio-list-inline">
                                              <label className="radio-inline">
                                                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option1" defaultChecked /> Trace </label>
                                              <label className="radio-inline">
                                                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option2" /> Debug </label>
                                          </div>
                                      </div>

                                  </div>
                                  <div className="form-actions right">
                                      <button type="submit" onChange={event => this.onSubmit() } className="btn blue">Submit</button>
                                      <button type="button" className="btn default">Cancel</button>
                                  </div>
                              </form>
                          </div>


                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                    </div>
                  </div>

                  <div className="row">

                    <div className="col-md-12 ">
                      <div className="note note-info">
                        <h3>Preview</h3>
                        <p>{this.state.preview}</p>
                      </div>
                    </div>

                    <div className="col-md-12 ">
                      <ul className="list-group">
                        {this.renderData()}
                      </ul>
                    </div>



                  </div>
          </div>
          {/* END CONTENT BODY */}
      </div>
      {/* END CONTENT */}

      <script src="../assets/pages/scripts/ui-modals.min.js" type="text/javascript"></script>
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return { data: state.posts.all };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchAC }, dispatch);
// }

export default connect(null, { fetchAppCast })(AppCast_Index);
