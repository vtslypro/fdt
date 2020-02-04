import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  componentDidMount() {
    $('.page-content').css('min-height', $(window).height());
  }
  render() {
    return (
      <div>
        <link href="assets/home/css/home.css" rel="stylesheet" />
        {/* BEGIN CONTENT */}
        <div className="page-content-wrapper">
            {/* BEGIN CONTENT BODY */}
            <div className="page-content" id="home-content">
                {/* BEGIN PAGE HEADER*/}
                {/*<h3 className="page-title">
                    <strong> Autodesk Delivery Team - Rover </strong>
                    <small> San Rafael , San Francisco </small>
                </h3>*/}
                {/* END PAGE HEADER*/}

                {/* BEGIN CONTENT HEADER */}
                <div className="row about-header">
                    <div className="col-md-12">
                        <img id="home-banner" src="assets/img/banner.png" />
                    </div>
                </div>
                {/* END CONTENT HEADER */}

                <div className="col-lg-12">
                    <div className="blog-post-lg bordered blog-container">
                        <div className="blog-post-content">
                            <h2 className="blog-title blog-post-title">
                                <span className="">Welcome to Rover Web Platform</span>
                            </h2>

                            <h2 className="project-title">
                              <Link to="/fdt" className="nav-link nav-toggle">
                                  <i className="icon-wrench"></i>
                                  <span className="">  Functional Diagnostics Tool  </span>
                                  <i className="icon-wrench"></i>
                              </Link>
                            </h2>

                            <p className="blog-post-desc">
                               This tool simplifies the work needed to determine why an update or extension is not visible for a particular user.
                            </p>
                            <div className="blog-post-foot">
                                <div className="blog-post-meta">
                                    <i className="icon-calendar font-blue"></i>
                                    <a href="javascript:;">May 31, 2015</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* END CONTENT BODY */}
        </div>
        {/* END CONTENT */}
    </div>
    );
  }
}
