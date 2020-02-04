import React from 'react';
import { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
      <link href="assets/pages/css/faq.min.css" rel="stylesheet" type="text/css" />
      {/* BEGIN CONTENT */}
      <div className="page-content-wrapper">
          {/* BEGIN CONTENT BODY */}
          <div className="page-content">
              {/* BEGIN PAGE HEADER */}
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
                          <select className="layout-option form-control input-small" value="fluid">
                              <option value="fluid">Fluid</option>
                              <option value="boxed">Boxed</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Header </span>
                          <select className="page-header-option form-control input-small">
                              <option value="fixed" selected="selected">Fixed</option>
                              <option value="default">Default</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Top Dropdown</span>
                          <select className="page-header-top-dropdown-style-option form-control input-small">
                              <option value="light" selected="selected">Light</option>
                              <option value="dark">Dark</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Mode</span>
                          <select className="sidebar-option form-control input-small">
                              <option value="fixed">Fixed</option>
                              <option value="default" selected="selected">Default</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Style</span>
                          <select className="sidebar-style-option form-control input-small">
                              <option value="default" selected="selected">Default</option>
                              <option value="compact">Compact</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Menu </span>
                          <select className="sidebar-menu-option form-control input-small">
                              <option value="accordion" selected="selected">Accordion</option>
                              <option value="hover">Hover</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Sidebar Position </span>
                          <select className="sidebar-pos-option form-control input-small">
                              <option value="left" selected="selected">Left</option>
                              <option value="right">Right</option>
                          </select>
                      </div>
                      <div className="theme-option">
                          <span> Footer </span>
                          <select className="page-footer-option form-control input-small">
                              <option value="fixed">Fixed</option>
                              <option value="default" selected="selected">Default</option>
                          </select>
                      </div>
                  </div>
              </div>
              {/* END THEME PANEL */}
              <h3 className="page-title"> FAQ
                  <small>general faq page</small>
              </h3>
              <div className="page-bar">
                  <ul className="page-breadcrumb">
                      <li>
                          <i className="icon-home"></i>
                          <a href="index.html">Home</a>
                          <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                          <span>General</span>
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
                                      <i className="icon-bell"></i> Action</a>
                              </li>
                              <li>
                                  <a href="#">
                                      <i className="icon-shield"></i> Another action</a>
                              </li>
                              <li>
                                  <a href="#">
                                      <i className="icon-user"></i> Something else here</a>
                              </li>
                              <li className="divider"> </li>
                              <li>
                                  <a href="#">
                                      <i className="icon-bag"></i> Separated link</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              {/* END PAGE HEADER*/}
              <div className="faq-page faq-content-1">
                  <div className="search-bar ">
                      <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search for..." /> </div>
                  </div>
                  <div className="faq-content-container">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="faq-section ">
                                  <h2 className="faq-title uppercase font-blue">General</h2>
                                  <div className="panel-group accordion faq-content" id="accordion1">
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_1"> How do I vote or respond to a poll?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_1" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_2"> Do you accept purchase orders?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_2" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_3"> How many responses per poll (which plan) do I need?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_3" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_4"> What if my audience does not have a phone or a web-enabled device with internet access?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_4" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_6"> How fast do responses show up?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_6" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="faq-section ">
                                  <h2 className="faq-title uppercase font-blue">Technical</h2>
                                  <div className="panel-group accordion faq-content" id="accordion3">
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_1"> How do I vote or respond to a poll?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_3_1" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_2"> Do you accept purchase orders?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_3_2" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_3"> How many responses per poll (which plan) do I need?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_3_3" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_4"> What if my audience does not have a phone or a web-enabled device with internet access?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_3_4" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_5"> How can I share my poll with remote participants?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_3_5" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_6"> How fast do responses show up?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_3_6" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="faq-section ">
                                  <h2 className="faq-title uppercase font-blue">Pricing</h2>
                                  <div className="panel-group accordion faq-content" id="accordion2">
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_1"> How much does it cost?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_2_1" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_2"> Do you accept purchase orders?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_2_2" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_3"> What is the K-12 classNameroom size promise?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_2_3" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_4"> What if my audience does not have a phone or a web-enabled device with internet access?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_2_4" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_5"> How can I share my poll with remote participants?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_2_5" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_6"> How fast do responses show up?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_2_6" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="faq-section ">
                                  <h2 className="faq-title uppercase font-blue">Admin Management</h2>
                                  <div className="panel-group accordion faq-content" id="accordion4">
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#collapse_4_1"> How do I vote or respond to a poll?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_4_1" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#collapse_4_2"> Do you accept purchase orders?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_4_2" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#collapse_4_3"> How many responses per poll (which plan) do I need?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_4_3" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#collapse_4_4"> What if my audience does not have a phone or a web-enabled device with internet access?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_4_4" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <i className="fa fa-circle"></i>
                                                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#collapse_4_5"> How can I share my poll with remote participants?</a>
                                              </h4>
                                          </div>
                                          <div id="collapse_4_5" className="panel-collapse collapse">
                                              <div className="panel-body">
                                                  <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                      eiusmod. </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
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
