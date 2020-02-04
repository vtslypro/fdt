import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import Home from '../page/home/home';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
      {/* BEGIN SIDEBAR */}
      <div className="page-sidebar-wrapper">
          {/* END SIDEBAR */}
          {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
          {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
          <div className="page-sidebar navbar-collapse collapse">
              {/* BEGIN SIDEBAR MENU */}
              {/* DOC: Apply "page-sidebar-menu-light" className right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
              {/* DOC: Apply "page-sidebar-menu-hover-submenu" className right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
              {/* DOC: Apply "page-sidebar-menu-closed" className right after "page-sidebar-menu" to collapse("page-sidebar-closed" className must be applied to the body element) the sidebar sub menu mode */}
              {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
              {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
              {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
              <ul className="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                  <li className="nav-item start ">
                      <Link to="/home" className="nav-link nav-toggle">
                          <i className="icon-home"></i>
                          <span className="title">Home</span>
                          <span className="arrow"></span>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/fdt" className="nav-link nav-toggle">
                          <i className="icon-wrench"></i>
                          <span className="title">Functional Diagnostic Tool</span>
                          <span className="arrow"></span>
                      </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/home" className="nav-link nav-toggle">
                        <i className="icon-feed"></i>
                        <span className="title">AppCast Testing</span>
                        <span className="arrow"></span>
                    </Link>
                  </li>
                  <li className="nav-item  ">
                      <Link to="/home" className="nav-link nav-toggle">
                          <i className="icon-puzzle"></i>
                          <span className="title">Monitor and Administration Panel</span>
                          <span className="arrow"></span>
                      </Link>
                      <ul className="sub-menu">
                          <li className="nav-item  ">
                              <Link to="/home" className="nav-link ">
                                  <span className="title">Rover Server Status</span>
                              </Link>
                          </li>
                          <li className="nav-item  ">
                              <Link to="/home" className="nav-link ">
                                  <i className="icon-bar-chart"></i>
                                  <span className="title">Server Statistics</span>
                                  <span className="badge badge-success">1</span>
                              </Link>
                          </li>
                          <li className="nav-item  ">
                              <Link to="/home" className="nav-link ">
                                  <span className="title">System Alert</span>
                                  <span className="badge badge-danger">2</span>
                              </Link>
                          </li>
                      </ul>
                  </li>
                  <li className="nav-item  ">
                      <Link to="/home" className="nav-link nav-toggle">
                          <i className="icon-settings"></i>
                          <span className="title">Experimentation Framework Panel</span>
                          <span className="arrow"></span>
                      </Link>
                      <ul className="sub-menu">
                          <li className="nav-item  ">
                              <Link to="/home" className="nav-link ">
                                  <span className="title">Perform Experimentation
                                      <br/>Controls</span>
                              </Link>
                          </li>
                          <li className="nav-item  ">
                              <Link to="/home" className="nav-link ">
                                  <span className="title">Send Request
                                      <br/>Form Controls</span>
                              </Link>
                          </li>
                          <li className="nav-item  ">
                              <Link to="/home" className="nav-link ">
                                  <span className="title">System Settings</span>
                              </Link>
                          </li>
                      </ul>
                  </li>
                  <li className="nav-item  ">
                      <Link to="/home" className="nav-link nav-toggle">
                          <i className="icon-magnifier"></i>
                          <span className="title">FAQ</span>
                          <span className="arrow"></span>
                      </Link>
                  </li>
                  <li className="nav-item  ">
                      <Link to="/home" className="nav-link nav-toggle">
                          <i className="icon-bulb"></i>
                          <span className="title">About</span>
                          <span className="arrow"></span>
                      </Link>
                  </li>
              </ul>
              {/* END SIDEBAR MENU */}
          </div>
          {/* END SIDEBAR */}
      </div>
      {/* END SIDEBAR */}


      </div>
);
}
}
