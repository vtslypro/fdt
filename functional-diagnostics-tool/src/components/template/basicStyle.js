import React from 'react';
import { Component } from 'react';

export default class BasicStyle extends Component {
  render() {
    return (
      <div>
      {/* BEGIN CONTENT */}
      <div className="page-content-wrapper">
          {/* BEGIN CONTENT BODY */}
          <div className="page-content">
              {/* BEGIN PAGE HEADER*/}
              {/* BEGIN THEME PANEL */}
              <div className="theme-panel">
                  <div className="toggler tooltips" data-container="body" data-placement="left" data-html="true" data-original-title="Click to open advance theme customizer panel">
                      <i className="icon-settings"></i>
                  </div>
                  <div className="toggler-close">
                      <i className="icon-close"></i>
                  </div>
                  <div className="theme-options">
                      <div className="theme-option theme-colors clearfix">
                          <span> THEME COLOR </span>
                          <ul>
                              <li className="color-default current tooltips" data-style="default" data-container="body" data-original-title="Default"> </li>
                              <li className="color-grey tooltips" data-style="grey" data-container="body" data-original-title="Grey"> </li>
                              <li className="color-blue tooltips" data-style="blue" data-container="body" data-original-title="Blue"> </li>
                              <li className="color-dark tooltips" data-style="dark" data-container="body" data-original-title="Dark"> </li>
                              <li className="color-light tooltips" data-style="light" data-container="body" data-original-title="Light"> </li>
                          </ul>
                      </div>
                      <div className="theme-option">
                          <span> Layout </span>
                          <select defaultValue="fluid" className="layout-option form-control input-small">
                              <option value="fluid">Fluid</option>
                              <option value="boxed">Boxed</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Header </span>
                          <select defaultValue="fixed" className="page-header-option form-control input-small">
                              <option value="fixed">Fixed</option>
                              <option value="default">Default</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Top Dropdown</span>
                          <select defaultValue="light" className="page-header-top-dropdown-style-option form-control input-small">
                              <option value="light">Light</option>
                              <option value="dark">Dark</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Mode</span>
                          <select defaultValue="default" className="sidebar-option form-control input-small">
                              <option value="fixed">Fixed</option>
                              <option value="default">Default</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Style</span>
                          <select defaultValue="default" className="sidebar-style-option form-control input-small">
                              <option value="default">Default</option>
                              <option value="compact">Compact</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Menu </span>
                          <select defaultValue="accordion" className="sidebar-menu-option form-control input-small">
                              <option value="accordion">Accordion</option>
                              <option value="hover">Hover</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Position </span>
                          <select defaultValue="left" className="sidebar-pos-option form-control input-small">
                              <option value="left">Left</option>
                              <option value="right">Right</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Footer </span>
                          <select defaultValue="default" className="page-footer-option form-control input-small">
                              <option value="fixed">Fixed</option>
                              <option value="default">Default</option>
                          </select>
                      </div>
                  </div>
              </div>
              {/* END THEME PANEL */}
              <h3 className="page-title">BasicStyle
                  <small> BasicStyle</small>
              </h3>

              {/* END PAGE HEADER*/}
              <div className="note note-info">
                  <p>....BasicStyle............</p>
              </div>
          </div>
          {/* END CONTENT BODY */}
      </div>
      {/* END CONTENT */}
      </div>
    );
  }
}
