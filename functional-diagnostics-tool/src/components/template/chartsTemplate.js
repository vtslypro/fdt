// Charts Template
import React from 'react';
import { Component } from 'react';

export default class ChartsTemplate extends Component {
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
              <h3 className="page-title"> amChart
                  <small>charting library & maps. Where all data goes visual</small>
              </h3>
              <div className="page-bar">
                  <ul className="page-breadcrumb">
                      <li>
                          <i className="icon-home"></i>
                          <a href="index.html">Home</a>
                          <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                          <span>Charts</span>
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
              <div className="m-heading-1 border-green m-bordered">
                  <p> You can download and use all amCharts products for free. The only limitation of the free version is that a small link to this web site will be displayed in the top left corner of your charts. If you would like to use charts without
                      this link, or you appreciate the software and would like to support its creators,
                      <a href="http://www.amcharts.com/online-store/" target="_blank"> please purchase a commercial license</a>
                  </p>
                  <p>
                      <span className="label label-success">Exclusively for Metronic users:</span>
                      <br/> After purchasing Metronic you will get a promo code for
                      <span className="label label-danger">15% DISCOUNT</span> for commercial license of amChart. To find the promo code please check the readme.txt file in the Metronic's purchased package. </p>
                  <p> For more info please chech the plugin's official
                      <a className="btn red btn-outline" href="http://www.amcharts.com/demos/" target="_blank">demos & documentation</a>
                  </p>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light bordered">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Bar Charts</span>
                                          <span className="caption-helper">column and line mix</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_1" className="chart" style="height: 500px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Line & Area</span>
                                          <span className="caption-helper">duration on value axis</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_2" className="chart" style="height: 400px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Line & Area</span>
                                          <span className="caption-helper">with changing color</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_3" className="chart" style="height: 400px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Bar & Line</span>
                                          <span className="caption-helper">bar and line chart mix</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_4" className="chart" style="height: 400px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> 3D Chart</span>
                                          <span className="caption-helper">3d cylinder chart</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_5" className="chart" style="height: 400px;"> </div>
                                      <div className="well margin-top-20">
                                          <div className="row">
                                              <div className="col-sm-3">
                                                  <label className="text-left">Top Radius:</label>
                                                  <input className="chart_5_chart_input" data-property="topRadius" type="range" min="0" max="1.5" value="1" step="0.01" /> </div>
                                              <div className="col-sm-3">
                                                  <label className="text-left">Angle:</label>
                                                  <input className="chart_5_chart_input" data-property="angle" type="range" min="0" max="89" value="30" step="1" /> </div>
                                              <div className="col-sm-3">
                                                  <label className="text-left">Depth:</label>
                                                  <input className="chart_5_chart_input" data-property="depth3D" type="range" min="1" max="120" value="40" step="1" /> </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-6">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Simple Pie Chart</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_6" className="chart" style="height: 525px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                          <div className="col-md-6">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> 3D Pie Chart</span>
                                          <span className="caption-helper">bar and line chart mix</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_7" className="chart" style="height: 400px;"> </div>
                                      <div className="well margin-top-20">
                                          <div className="row">
                                              <div className="col-sm-3">
                                                  <label className="text-left">Top Radius:</label>
                                                  <input className="chart_7_chart_input" data-property="topRadius" type="range" min="0" max="1.5" value="1" step="0.01" /> </div>
                                              <div className="col-sm-3">
                                                  <label className="text-left">Angle:</label>
                                                  <input className="chart_7_chart_input" data-property="angle" type="range" min="0" max="89" value="30" step="1" /> </div>
                                              <div className="col-sm-3">
                                                  <label className="text-left">Depth:</label>
                                                  <input className="chart_7_chart_input" data-property="depth3D" type="range" min="1" max="120" value="40" step="1" /> </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-6">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Polar Chart</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_8" className="chart" style="height: 400px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                          <div className="col-md-6">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Radar Chart</span>
                                          <span className="caption-helper">bar and line chart mix</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_9" className="chart" style="height: 400px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Map with Bubbles</span>
                                          <span className="caption-helper">world population</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_10" className="chart" style="height: 600px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Flight Routes Map</span>
                                          <span className="caption-helper">interactive flight routes map</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_11" className="chart" style="height: 500px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                      {/* BEGIN ROW */}
                      <div className="row">
                          <div className="col-md-12">
                              {/* BEGIN CHART PORTLET*/}
                              <div className="portlet light ">
                                  <div className="portlet-title">
                                      <div className="caption">
                                          <i className="icon-bar-chart font-green-haze"></i>
                                          <span className="caption-subject bold uppercase font-green-haze"> Stock Charts</span>
                                          <span className="caption-helper">with stock events</span>
                                      </div>
                                      <div className="tools">
                                          <a href="javascript:;" className="collapse"> </a>
                                          <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                          <a href="javascript:;" className="reload"> </a>
                                          <a href="javascript:;" className="fullscreen"> </a>
                                          <a href="javascript:;" className="remove"> </a>
                                      </div>
                                  </div>
                                  <div className="portlet-body">
                                      <div id="chart_12" className="chart" style="height: 500px;"> </div>
                                  </div>
                              </div>
                              {/* END CHART PORTLET*/}
                          </div>
                      </div>
                      {/* END ROW */}
                  </div>
              </div>
          </div>
          {/* END CONTENT BODY */}
      </div>
      {/* END CONTENT */}

      {/*  BEGIN PAGE LEVEL PLUGINS */}
      <script src="../assets/global/plugins/amcharts/amcharts/amcharts.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/amcharts/serial.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/amcharts/pie.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/amcharts/radar.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/amcharts/themes/light.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/amcharts/themes/patterns.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/amcharts/themes/chalk.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/ammap/ammap.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/ammap/maps/js/worldLow.js" type="text/javascript"></script>
      <script src="../assets/global/plugins/amcharts/amstockcharts/amstock.js" type="text/javascript"></script>
      {/*  END PAGE LEVEL PLUGINS */}
      {/*  BEGIN PAGE LEVEL SCRIPTS */}
      <script src="../assets/pages/scripts/charts-amcharts.min.js" type="text/javascript"></script>
      {/*  END PAGE LEVEL SCRIPTS */}

      </div>
      );
      }
      }
