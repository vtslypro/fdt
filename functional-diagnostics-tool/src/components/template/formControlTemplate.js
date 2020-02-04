// Form Control template

import React from 'react';
import { Component } from 'react';

export default class FormControlTemplate extends Component {
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
                          <select className="layout-option form-control input-small">
                              <option value="fluid" selected="selected">Fluid</option>
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
              <h3 className="page-title"> Bootstrap Form Controls
                  <small>bootstrap form controls and more</small>
              </h3>
              <div className="page-bar">
                  <ul className="page-breadcrumb">
                      <li>
                          <i className="icon-home"></i>
                          <a href="index.html">Home</a>
                          <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                          <span>Form Stuff</span>
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
              <div className="row">
                  <div className="col-md-6 ">
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption font-red-sunglo">
                                  <i className="icon-settings font-red-sunglo"></i>
                                  <span className="caption-subject bold uppercase"> Default Form</span>
                              </div>
                              <div className="actions">
                                  <div className="btn-group">
                                      <a className="btn btn-sm green dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Actions
                                          <i className="fa fa-angle-down"></i>
                                      </a>
                                      <ul className="dropdown-menu pull-right">
                                          <li>
                                              <a href="javascript:;">
                                                  <i className="fa fa-pencil"></i> Edit </a>
                                          </li>
                                          <li>
                                              <a href="javascript:;">
                                                  <i className="fa fa-trash-o"></i> Delete </a>
                                          </li>
                                          <li>
                                              <a href="javascript:;">
                                                  <i className="fa fa-ban"></i> Ban </a>
                                          </li>
                                          <li className="divider"> </li>
                                          <li>
                                              <a href="javascript:;"> Make admin </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form role="form">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label>Email Address</label>
                                          <div className="input-group">
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                              <input type="text" className="form-control" placeholder="Email Address" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Circle Input</label>
                                          <div className="input-group">
                                              <span className="input-group-addon input-circle-left">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                              <input type="text" className="form-control input-circle-right" placeholder="Email Address" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label for="exampleInputPassword1">Password</label>
                                          <div className="input-group">
                                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                              <span className="input-group-addon">
                                                  <i className="fa fa-user font-red"></i>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Left Icon</label>
                                          <div className="input-icon">
                                              <i className="fa fa-bell-o font-green"></i>
                                              <input type="text" className="form-control" placeholder="Left icon" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Left Icon(.input-sm)</label>
                                          <div className="input-icon input-icon-sm">
                                              <i className="fa fa-bell-o"></i>
                                              <input type="text" className="form-control input-sm" placeholder="Left icon" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Left Icon(.input-lg)</label>
                                          <div className="input-icon input-icon-lg">
                                              <i className="fa fa-bell-o"></i>
                                              <input type="text" className="form-control input-lg" placeholder="Left icon" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Right Icon</label>
                                          <div className="input-icon right">
                                              <i className="fa fa-microphone fa-spin font-blue"></i>
                                              <input type="text" className="form-control" placeholder="Right icon" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Right Icon(.input-sm)</label>
                                          <div className="input-icon input-icon-sm right">
                                              <i className="fa fa-bell-o"></i>
                                              <input type="text" className="form-control input-sm" placeholder="Left icon" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Right Icon(.input-lg)</label>
                                          <div className="input-icon input-icon-lg right">
                                              <i className="fa fa-bell-o font-green"></i>
                                              <input type="text" className="form-control input-lg" placeholder="Left icon" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Circle Input</label>
                                          <div className="input-icon right">
                                              <i className="fa fa-microphone"></i>
                                              <input type="text" className="form-control input-circle" placeholder="Right icon" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Input with Icon</label>
                                          <div className="input-group input-icon right">
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope font-purple"></i>
                                              </span>
                                              <i className="fa fa-exclamation tooltips" data-original-title="Invalid email." data-container="body"></i>
                                              <input id="email" className="input-error form-control" type="text" value="" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Input With Spinner</label>
                                          <input className="form-control spinner" type="text" placeholder="Process something" /> </div>
                                      <div className="form-group">
                                          <label>Static Control</label>
                                          <p className="form-control-static"> email@example.com </p>
                                      </div>
                                      <div className="form-group">
                                          <label>Disabled</label>
                                          <input type="text" className="form-control" placeholder="Disabled" disabled /> </div>
                                      <div className="form-group">
                                          <label>Readonly</label>
                                          <input type="text" className="form-control" placeholder="Readonly" readonly /> </div>
                                      <div className="form-group">
                                          <label>Dropdown</label>
                                          <select className="form-control">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Multiple Select</label>
                                          <select multiple className="form-control">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Textarea</label>
                                          <textarea className="form-control" rows="3"></textarea>
                                      </div>
                                      <div className="form-group">
                                          <label for="exampleInputFile1">File input</label>
                                          <input type="file" id="exampleInputFile1" />
                                          <p className="help-block"> some help text here. </p>
                                      </div>
                                      <div className="form-group">
                                          <label>Checkboxes</label>
                                          <div className="checkbox-list">
                                              <label>
                                                  <input type="checkbox" /> Checkbox 1 </label>
                                              <label>
                                                  <input type="checkbox" /> Checkbox 2 </label>
                                              <label>
                                                  <input type="checkbox" disabled /> Disabled </label>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Inline Checkboxes</label>
                                          <div className="checkbox-list">
                                              <label className="checkbox-inline">
                                                  <input type="checkbox" id="inlineCheckbox1" value="option1" /> Checkbox 1 </label>
                                              <label className="checkbox-inline">
                                                  <input type="checkbox" id="inlineCheckbox2" value="option2" /> Checkbox 2 </label>
                                              <label className="checkbox-inline">
                                                  <input type="checkbox" id="inlineCheckbox3" value="option3" disabled /> Disabled </label>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Radio</label>
                                          <div className="radio-list">
                                              <label>
                                                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked /> Option 1</label>
                                              <label>
                                                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" /> Option 2 </label>
                                              <label>
                                                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled /> Disabled </label>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Inline Radio</label>
                                          <div className="radio-list">
                                              <label className="radio-inline">
                                                  <input type="radio" name="optionsRadios" id="optionsRadios4" value="option1" checked /> Option 1 </label>
                                              <label className="radio-inline">
                                                  <input type="radio" name="optionsRadios" id="optionsRadios5" value="option2" /> Option 2 </label>
                                              <label className="radio-inline">
                                                  <input type="radio" name="optionsRadios" id="optionsRadios6" value="option3" disabled /> Disabled </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-actions">
                                      <button type="submit" className="btn blue">Submit</button>
                                      <button type="button" className="btn default">Cancel</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="icon-social-dribbble font-blue-sharp"></i>
                                  <span className="caption-subject font-blue-sharp bold uppercase">Input Height Sizing</span>
                              </div>
                              <div className="actions">
                                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                      <i className="icon-cloud-upload"></i>
                                  </a>
                                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                      <i className="icon-wrench"></i>
                                  </a>
                                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                      <i className="icon-trash"></i>
                                  </a>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form role="form">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label>Large Input</label>
                                          <input type="text" className="form-control input-lg" placeholder="input-lg" /> </div>
                                      <div className="form-group">
                                          <label>Large Input Group</label>
                                          <div className="input-group input-group-lg">
                                              <span className="input-group-addon" id="sizing-addon1">@</span>
                                              <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Large Input Default Group</label>
                                          <div className="input-group input-group-lg">
                                              <input type="text" className="form-control" placeholder="Search for..." />
                                              <span className="input-group-btn">
                                                  <button className="btn green" type="button">Go!</button>
                                              </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      <div className="form-group">
                                          <label>Default Input</label>
                                          <input type="text" className="form-control" placeholder="" /> </div>
                                      <div className="form-group">
                                          <label>Default Input Group</label>
                                          <div className="input-group">
                                              <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1" />
                                              <span className="input-group-addon" id="sizing-addon1">@</span>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Default Input Button Group</label>
                                          <div className="input-group">
                                              <input type="text" className="form-control" placeholder="Search for..." />
                                              <span className="input-group-btn">
                                                  <button className="btn red" type="button">Go!</button>
                                              </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      <div className="form-group">
                                          <label>Small Input</label>
                                          <input type="text" className="form-control input-sm" placeholder="input-sm" /> </div>
                                      <div className="form-group">
                                          <label>Small Input Group</label>
                                          <div className="input-group input-group-sm">
                                              <span className="input-group-addon" id="sizing-addon1">@</span>
                                              <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1" /> </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Small Input Default Group</label>
                                          <div className="input-group input-group-sm">
                                              <input type="text" className="form-control" placeholder="Search for..." />
                                              <span className="input-group-btn">
                                                  <button className="btn green" type="button">Go!</button>
                                              </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      <div className="form-group">
                                          <label>Large Select</label>
                                          <select className="form-control input-lg">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Default Select</label>
                                          <select className="form-control">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Small Select</label>
                                          <select className="form-control input-sm">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div className="form-actions right">
                                      <button type="button" className="btn default">Cancel</button>
                                      <button type="submit" className="btn green">Submit</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="icon-bubble font-green-sharp"></i>
                                  <span className="caption-subject font-green-sharp bold uppercase">Input Width Sizing</span>
                              </div>
                              <div className="actions">
                                  <div className="btn-group">
                                      <a className="btn green-haze btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                          <i className="fa fa-angle-down"></i>
                                      </a>
                                      <ul className="dropdown-menu pull-right">
                                          <li>
                                              <a href="javascript:;"> Option 1</a>
                                          </li>
                                          <li className="divider"> </li>
                                          <li>
                                              <a href="javascript:;">Option 2</a>
                                          </li>
                                          <li>
                                              <a href="javascript:;">Option 3</a>
                                          </li>
                                          <li>
                                              <a href="javascript:;">Option 4</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form role="form">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label>Fluid Input</label>
                                          <input type="text" className="form-control" placeholder="fluid" />
                                          <div className="input-icon right margin-top-10">
                                              <i className="fa fa-check"></i>
                                              <input type="text" className="form-control" placeholder="fluid" /> </div>
                                          <div className="input-icon margin-top-10">
                                              <i className="fa fa-user"></i>
                                              <input type="text" className="form-control" placeholder="fluid" /> </div>
                                          <div className="input-group margin-top-10">
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                              <input type="email" className="form-control" placeholder=".input-xlarge" /> </div>
                                          <div className="input-group margin-top-10">
                                              <input type="email" className="form-control" placeholder=".input-xlarge" />
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                          </div>
                                          <hr/> </div>
                                      <div className="form-group">
                                          <label>Extra Large Input</label>
                                          <input type="text" className="form-control input-xlarge" placeholder=".input-xlarge" />
                                          <div className="input-icon right input-xlarge margin-top-10">
                                              <i className="fa fa-check"></i>
                                              <input type="text" className="form-control" placeholder=".input-xlarge" /> </div>
                                          <div className="input-icon input-xlarge margin-top-10">
                                              <i className="fa fa-user"></i>
                                              <input type="text" className="form-control" placeholder=".input-xlarge" /> </div>
                                          <div className="input-group input-xlarge margin-top-10">
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                              <input type="email" className="form-control" placeholder=".input-xlarge" /> </div>
                                          <div className="input-group input-xlarge margin-top-10">
                                              <input type="email" className="form-control" placeholder=".input-xlarge" />
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                          </div>
                                          <hr/> </div>
                                      <div className="form-group">
                                          <label>Large Input</label>
                                          <input type="text" className="form-control input-large" placeholder=".input-large"/>
                                          <div className="input-icon right input-large margin-top-10">
                                              <i className="fa fa-check"></i>
                                              <input type="text" className="form-control" placeholder=".input-large"/> </div>
                                          <div className="input-icon input-large margin-top-10">
                                              <i className="fa fa-user"></i>
                                              <input type="text" className="form-control" placeholder=".input-large"/> </div>
                                          <div className="input-group input-large margin-top-10">
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                              <input type="email" className="form-control" placeholder=".input-large"/> </div>
                                          <div className="input-group input-large margin-top-10">
                                              <input type="email" className="form-control" placeholder=".input-large"/>
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                          </div>
                                          <hr/> </div>
                                      <div className="form-group">
                                          <label>Medium Input</label>
                                          <input type="text" className="form-control input-medium" placeholder=".input-medium"/>
                                          <div className="input-icon right input-medium margin-top-10">
                                              <i className="fa fa-check"></i>
                                              <input type="text" className="form-control" placeholder=".input-medium"/> </div>
                                          <div className="input-icon input-medium margin-top-10">
                                              <i className="fa fa-user"></i>
                                              <input type="text" className="form-control" placeholder=".input-medium"/> </div>
                                          <div className="input-group input-medium margin-top-10">
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                              <input type="email" className="form-control" placeholder=".input-medium"/> </div>
                                          <div className="input-group input-medium margin-top-10">
                                              <input type="email" className="form-control" placeholder=".input-medium"/>
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                          </div>
                                          <hr/> </div>
                                      <div className="form-group">
                                          <label>Small Input</label>
                                          <input type="text" className="form-control input-small" placeholder=".input-small"/>
                                          <div className="input-icon right input-small margin-top-10">
                                              <i className="fa fa-check"></i>
                                              <input type="text" className="form-control" placeholder=".input-small"/> </div>
                                          <div className="input-icon input-small margin-top-10">
                                              <i className="fa fa-user"></i>
                                              <input type="text" className="form-control" placeholder=".input-small"/> </div>
                                          <div className="input-group input-small margin-top-10">
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                              <input type="email" className="form-control" placeholder=".input-small"/> </div>
                                          <div className="input-group input-small margin-top-10">
                                              <input type="email" className="form-control" placeholder=".input-small"/>
                                              <span className="input-group-addon">
                                                  <i className="fa fa-envelope"></i>
                                              </span>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label>Extra Small Input</label>
                                          <input type="text" className="form-control input-xsmall" placeholder=".input-xsmall"/> </div>
                                      <div className="form-group">
                                          <label>Extra Large Select</label>
                                          <select className="form-control input-xlarge">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Large Select</label>
                                          <select className="form-control input-large">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Medium Select</label>
                                          <select className="form-control input-medium">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Small Select</label>
                                          <select className="form-control input-small">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                      <div className="form-group">
                                          <label>Extra Small Select</label>
                                          <select className="form-control input-xsmall">
                                              <option>Option 1</option>
                                              <option>Option 2</option>
                                              <option>Option 3</option>
                                              <option>Option 4</option>
                                              <option>Option 5</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div className="form-actions right">
                                      <button type="button" className="btn default">Cancel</button>
                                      <button type="submit" className="btn green">Submit</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                  </div>
                  <div className="col-md-6 ">
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="icon-settings font-dark"></i>
                                  <span className="caption-subject font-dark sbold uppercase">Horizontal Form</span>
                              </div>
                              <div className="actions">
                                  <div className="btn-group btn-group-devided" data-toggle="buttons">
                                      <label className="btn btn-transparent dark btn-outline btn-circle btn-sm active">
                                          <input type="radio" name="options" className="toggle" id="option1"/>Actions</label>
                                      <label className="btn btn-transparent dark btn-outline btn-circle btn-sm">
                                          <input type="radio" name="options" className="toggle" id="option2"/>Settings</label>
                                  </div>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form className="form-horizontal" role="form">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Block Help</label>
                                          <div className="col-md-9">
                                              <input type="text" className="form-control" placeholder="Enter text"/>
                                              <span className="help-block"> A block of help text. </span>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Inline Help</label>
                                          <div className="col-md-9">
                                              <input type="text" className="form-control input-inline input-medium" placeholder="Enter text"/>
                                              <span className="help-inline"> Inline help. </span>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Input Group</label>
                                          <div className="col-md-9">
                                              <div className="input-inline input-medium">
                                                  <div className="input-group">
                                                      <span className="input-group-addon">
                                                          <i className="fa fa-user"></i>
                                                      </span>
                                                      <input type="email" className="form-control" placeholder="Email Address"/> </div>
                                              </div>
                                              <span className="help-inline"> Inline help. </span>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Email Address</label>
                                          <div className="col-md-9">
                                              <div className="input-group">
                                                  <span className="input-group-addon">
                                                      <i className="fa fa-envelope"></i>
                                                  </span>
                                                  <input type="email" className="form-control" placeholder="Email Address"/> </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Password</label>
                                          <div className="col-md-9">
                                              <div className="input-group">
                                                  <input type="password" className="form-control" placeholder="Password"/>
                                                  <span className="input-group-addon">
                                                      <i className="fa fa-user"></i>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Left Icon</label>
                                          <div className="col-md-9">
                                              <div className="input-icon">
                                                  <i className="fa fa-bell-o"></i>
                                                  <input type="text" className="form-control" placeholder="Left icon"/> </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Right Icon</label>
                                          <div className="col-md-9">
                                              <div className="input-icon right">
                                                  <i className="fa fa-microphone"></i>
                                                  <input type="text" className="form-control" placeholder="Right icon"/> </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Icon Input in Group Input</label>
                                          <div className="col-md-9">
                                              <div className="input-group">
                                                  <div className="input-icon">
                                                      <i className="fa fa-lock fa-fw"></i>
                                                      <input id="newpassword" className="form-control" type="text" name="password" placeholder="password" /> </div>
                                                  <span className="input-group-btn">
                                                      <button id="genpassword" className="btn btn-success" type="button">
                                                          <i className="fa fa-arrow-left fa-fw"> </i> Random</button>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Input With Spinner</label>
                                          <div className="col-md-9">
                                              <input type="password" className="form-control spinner" placeholder="Password"/> </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Static Control</label>
                                          <div className="col-md-9">
                                              <p className="form-control-static"> email@example.com </p>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Disabled</label>
                                          <div className="col-md-9">
                                              <input type="password" className="form-control" placeholder="Disabled" disabled/> </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Readonly</label>
                                          <div className="col-md-9">
                                              <input type="password" className="form-control" placeholder="Readonly" readonly/> </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Dropdown</label>
                                          <div className="col-md-9">
                                              <select className="form-control">
                                                  <option>Option 1</option>
                                                  <option>Option 2</option>
                                                  <option>Option 3</option>
                                                  <option>Option 4</option>
                                                  <option>Option 5</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Multiple Select</label>
                                          <div className="col-md-9">
                                              <select multiple className="form-control">
                                                  <option>Option 1</option>
                                                  <option>Option 2</option>
                                                  <option>Option 3</option>
                                                  <option>Option 4</option>
                                                  <option>Option 5</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Textarea</label>
                                          <div className="col-md-9">
                                              <textarea className="form-control" rows="3"></textarea>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label for="exampleInputFile" className="col-md-3 control-label">File input</label>
                                          <div className="col-md-9">
                                              <input type="file" id="exampleInputFile"/>
                                              <p className="help-block"> some help text here. </p>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Checkboxes</label>
                                          <div className="col-md-9">
                                              <div className="checkbox-list">
                                                  <label>
                                                      <input type="checkbox"/> Checkbox 1 </label>
                                                  <label>
                                                      <input type="checkbox"/> Checkbox 1 </label>
                                                  <label>
                                                      <input type="checkbox" disabled/> Disabled </label>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Inline Checkboxes</label>
                                          <div className="col-md-9">
                                              <div className="checkbox-list">
                                                  <label className="checkbox-inline">
                                                      <input type="checkbox" id="inlineCheckbox21" value="option1"/> Checkbox 1 </label>
                                                  <label className="checkbox-inline">
                                                      <input type="checkbox" id="inlineCheckbox22" value="option2"/> Checkbox 2 </label>
                                                  <label className="checkbox-inline">
                                                      <input type="checkbox" id="inlineCheckbox23" value="option3" disabled/> Disabled </label>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Radio</label>
                                          <div className="col-md-9">
                                              <div className="radio-list">
                                                  <label>
                                                      <input type="radio" name="optionsRadios" id="optionsRadios22" value="option1" checked/> Option 1 </label>
                                                  <label>
                                                      <input type="radio" name="optionsRadios" id="optionsRadios23" value="option2" checked/> Option 2 </label>
                                                  <label>
                                                      <input type="radio" name="optionsRadios" id="optionsRadios24" value="option2" disabled/> Disabled </label>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Inline Radio</label>
                                          <div className="col-md-9">
                                              <div className="radio-list">
                                                  <label className="radio-inline">
                                                      <input type="radio" name="optionsRadios" id="optionsRadios25" value="option1" checked/> Option 1 </label>
                                                  <label className="radio-inline">
                                                      <input type="radio" name="optionsRadios" id="optionsRadios26" value="option2" checked/> Option 2 </label>
                                                  <label className="radio-inline">
                                                      <input type="radio" name="optionsRadios" id="optionsRadios27" value="option3" disabled/> Disabled </label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-actions">
                                      <div className="row">
                                          <div className="col-md-offset-3 col-md-9">
                                              <button type="submit" className="btn green">Submit</button>
                                              <button type="button" className="btn default">Cancel</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet box purple ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="fa fa-gift"></i> Horizontal Form Height Sizing </div>
                              <div className="tools">
                                  <a href="" className="collapse"> </a>
                                  <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                  <a href="" className="reload"> </a>
                                  <a href="" className="remove"> </a>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form className="form-horizontal" role="form">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Large Input</label>
                                          <div className="col-md-9">
                                              <input type="text" className="form-control input-lg" placeholder="Large Input"/> </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Default Input</label>
                                          <div className="col-md-9">
                                              <input type="text" className="form-control" placeholder="Default Input"/> </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Small Input</label>
                                          <div className="col-md-9">
                                              <input type="text" className="form-control input-sm" placeholder="Default Input"/> </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Large Select</label>
                                          <div className="col-md-9">
                                              <select className="form-control input-lg">
                                                  <option>Option 1</option>
                                                  <option>Option 2</option>
                                                  <option>Option 3</option>
                                                  <option>Option 4</option>
                                                  <option>Option 5</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Default Select</label>
                                          <div className="col-md-9">
                                              <select className="form-control">
                                                  <option>Option 1</option>
                                                  <option>Option 2</option>
                                                  <option>Option 3</option>
                                                  <option>Option 4</option>
                                                  <option>Option 5</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <label className="col-md-3 control-label">Small Select</label>
                                          <div className="col-md-9">
                                              <select className="form-control input-sm">
                                                  <option>Option 1</option>
                                                  <option>Option 2</option>
                                                  <option>Option 3</option>
                                                  <option>Option 4</option>
                                                  <option>Option 5</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-actions right1">
                                      <button type="button" className="btn default">Cancel</button>
                                      <button type="submit" className="btn green">Submit</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet box purple ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="fa fa-gift"></i> Fluid Input Groups </div>
                              <div className="tools">
                                  <a href="" className="collapse"> </a>
                                  <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                  <a href="" className="reload"> </a>
                                  <a href="" className="remove"> </a>
                              </div>
                          </div>
                          <div className="portlet-body">
                              <h4 className="block">Checkboxe Addons</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <span className="input-group-addon">
                                                  <input type="checkbox"/> </span>
                                              <input type="text" className="form-control"/> </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <input type="text" className="form-control"/>
                                              <span className="input-group-addon">
                                                  <input type="checkbox"/> </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Button Addons</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <span className="input-group-btn">
                                                  <button className="btn red" type="button">Go!</button>
                                              </span>
                                              <input type="text" className="form-control"/> </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <input type="text" className="form-control"/>
                                              <span className="input-group-btn">
                                                  <button className="btn blue" type="button">Go!</button>
                                              </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Button Addons On Both Sides</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="input-group">
                                              <span className="input-group-btn">
                                                  <button className="btn red" type="button">Go!</button>
                                              </span>
                                              <input type="text" className="form-control"/>
                                              <span className="input-group-btn">
                                                  <button className="btn blue" type="button">Go!</button>
                                              </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                              </form>
                              <h4 className="block">Buttons With Dropdowns</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn green dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                              <input type="text" className="form-control"/> </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <input type="text" className="form-control"/>
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu pull-right">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Buttons With Dropdowns On Both Sides</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="input-group">
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn green dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                              <input type="text" className="form-control"/>
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu pull-right">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Segmented Buttons</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn default" tabindex="-1">Action</button>
                                                  <button type="button" className="btn default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu" role="menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              <input type="text" className="form-control"/> </div>
                                          {/* /.input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                      <div className="col-md-6">
                                          <div className="input-group">
                                              <input type="text" className="form-control"/>
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn green" tabindex="-1">Action</button>
                                                  <button type="button" className="btn green dropdown-toggle" data-toggle="dropdown" tabindex="-1">
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu pull-right" role="menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          {/* /.input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet box purple ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="fa fa-gift"></i> Fixed Input Groups </div>
                              <div className="tools">
                                  <a href="" className="collapse"> </a>
                                  <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                  <a href="" className="reload"> </a>
                                  <a href="" className="remove"> </a>
                              </div>
                          </div>
                          <div className="portlet-body">
                              <h4 className="block">Checkboxe Addons</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="input-group input-medium">
                                              <span className="input-group-addon">
                                                  <input type="checkbox"/> </span>
                                              <input type="text" className="form-control" placeholder=".input-medium"/> </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                      <div className="col-md-6">
                                          <div className="input-group input-medium">
                                              <input type="text" className="form-control" placeholder=".input-medium"/>
                                              <span className="input-group-addon">
                                                  <input type="checkbox"/> </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Button Addons</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="input-group input-medium">
                                              <span className="input-group-btn">
                                                  <button className="btn red" type="button">Go!</button>
                                              </span>
                                              <input type="text" className="form-control" placeholder=".input-medium"/> </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                      <div className="col-md-6">
                                          <div className="input-group input-medium">
                                              <input type="text" className="form-control" placeholder=".input-medium"/>
                                              <span className="input-group-btn">
                                                  <button className="btn blue" type="button">Go!</button>
                                              </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Button Addons On Both Sides</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="input-group input-large">
                                              <span className="input-group-btn">
                                                  <button className="btn red" type="button">Go!</button>
                                              </span>
                                              <input type="text" className="form-control" placeholder=".input-large"/>
                                              <span className="input-group-btn">
                                                  <button className="btn blue" type="button">Go!</button>
                                              </span>
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                              </form>
                              <h4 className="block">Buttons With Dropdowns</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="input-group input-medium">
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn green dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                              <input type="text" className="form-control" placeholder=".input-medium"/> </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                      <div className="col-md-6">
                                          <div className="input-group input-medium">
                                              <input type="text" className="form-control" placeholder=".input-medium"/>
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu pull-right">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Buttons With Dropdowns On Both Sides</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="input-group input-xlarge">
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn green dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                              <input type="text" className="form-control" placeholder=".input-xlarge"/>
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn yellow dropdown-toggle" data-toggle="dropdown">Action
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu pull-right">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              {/* /btn-group */}
                                          </div>
                                          {/* /input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                                  {/* /.row */}
                              </form>
                              <h4 className="block">Segmented Buttons</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="input-group input-large">
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn default" tabindex="-1">Action</button>
                                                  <button type="button" className="btn default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu" role="menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                              <input type="text" className="form-control" placeholder=".input-large"/> </div>
                                          {/* /.input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                              </form>
                              <form role="form" className="margin-top-10">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="input-group input-large">
                                              <input type="text" className="form-control" placeholder=".input-large"/>
                                              <div className="input-group-btn">
                                                  <button type="button" className="btn green" tabindex="-1">Action</button>
                                                  <button type="button" className="btn green dropdown-toggle" data-toggle="dropdown" tabindex="-1">
                                                      <i className="fa fa-angle-down"></i>
                                                  </button>
                                                  <ul className="dropdown-menu" role="menu">
                                                      <li>
                                                          <a href="javascript:;"> Action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Another action </a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:;"> Something else here </a>
                                                      </li>
                                                      <li className="divider"> </li>
                                                      <li>
                                                          <a href="javascript:;"> Separated link </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          {/* /.input-group */}
                                      </div>
                                      {/* /.col-md-6 */}
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
                      <div className="portlet box blue ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="fa fa-gift"></i> Validation States </div>
                              <div className="tools">
                                  <a href="" className="collapse"> </a>
                                  <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                  <a href="" className="reload"> </a>
                                  <a href="" className="remove"> </a>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form role="form">
                                  <div className="form-body">
                                      <div className="form-group has-success">
                                          <label className="control-label">Input with success</label>
                                          <input type="text" className="form-control" id="inputSuccess"/> </div>
                                      <div className="form-group has-warning">
                                          <label className="control-label">Input with warning</label>
                                          <input type="text" className="form-control" id="inputWarning"/> </div>
                                      <div className="form-group has-error">
                                          <label className="control-label">Input with error</label>
                                          <input type="text" className="form-control" id="inputError"/> </div>
                                  </div>
                                  <div className="form-actions">
                                      <button type="button" className="btn default">Cancel</button>
                                      <button type="submit" className="btn red">Submit</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="portlet box yellow ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="fa fa-gift"></i> Validation States With Icons </div>
                              <div className="tools">
                                  <a href="" className="collapse"> </a>
                                  <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                  <a href="" className="reload"> </a>
                                  <a href="" className="remove"> </a>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form role="form">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label className="control-label">Default input</label>
                                          <div className="input-icon right">
                                              <i className="fa fa-info-circle tooltips" data-original-title="Email address" data-container="body"></i>
                                              <input type="text" className="form-control"/> </div>
                                      </div>
                                      <div className="form-group has-success">
                                          <label className="control-label">Input with success</label>
                                          <div className="input-icon right">
                                              <i className="fa fa-check tooltips" data-original-title="You look OK!" data-container="body"></i>
                                              <input type="text" className="form-control"/> </div>
                                      </div>
                                      <div className="form-group has-warning">
                                          <label className="control-label">Input with warning</label>
                                          <div className="input-icon right">
                                              <i className="fa fa-warning tooltips" data-original-title="please provide an email" data-container="body"></i>
                                              <input type="text" className="form-control"/> </div>
                                      </div>
                                      <div className="form-group has-error">
                                          <label className="control-label">Input with error</label>
                                          <div className="input-icon right">
                                              <i className="fa fa-exclamation tooltips" data-original-title="please write a valid email" data-container="body"></i>
                                              <input type="text" className="form-control"/> </div>
                                      </div>
                                  </div>
                                  <div className="form-actions right">
                                      <button type="button" className="btn default">Cancel</button>
                                      <button type="submit" className="btn green">Submit</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="portlet box purple">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="fa fa-gift"></i> Horizontal Form Validation States </div>
                              <div className="tools">
                                  <a href="" className="collapse"> </a>
                                  <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                  <a href="" className="reload"> </a>
                                  <a href="" className="remove"> </a>
                              </div>
                          </div>
                          <div className="portlet-body form">
                              <form role="form" className="form-horizontal">
                                  <div className="form-body">
                                      <div className="form-group">
                                          <label className="col-md-4 control-label">Default input</label>
                                          <div className="col-md-8">
                                              <div className="input-icon right">
                                                  <i className="fa fa-info-circle tooltips" data-original-title="Email address" data-container="body"></i>
                                                  <input type="text" className="form-control"/> </div>
                                          </div>
                                      </div>
                                      <div className="form-group has-success">
                                          <label className="col-md-4 control-label">Input with success</label>
                                          <div className="col-md-8">
                                              <div className="input-icon right">
                                                  <i className="fa fa-check tooltips" data-original-title="You look OK!" data-container="body"></i>
                                                  <input type="text" className="form-control"/> </div>
                                          </div>
                                      </div>
                                      <div className="form-group has-warning">
                                          <label className="col-md-4 control-label">Input with warning</label>
                                          <div className="col-md-8">
                                              <div className="input-icon right">
                                                  <i className="fa fa-warning tooltips" data-original-title="please provide an email" data-container="body"></i>
                                                  <input type="text" className="form-control"/> </div>
                                          </div>
                                      </div>
                                      <div className="form-group has-error">
                                          <label className="col-md-4 control-label">Input with error</label>
                                          <div className="col-md-8">
                                              <div className="input-icon right">
                                                  <i className="fa fa-exclamation tooltips" data-original-title="please write a valid email" data-container="body"></i>
                                                  <input type="text" className="form-control"/> </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-actions">
                                      <div className="row">
                                          <div className="col-md-offset-4 col-md-8">
                                              <button type="button" className="btn default">Cancel</button>
                                              <button type="submit" className="btn blue">Submit</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row ">
                  <div className="col-md-12">
                      {/* BEGIN SAMPLE FORM PORTLET*/}
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <i className="icon-share font-dark"></i>
                                  <span className="caption-subject font-dark bold uppercase">More Form Samples</span>
                              </div>
                              <div className="actions">
                                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                      <i className="icon-cloud-upload"></i>
                                  </a>
                                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                      <i className="icon-wrench"></i>
                                  </a>
                                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                      <i className="icon-trash"></i>
                                  </a>
                              </div>
                          </div>
                          <div className="portlet-body">
                              <h4>Inline Form</h4>
                              <form className="form-inline" role="form">
                                  <div className="form-group">
                                      <label className="sr-only" for="exampleInputEmail2">Email address</label>
                                      <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email"/> </div>
                                  <div className="form-group">
                                      <label className="sr-only" for="exampleInputPassword2">Password</label>
                                      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/> </div>
                                  <div className="checkbox">
                                      <label>
                                          <input type="checkbox"/> Remember me </label>
                                  </div>
                                  <button type="submit" className="btn btn-default">Sign in</button>
                              </form>
                              <hr/>
                              <h4>Inline Form With Icons</h4>
                              <form className="form-inline" role="form">
                                  <div className="form-group">
                                      <label className="sr-only" for="exampleInputEmail22">Email address</label>
                                      <div className="input-icon">
                                          <i className="fa fa-envelope"></i>
                                          <input type="email" className="form-control" id="exampleInputEmail22" placeholder="Enter email"/> </div>
                                  </div>
                                  <div className="form-group">
                                      <label className="sr-only" for="exampleInputPassword42">Password</label>
                                      <div className="input-icon">
                                          <i className="fa fa-user"></i>
                                          <input type="password" className="form-control" id="exampleInputPassword42" placeholder="Password"/> </div>
                                  </div>
                                  <div className="checkbox">
                                      <label>
                                          <input type="checkbox"/> Remember me </label>
                                  </div>
                                  <button type="submit" className="btn btn-default">Sign in</button>
                              </form>
                              <hr/>
                              <h4>Horizontal Form</h4>
                              <form className="form-horizontal" role="form">
                                  <div className="form-group">
                                      <label for="inputEmail1" className="col-md-2 control-label">Email</label>
                                      <div className="col-md-4">
                                          <input type="email" className="form-control" id="inputEmail1" placeholder="Email"/> </div>
                                  </div>
                                  <div className="form-group">
                                      <label for="inputPassword12" className="col-md-2 control-label">Password</label>
                                      <div className="col-md-4">
                                          <input type="password" className="form-control" id="inputPassword12" placeholder="Password"/> </div>
                                  </div>
                                  <div className="form-group">
                                      <div className="col-md-offset-2 col-md-4">
                                          <div className="checkbox">
                                              <label>
                                                  <input type="checkbox"/> Remember me </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <div className="col-md-offset-2 col-md-10">
                                          <button type="submit" className="btn blue">Sign in</button>
                                      </div>
                                  </div>
                              </form>
                              <hr/>
                              <h4>Horizontal Form With Icons</h4>
                              <form className="form-horizontal" role="form">
                                  <div className="form-group">
                                      <label for="inputEmail12" className="col-md-2 control-label">Email</label>
                                      <div className="col-md-4">
                                          <div className="input-icon">
                                              <i className="fa fa-envelope"></i>
                                              <input type="email" className="form-control" id="inputEmail12" placeholder="Email"/> </div>
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <label for="inputPassword1" className="col-md-2 control-label">Password</label>
                                      <div className="col-md-4">
                                          <div className="input-icon right">
                                              <i className="fa fa-user"></i>
                                              <input type="password" className="form-control" id="inputPassword1" placeholder="Password"/> </div>
                                          <div className="help-block"> with right aligned icon </div>
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <div className="col-md-offset-2 col-md-4">
                                          <div className="checkbox">
                                              <label>
                                                  <input type="checkbox"/> Remember me </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <div className="col-md-offset-2 col-md-10">
                                          <button type="submit" className="btn green">Sign in</button>
                                      </div>
                                  </div>
                              </form>
                              <hr/>
                              <h4>Column Sizing</h4>
                              <form role="form">
                                  <div className="row">
                                      <div className="col-md-2">
                                          <input type="text" className="form-control" placeholder=".col-md-2"/> </div>
                                      <div className="col-md-3">
                                          <input type="text" className="form-control" placeholder=".col-md-3"/> </div>
                                      <div className="col-md-4">
                                          <input type="text" className="form-control" placeholder=".col-md-4"/> </div>
                                      <div className="col-md-3">
                                          <input type="text" className="form-control" placeholder=".col-md-2"/> </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      {/* END SAMPLE FORM PORTLET*/}
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
