/**
* Name: FDT
* Description: Functional Diagnostic Tool
*
*/

// Import basic React library
import React from 'react';
import { Component } from 'react';

// React-router
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Ajax method which send POST request to Rover AppCast server
import { fetchAppCast } from '../../../actions/index';
import { fetchConsumableUnit } from '../../../actions/consumableUnit';

// Import utility
import AceEditor from '../util/aceEditor';
import Toastr from '../util/toastr';
import UtilFunc from '../util/utilFunc';

// Json2table library
import json2table from './json2table';

// react-clipboard library
import Clipboard from 'react-clipboard.js';

// SHA 256 library
import CryptoJS from "crypto-js";

import getServerList from './getServerList';
import getTabAssets from './getTabAssets';
import getTabAdminPrefs from './getTabAdminPrefs';
import getTabEntitlement from './getTabEntitlement';
import getTabEntities from './getTabEntities';
import getTabStatusTrace from './getTabStatusTrace';
import getTabSummary from './getTabSummary';

import $ from 'jquery';

class FDT extends Component {
  /* Constructor */
  constructor(props) {
    super(props);

    this.onHandleFile = this.onHandleFile.bind(this)
    this.onPreviewChange = this.onPreviewChange.bind(this)
    this.onSendRequest = this.onSendRequest.bind(this)
    this.onClear = this.onClear.bind(this)

    this.state = {
      fileContent: '',
      lastClientState: '',
      clientVersion: '',
      responseData : '',
      upiData : '',
      formattedTable: '',
      filePath: '',
      upi1Data: null,
      upi2Data: null,
      loadUPI : false,
      loadUPI2 : false,
      validClientState : false,
      // Button State
      preview: false,
      tracerType: 'debug',
      showResults: false,
      customEndpoint: false,
      uploadLogFile : true,
    };
  }
  componentDidMount(){
      $('#pageContent').css('min-height', $(window).height());

      $('html').append( "<div class='modal-backdrop fade in'></div>" );
      $('.modal-backdrop').hide();
      $('#loginForm').on ('click', function (e) {
        if($('#loginDiv:hover').length == 0){
          $('.modal-backdrop').hide();
          $('#loginForm').hide();
          e.preventDefault()
        }
      });

      $('.portlet-clickable').css( 'cursor', 'pointer' ).on('click', function (e) {
        if($('.tools > a:hover').length == 0){
          $(this).next().slideToggle(200);
          var className = $(this).find("div a").attr('class');
          if(className === 'collapse')
            $(this).find("div a").attr('class', 'expand');
          else
            $(this).find("div a").attr('class', 'collapse');
        }
      });

      $('.portlet-clickable').bind("mouseenter", function(){
        $(this).each(function() {
          var darkenPercent = 15; // darken color by 15 percent
          var rgb = $(this).css('background-color');
          rgb = rgb.replace('rgb(', '').replace(')', '').split(',');
          var red = $.trim(rgb[0]);
          var green = $.trim(rgb[1]);
          var blue = $.trim(rgb[2]);

          red = parseInt(red - darkenPercent);
          green = parseInt(green - darkenPercent);
          blue = parseInt(blue - darkenPercent);

          rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

          $(this).css('background-color', rgb);
        });
      });

      $('.portlet-clickable').bind("mouseleave", function(){
        $(this).each(function() {
          var darkenPercent = 15; // darken color by 15 percent
          var rgb = $(this).css('background-color');
          rgb = rgb.replace('rgb(', '').replace(')', '').split(',');
          var red = $.trim(rgb[0]);
          var green = $.trim(rgb[1]);
          var blue = $.trim(rgb[2]);

          red = parseInt(red) + parseInt(darkenPercent);
          green = parseInt(green) + parseInt(darkenPercent);
          blue = parseInt(blue) + parseInt(darkenPercent);

          rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

          $(this).css('background-color', rgb);
        });
      });

      // Clear Button
      $('#btn_clear').on ('click', function (e) {
        $('#logFileInput').wrap('<form>').parent('form').trigger('reset'),
        $('#logFileInput').unwrap(),
        e.preventDefault()
      });

      $('#div_advancedSettings').hide();
      $('#div_forTesting').hide();
      $('#btn_submit').click(function() {
        if(!$('body').hasClass('page-sidebar-closed'))
          $('.menu-toggler').click();
        UtilFunc.blockUI({
          target: '#mainPageContent',
          animate: true
        });
      });
      // $('#btn_submit').click(function() {
      //   $('.modal-backdrop').show();
      //   $('#loginForm').addClass('in');
      //   $('#loginForm').show();
      // });

      $('.contact-form').hide();
      /*  For contact Rover form
      $('#contact-Rover').click(function() {
            $('.login-form').hide();
            $('.contact-form').show();
        });

      $('#back-btn').click(function() {
            $('.login-form').show();
            $('.contact-form').hide();
        });
      */
  }
  componentWillReceiveProps(nextProps){
    // console.log("componentWillReceiveProps - nextProps");
    // console.log(nextProps);

    UtilFunc.unblockUI('#mainPageContent');
    if (nextProps.fdtError && nextProps.status == 401){
      $('#loginForm').addClass('in');
      $('#loginForm').show();
      $('.modal-backdrop').show();
      return;
    } else if (nextProps.status != undefined && nextProps.status != 200){
      Toastr.generateNotification('Error', 'Http ' + nextProps.status + ' - ' + nextProps.statusText, "toast-top-center", 'error');
      return;
    }

    if(this.state.lastClientState && nextProps.responseData && nextProps.responseData.length != 0){
      this.setState({
        responseData: JSON.stringify(nextProps.responseData, null, 4),
        showResults: true
      },  function() {

        // Create Editor and load data
        AceEditor.createEditor('raw_clientState','chrome',this.state.lastClientState);
        AceEditor.createEditor('raw_appcast','cobalt',this.state.responseData);

        $('.td_head').nextAll('table').find('.td_head').nextAll('table').hide();
        $('.td_head').click(function(){
          $(this).nextAll('table').fadeToggle()
        });

      });

      if(!this.state.loadUPI){
        this.setState({
          loadUPI: true
        });
        var upi1s = [];
        if (nextProps.responseData.appcast.updates.productUpdates > 0) {
            nextProps.responseData.appcast.updates.productUpdates.map(function(update) {
            upi1s.push(update.upi)
          });
        }
        //this.ajaxConsumableUnit(upi1s, null);
      }

      if(!this.state.loadUPI2){
        this.setState({
          loadUPI2: true
        });
        var upi2s = [];
        if (nextProps.responseData.appcast.updates.productUpdates2 > 0) {
          nextProps.responseData.appcast.updates.productUpdates2.map(function(update) {
            upi2s.push(update.upi2)
          });
        }
        //this.ajaxConsumableUnit(null, upi2s);
      }
    }
  }
  /* Button listeners */
  onSendRequest() {
    // Exception handling (Invalid log file, empty log file)
    if(this.state.uploadLogFile){
      if(this.state.filePath == ''){
        UtilFunc.unblockUI('#mainPageContent');
        Toastr.generateNotification('Invalid Input', 'Please upload a valid log file.', "toast-top-center", 'error');
        return;
      }
      else if(!this.state.validClientState){
        UtilFunc.unblockUI('#mainPageContent');
        Toastr.generateNotification('Invalid Input', 'Please upload a valid log file.', "toast-top-center", 'error');
        return;
      }
    }
    else{
      if(document.getElementById('textarea_ClientState').value == ''){
        UtilFunc.unblockUI('#mainPageContent');
        Toastr.generateNotification('Invalid Input', 'Please paste a valid client state in the text area.', "toast-top-center", 'error');
        return;
      }
    }

    var serverUrl;
    if(this.state.customEndpoint){
      serverUrl = document.getElementById('customEndpointURL').value;
    }
    else {
      var e = document.getElementById('serverDropdownList');
      serverUrl = e.options[e.selectedIndex].text;
    }

    var clientState;
    if(!this.state.uploadLogFile){
      var clientState = document.getElementById('textarea_ClientState').value;
      if(UtilFunc.utilIsValidJsonString(clientState)){
        console.log("It is a valid JSON string!");
        this.setState({
          lastClientState: clientState
        });
      }
      else {
        console.log("It is NOT a valid JSON string!");
        Toastr.generateNotification('Invalid Input', 'The input is not a valid JSON string!', "toast-top-center", 'error');
        UtilFunc.unblockUI('#mainPageContent');
        return;
      }
    }
    else {
      clientState = this.state.lastClientState;
    }
    $('#loginForm').hide();
    //$('#loginForm').removeClass('in');
    //$('.modal-backdrop').removeClass('in');
    $('.modal-backdrop').hide();
    var credentials = $('#fdt_username').val() + ':' + $('#fdt_password').val();
    //console.log(credentials);
    this.props.fetchAppCast(clientState, this.state.tracerType, serverUrl, credentials);

  }
  onUploadLogFileChange(e) {
    var fileUpload = true;
    if(e.currentTarget.value == "false")
    fileUpload = false;
    this.setState({
      uploadLogFile: fileUpload,
      showResults: false
    });
  }
  onForTesting(e) {
    if( btn_forTesting.className == "btn blue btn-outline"){
      btn_forTesting.className += " active";
        $('#div_forTesting').slideDown();
    }
    else{
      btn_forTesting.className = "btn blue btn-outline";
      btn_forTesting.blur();
        $('#div_forTesting').slideUp();
    }
  }
  onAdvancedSetting(e) {
    if( btn_advancedSetting.className == "btn red btn-outline"){
      btn_advancedSetting.className += " active";
        $('#div_advancedSettings').slideDown();
    }
    else{
      btn_advancedSetting.className = "btn red btn-outline";
      btn_advancedSetting.blur();
        $('#div_advancedSettings').slideUp();
    }
  }
  onPreviewChange(e) {
    var enable = false;
    if(e.currentTarget.value == "true")
      enable = true;
    this.setState({
      preview: enable
    });
  }
  onTracerChange(e) {
    this.setState({
      tracerType: e.currentTarget.value
    });
  }
  onCustomEndpointChange(e) {
    var enable = false;
    if(e.currentTarget.value == "true")
    enable = true;
    this.setState({
      customEndpoint: enable
    });
  }
  onClear() {
    $('#textarea_ClientState').val('');

    this.setState({
      filePath: '',
      showResults: false
    });
  }
  onExpand(tableName){
      $('#' + tableName +' table').show();
  }
  onCollapse(tableName){;
      $('#' + tableName +' table').hide();
  }
  onExpandEditor(editorName){
    AceEditor.onExpandEditor(editorName);
  }
  onCollapseEditor(editorName){
    AceEditor.onCollapseEditor(editorName);
  }
  onViewXML(dataName){
    if(dataName == 'appcast'){
      UtilFunc.showXML(JSON.parse(this.state.responseData));
    }
    else if(dataName == 'clientState'){
      UtilFunc.showXML(JSON.parse(this.state.lastClientState));
    }
  }
  onViewTable(dataName){
    if(dataName == 'appcast'){
      var tableContent = new json2table({}).buildTable(JSON.parse(this.state.responseData)).innerHTML;
      UtilFunc.createNewWindowWithTable(tableContent);
    }
    else if(dataName == 'clientState'){
      var tableContent = new json2table({}).buildTable(JSON.parse(this.state.lastClientState)).innerHTML;
      UtilFunc.createNewWindowWithTable(tableContent);
    }
  }
  // Not completed Yet
  onViewEditor(dataName){
    // var w = window.open();
    // var html = $("#raw_appcast").html();
    // $(w.document.body).html(html);

    var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=600, top="+(screen.height-400)+", left="+(screen.width-840));

    if(dataName == 'appcast'){
      win.document.body.innerHTML = "<div id='raw_appcast_newWin' style={{width: 500 + 'px', height: 600 + 'px', marginTop: 0 + 'px'}}></div>";
      var appcast_elem = win.document.getElementById('raw_appcast_newWin');
      var editor_appcast = ace.edit(appcast_elem);

      editor_appcast.getSession().setWrapLimitRange(15, 250);
      editor_appcast.getSession().setMode('ace/mode/json');
      editor_appcast.getSession().setUseWrapMode(true);
      editor_appcast.setValue(this.state.responseData);
      editor_appcast.setTheme('ace/theme/chrome');
      editor_appcast.setShowPrintMargin(false);

      editor_appcast.getSession().foldAll(2, editor_appcast.getSession().getDocument().getLength());
      editor_appcast.setReadOnly(true);
      editor_appcast.clearSelection();
      editor_appcast.setOptions({
        minLines: 30
      });

    }
    else if(dataName == 'clientState'){
      var a = new json2table({}).buildTable(JSON.parse(this.state.lastClientState)).innerHTML;
      win.document.body.innerHTML = "<link href='http://rover.ecs.ads.autodesk.com/fdt/css/json2table.css' rel='stylesheet' /><Table>" + a + "</Table>";
    }
  }
  /* File upload listener
  * It will be called when a new file is loaded
  */
  onHandleFile(e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];
    var filePath = document.getElementById('logFileInput').value;
    $('#logFileInput').val('');
    var fileName = /[^\\]*$/.exec(filePath)[0];

    if(this.state.showResults){
      this.setState({
        showResults: false
      })
    }

    this.setState({
      filePath: fileName
    })

    reader.onload = (upload) => {
      //console.log(upload.target.result);  // For debuging
      var fileContent = upload.target.result;

      // Regex of extracting Client state
      var clientState = fileContent.match(/[^Client state]*Client state:\s*([^\n\r]*)/g);

      var clientVersion = fileContent.match(/"clientVersion" : "([^"]*)/g);

      try {
        clientState = JSON.stringify(JSON.parse(clientState[clientState.length - 1].substring(15)), null, 4);
      }
      catch(err) {
        Toastr.generateNotification('Invalid File Input', 'The input is not a valid log file. Please re-upload a valid log file.', "toast-top-center", 'error');

        console.log(err);
        this.setState({
          validClientState: false
        });
        return;
      }

      this.setState({
        fileContent: fileContent,
        lastClientState: clientState,   // Retreive the last Client state
        clientVersion: clientVersion[clientVersion.length - 1].substring(19),
        validClientState: true
      });
    }
    reader.readAsText(file);
  }
  renderResponseData() {
    if (this.props.responseData.appcast)
      return JSON.stringify(this.props.responseData, null, 4);
    else
      return '';
  }
  getServerList() {
    return getServerList.getContent(this.state.customEndpoint, this.state.preview);
  }
  getClientStateUpload() {
    if (this.state.uploadLogFile){
      return (
        <div className="form-group">
          <label className="control-label col-md-3">Log file upload</label>
          <div className="col-md-3">
            <div className="fileinput fileinput-new" data-provides="fileinput">
              <div className="input-group input-large">
                <div className="form-control uneditable-input input-fixed input-medium" data-trigger="fileinput">
                  <i className="fa fa-file fileinput-exists"></i>&nbsp;
                    <span className="fileinput-filename" id="filePath">{this.state.filePath}</span>
                  </div>
                  <span className="input-group-addon btn default btn-file">
                    <span className="fileinput-new"> Select file </span>
                    <span className="fileinput-exists"> Change </span>
                    <input type="file" onChange={this.onHandleFile} id="logFileInput" name="..."/> </span>
                    <a href="javascript:;" className="input-group-addon btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>
                  </div>
                  <span className="help-block"> Please upload the log file. </span>
                  <a href="https://knowledge.autodesk.com/community/article/14326" target="_blank"> How to enable logging? </a>
                </div>
              </div>
            </div>
          );
        }
        else{
          return(
            <div className="form-group">
              <label className="col-md-3 control-label">Client State</label>
              <div className="col-md-4">
                <textarea className="form-control" rows="6" id="textarea_ClientState"></textarea>
              </div>
            </div>
          );
        }
      }
  getTabSummary() {
    return getTabSummary.getContent(this.state, this.props.responseData);
  }
  getFormattedClientStateTable() {
    if (this.state.lastClientState){
      var a = new json2table({}).buildTable(JSON.parse(this.state.lastClientState)).innerHTML;
      return (
        <table id='clientStateTable' dangerouslySetInnerHTML={{__html: a}}></table>
      );
    }
    else
    return '';
  }
  getFormattedAppcastTable() {
    if (this.props.responseData){
      var a = new json2table({}).buildTable(this.props.responseData.appcast).innerHTML;
      return (
        <table id='appcastTable' dangerouslySetInnerHTML={{__html: a}}></table>
      );
    }
    else
    return '';
  }
  getTabStatusTrace() {
    return getTabStatusTrace.getContent(this.props.responseData);
  }
  getTabAssets() {
    if (this.props.responseData)
        return getTabAssets.getContent(this.props.responseData.appcast, this.props.upiData);
    else return '';
  }
  getTabEntities() {
    return getTabEntities.getContent(this.props.responseData);
  }
  getTabAdminPrefs() {
    return getTabAdminPrefs.getContent(this.props.responseData);
  }
  getTabEntitlement() {
    return getTabEntitlement.getContent(this.props.responseData);
  }
  render() {
    var thisState = this.state;
    return (
      <div>
        {/* BEGIN Hidden Testing Div UtilFunc.printObj(this.state) */}
        <div className="hidden" id="StateTesting">
              {
                (
                  Object.keys(this.state).map(function (key, i) {
                    var value = thisState[key];
                    return (
                      <p key={i} id={ 'test_' + key}>{(typeof(value) === "boolean")?
                                    (value === true) ? "true" : "false"
                                    :value}
                      </p>
                    )
                  })
                )
              }
        </div>
        {/* End Hidden Testing Div */}
        {/* BEGIN CONTENT */}
        <div className="page-content-wrapper">
          {/* BEGIN CONTENT BODY */}
          <div className="page-content" id="pageContent">
            {/* BEGIN PAGE HEADER*/}
            <h3 className="page-title">
              <strong>Functional Diagnostic Tool</strong>
            </h3>
            {/* END PAGE HEADER*/}

            {/*
            <div className="note note-info">
              <p> If you have any questions, please contact Delivery team.</p>
            </div>
            */}

            <div className="row" id="mainPageContent">
              <div className="col-md-12 ">
                <div className="portlet light ">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="icon-equalizer font-red-sunglo"></i>
                      <span className="caption-subject font-red-sunglo bold uppercase">Input</span>
                    </div>
                    {/*
                      <div className="actions">
                      <button type="button" className="btn blue btn-outline" id="btn_forTesting" data-toggle="" onClick={this.onForTesting}> For Testing Only </button>
                      </div>
                      */}
                    </div>
                    <div className="portlet-body form" id="input-form">
                      {/* BEGIN FORM */}
                      <form action="#" className="form-horizontal form-bordered">
                        {/* BEGIN Form Body */}
                        <div className="form-body">

                          <div className="form-group">
                            <label className="col-md-3 control-label">Client State format</label>
                            <div className="col-md-4 radio-list">
                              <label className="radio-inline" style={{marginLeft: 25 + 'px'}}>
                                <input type="radio" name="clientStateFormatRadio" id="clientStateFormatFile" value="true" onChange={event => this.onUploadLogFileChange(event)} checked={this.state.uploadLogFile} /> File
                              </label>
                              <label className="radio-inline">
                                <input type="radio" name="clientStateFormatRadio" id="clientStateFormatText" value="false" onChange={event => this.onUploadLogFileChange(event)} checked={!this.state.uploadLogFile} /> Text
                              </label>
                            </div>
                          </div>

                              {this.getClientStateUpload()}

                          <div className="form-group">
                            <label className="col-md-3 control-label">Advanced Settings</label>
                            <div className="col-md-4 actions">
                              <button type="button" className="btn red btn-outline" id="btn_advancedSetting" data-toggle="" onClick={this.onAdvancedSetting}> Advanced Settings </button>
                            </div>
                          </div>
                          {/* BEGIN Advanced Settings */}
                          <div id="div_advancedSettings">

                            <div className="form-group">
                              <label className="col-md-3 control-label">Tracer Type</label>
                              <div className="col-md-4 radio-list">
                                <label className="radio-inline" style={{marginLeft: 25 + 'px'}}>
                                  <input type="radio" name="tracerTypeRadios" id="traceRadio" value="trace" onChange={event => this.onTracerChange(event)} checked={this.state.tracerType == 'trace'}/> Trace
                                </label>
                                <label className="radio-inline">
                                  <input type="radio" name="tracerTypeRadios" id="debugRadio" value="debug" onChange={event => this.onTracerChange(event)} checked={this.state.tracerType == 'debug'} /> Debug
                                </label>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="col-md-3 control-label">Preview Mode</label>
                              <div className="col-md-4 radio-list">
                                <label className="radio-inline" style={{marginLeft: 25 + 'px'}}>
                                  <input type="radio" name="previewModeRadios" id="previewEnableRadio" value="true" disabled={this.state.customEndpoint} onChange={event => this.onPreviewChange(event)} checked={this.state.preview}/> On
                                </label>
                                <label className="radio-inline">
                                  <input type="radio" name="previewModeRadios" id="previewDisableRadio" value="false" disabled={this.state.customEndpoint} onChange={event => this.onPreviewChange(event)} checked={!this.state.preview}/> Off
                                </label>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="col-md-3 control-label">Endpoint</label>
                              <div className="col-md-9 radio-list">
                                <label className="radio" style={{marginLeft: 25 + 'px', marginBottom: 20 + 'px', display: 'flex', height: 20 + 'px'}}>
                                  <input type="radio" name="customEndpointRadio"
                                         id="customEndpointFalse" value="false"
                                         style={{marginTop: 5 + 'px'}}
                                         onChange={event => this.onCustomEndpointChange(event)}
                                         checked={!this.state.customEndpoint}
                                         /> Select
                                    {this.getServerList()}
                                </label>
                                <label className="radio" style={{marginLeft: 25 + 'px', display: 'flex', height: 20 + 'px'}}>
                                  <input type="radio" name="customEndpointRadio"
                                         id="customEndpointTrue" value="true"
                                         style={{marginTop: 5 + 'px'}}
                                         onChange={event => this.onCustomEndpointChange(event)}
                                         checked={this.state.customEndpoint}
                                         /> Custom
                                  <input id="customEndpointURL" type="text" className="form-control spinner input-circle" style={{marginTop: -5 + 'px', marginLeft: 10 + 'px'}} disabled={!this.state.customEndpoint} placeholder="https://update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4" defaultValue="https://update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4" />
                                </label>
                              </div>
                            </div>

                          </div>
                          {/* END Advanced Settings */}
                        </div>
                        {/* END Form Body */}
                        <div className="form-actions" id="div_forTesting">
                          <div className="row">
                            <label className="col-md-3 control-label">BlockUI Testing</label>
                            <div className="col-md-4">
                              <button type="button" onClick={this.onSendRequest}  className="btn green" id="btn_submit_1">BlockUI 1</button>
                              <button type="button" onClick={this.onSendRequest}  className="btn green" id="btn_submit_2">BlockUI 2</button>
                              <button type="button" onClick={this.onSendRequest}  className="btn green" id="btn_submit_3">BlockUI 3</button>
                            </div>
                          </div>
                        </div>
                        <div className="form-actions">
                          <div className="row">
                            <div className="col-md-offset-3 col-md-4">
                              <button type="button" className="btn green" id="btn_submit" onClick={this.onSendRequest}>Submit</button>
                              <button type="button" onClick={this.onClear} className="btn default" id="btn_clear">Clear</button>
                            </div>
                          </div>
                        </div>

                      </form>
                      {/* END FORM data-toggle="modal" data-target="#loginForm" */ }
                    </div>
                  </div>

                  {/* Begin Login FORM */}
                  <div id="loginForm" className="modal fade" tabindex="-1" aria-hidden="true">
                    <div id="loginDiv" className="login">
                      {/* BEGIN LOGO */}
                      <div className="logo">
                        <a href="index.html">
                          <img src="assets/img/logo.png" alt="logo" /> </a>
                        </div>
                        {/* END LOGO */}
                        {/* BEGIN LOGIN */}
                        <div className="content">
                          {/* BEGIN LOGIN FORM */}
                          <form className="login-form" action="#">
                            <h3 className="form-title">Login to your account</h3>
                            <div className="alert alert-danger display-hide">
                              <button className="close" data-close="alert"></button>
                              <span> Enter any username and password. </span>
                            </div>
                            <div className="form-group">
                              {/*ie8, ie9 does not support html5 placeholder, so we just show field title for that*/}
                              <label className="control-label visible-ie8 visible-ie9">Username</label>
                              <div className="input-icon">
                                <i className="fa fa-user"></i>
                                <input id="fdt_username" className="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Username" name="username" /> </div>
                              </div>
                              <div className="form-group">
                                <label className="control-label visible-ie8 visible-ie9">Password</label>
                                <div className="input-icon">
                                  <i className="fa fa-lock"></i>
                                  <input id="fdt_password" className="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password" /> </div>
                                </div>
                                <div className="form-actions">
                                  {/*<<label className="checkbox" style={{marginLeft: 25 + 'px'}}>
                                    <input type="checkbox" name="remember" value="1" /> Remember me </label>*/}
                                    <button type="button" id="loginFrom_login" onClick={this.onSendRequest} className="btn green pull-right"> Login </button>
                                  </div>
                                  <div className="forget-password">
                                    <h4>Don{"'"}t have access ?</h4>
                                    <p> No worries, contact
                                      <a id="contact-Rover" href="mailto:delivery.platforms.us@autodesk.com?Subject=Request%20for%20FDT%20front%20access" target="_top"> Rover team </a> to gain access. </p>
                                    </div>
                                  </form>
                                  {/* END LOGIN FORM */}
                                  {/* BEGIN FORGOT PASSWORD FORM */}
                                  <form className="contact-form" action="index.html" method="post">
                                    <h3>Need access ?</h3>
                                    <p> Enter your e-mail address below to request access. </p>
                                    <div className="form-group">
                                      <div className="input-icon">
                                        <i className="fa fa-envelope"></i>
                                        <input className="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" name="email" /> </div>
                                      </div>
                                      <div className="form-actions">
                                        <button type="button" id="back-btn" className="btn grey-salsa btn-outline"> Back </button>
                                        <button type="submit" className="btn green pull-right"> Submit </button>
                                      </div>
                                    </form>
                                    {/* END FORGOT PASSWORD FORM */}

                                  </div>
                                  {/* END LOGIN */}
                                </div>
                              </div>
                        {/* End Login FORM */}
                      </div>
                    </div>

                  <div className={'row'+ (this.state.showResults ? '' : ' hidden')} id="mainPageOutput">
                    <div className="col-md-12">

                      <div className="col-md-12" style={{padding: 0 + 'px'}}>
                        {/* BEGIN SAMPLE TABLE PORTLET*/}
                        <div className="portlet box red" style={{marginBottom: 0}}>
                          <div className="portlet-title portlet-clickable">
                            <div className="caption">
                              <i className="fa fa-user"></i>Summary
                              </div>
                              <div className="tools">
                                <a id='summary_collapse' className="collapse"> </a>
                              </div>
                            </div>
                            <div className="portlet-body" style={{paddingTop: 0 + 'px'}}>

                              {/* Begin Summary content */}
                              <div className="tabbable-line">
                                <ul className="nav nav-tabs">
                                  <li className="active">
                                    <a href="#tab_summary" data-toggle="tab"> Summary </a>
                                  </li>
                                  <li>
                                    <a href="#tab_formattedAppcast" data-toggle="tab"> Appcast </a>
                                  </li>
                                  <li>
                                    <a href="#tab_formattedClientState" data-toggle="tab"> Client State </a>
                                  </li>
                                  <li>
                                    <a href="#tab_rawAppcastResponse" data-toggle="tab"> Raw AppCast </a>
                                  </li>
                                  <li>
                                    <a href="#tab_rawClientState" data-toggle="tab"> Raw Client State </a>
                                  </li>
                                </ul>
                                <div className="tab-content" style={{display: 'inline-block', width: '100%'}}>

                                  <div className="tab-pane active" id="tab_summary">
                                    {this.getTabSummary()}
                                  </div>
                                  <div className="tab-pane" id="tab_formattedAppcast">
                                    <div style={{overflowY: 'scroll'}} >
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="btn-toolbar">
                                            <div className="btn-group btn-group-lg btn-group-solid margin-bottom-10">
                                              <button type="button" onClick={event => this.onExpand('appcastTable')} className="btn yellow-casablanca">Expand All</button>
                                              <button type="button" onClick={event => this.onCollapse('appcastTable')} className="btn green">Collapse All</button>
                                              <button type="button" onClick={event => this.onViewXML('appcast')} className="btn blue-hoki">View data in XML format</button>
                                              <button type="button" onClick={event => this.onViewTable('appcast')} className="btn green-seagreen">View table in new window</button>
                                            </div>
                                          </div>
                                          {this.getFormattedAppcastTable()}
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div className="tab-pane" id="tab_formattedClientState">
                                    <div style={{overflowY: 'scroll'}} >
                                      <div className="btn-toolbar">
                                        <div className="btn-group btn-group-lg btn-group-solid margin-bottom-10">
                                          <button type="button" onClick={event => this.onExpand('clientStateTable')}  className="btn yellow-casablanca">Expand All</button>
                                          <button type="button" onClick={event => this.onCollapse('clientStateTable')} className="btn green">Collapse All</button>
                                          <button type="button" onClick={event => this.onViewXML('clientState')} className="btn blue-hoki">View data in XML format</button>
                                          <button type="button" onClick={event => this.onViewTable('clientState')} className="btn green-seagreen">View table in new window</button>
                                        </div>
                                      </div>
                                      {this.getFormattedClientStateTable()}
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="tab_rawAppcastResponse">
                                    <div className="btn-toolbar">
                                      <div className="btn-group btn-group-lg btn-group-solid margin-bottom-10">
                                        <button type="button" onClick={event => this.onExpandEditor('raw_appcast')} className="btn yellow-casablanca">Expand All</button>
                                        <button type="button" onClick={event => this.onCollapseEditor('raw_appcast')} className="btn green">Collapse All</button>
                                        <Clipboard type="button" className="btn blue-hoki" data-clipboard-text={this.state.responseData}>
                                          Copy to clipboard
                                        </Clipboard>
                                        {/*<button type="button" onClick={event => this.onViewEditor('appcast')} className="btn green-seagreen">View Editor in new window</button>*/}
                                      </div>
                                    </div>
                                    <div id="raw_appcast" style={{width: 100 + '%', height: 500 + 'px', marginTop: -30 + 'px'}}></div>
                                  </div>
                                  <div className="tab-pane" id="tab_rawClientState">
                                    <div className="btn-toolbar">
                                      <div className="btn-group btn-group-lg btn-group-solid margin-bottom-10">
                                        <button type="button" onClick={event => this.onExpandEditor('raw_clientState')} className="btn yellow-casablanca">Expand All</button>
                                        <button type="button" onClick={event => this.onCollapseEditor('raw_clientState')} className="btn green">Collapse All</button>
                                        <Clipboard type="button" className="btn blue-hoki" data-clipboard-text={this.state.lastClientState}>
                                          Copy to clipboard
                                        </Clipboard>
                                      </div>
                                    </div>
                                    <div id="raw_clientState" style={{width: 100 + '%', height: 600 + 'px', marginTop: 0 + 'px'}}></div>
                                  </div>

                                </div>
                              </div>
                              {/* End Summary content */}

                            </div>
                          </div>
                          {/* END SAMPLE TABLE PORTLET*/}
                        </div>

                        <div className="col-md-12 div_details" style={{padding: 0 + 'px'}}>
                          {/* BEGIN SAMPLE TABLE PORTLET*/}
                          <div className="portlet box blue">
                            <div className="portlet-title portlet-clickable">
                              <div className="caption">
                                <i className="icon-social-dribbble"></i>Details</div>
                                <div className="tools">
                                  <a id='details_collapse' className="collapse"> </a>
                                </div>
                              </div>
                              <div className="portlet-body" style={{paddingTop: 0 + 'px'}}>

                                {/* Begin Summary content */}
                                <div className="tabbable-line">
                                  <ul className="nav nav-tabs">
                                    <li className="active">
                                      <a href="#tab_statusTrace" data-toggle="tab"> Status Trace </a>
                                    </li>
                                    <li>
                                      <a href="#tab_assets" data-toggle="tab"> Assets </a>
                                    </li>
                                    <li>
                                      <a href="#tab_entities" data-toggle="tab"> Entities </a>
                                    </li>
                                    <li>
                                      <a href="#tab_adminPrefs" data-toggle="tab"> Admin Prefs </a>
                                    </li>
                                    <li>
                                      <a href="#tab_entitlement" data-toggle="tab"> Entitlement </a>
                                    </li>
                                  </ul>
                                  <div className="tab-content" style={{display: 'inline-block', width: '100%'}}>

                                    <div className="tab-pane active" id="tab_statusTrace">
                                      {this.getTabStatusTrace()}
                                    </div>

                                    <div className="tab-pane" id="tab_assets">
                                      {this.getTabAssets()}
                                    </div>

                                    <div className="tab-pane" id="tab_entities">
                                      {this.getTabEntities()}
                                    </div>

                                    <div className="tab-pane" id="tab_adminPrefs">
                                      {this.getTabAdminPrefs()}
                                    </div>

                                    <div className="tab-pane" id="tab_entitlement">
                                      {this.getTabEntitlement()}
                                    </div>

                                    <div className="tab-pane" id="tab_productEntitlement">
                                      <div className="note note-success">
                                        <p> Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS. The complete set of 439 icons in Font Awesome 4.1.0
                                        </p> For more info check out:
                                        <a target="_blank" href="http://fortawesome.github.io/Font-Awesome/icons/">http://fortawesome.github.io/Font-Awesome/icons/</a>
                                      </div>
                                      <section id="new">
                                        <h3>66 New Icons in 4.4</h3>
                                        <div className="row fontawesome-icon-list">
                                          <div className="fa-item col-md-3 col-sm-4">
                                            <i className="fa fa-500px"></i> 500px</div>
                                            <div className="fa-item col-md-3 col-sm-4">
                                              <i className="fa fa-amazon"></i> amazon</div>
                                            </div>
                                          </section>
                                          <section id="medical">
                                            <h2 className="page-header">Medical Icons</h2>
                                            <div className="row fontawesome-icon-list">
                                              <div className="fa-item col-md-3 col-sm-4">
                                                <i className="fa fa-ambulance"></i> ambulance</div>
                                                <div className="fa-item col-md-3 col-sm-4">
                                                  <i className="fa fa-h-square"></i> h-square</div>
                                                  <div className="fa-item col-md-3 col-sm-4">
                                                    <i className="fa fa-heart"></i> heart</div>
                                                  </div>
                                                </section>
                                              </div>
                                            </div>
                                          </div>
                                          {/* End Summary content */}
                                        </div>
                                      </div>
                                      {/* END SAMPLE TABLE PORTLET*/}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* END CONTENT BODY */}
                            </div>
                            {/* END CONTENT */}
                            <link href="assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet" type="text/css" />
                            <link href="assets/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet" type="text/css" />
                            <link href="assets/fdt/css/fdt.css" rel="stylesheet" />
                            <link href="assets/fdt/css/json2table.css" rel="stylesheet" />
                            <link href="assets/fdt/css/fdt.css" rel="stylesheet" />
                            <link href="assets/fdt/css/loginForm.css" rel="stylesheet" type="text/css" />

                            <script src="assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js" type="text/javascript"></script>
                            {/*<script src="./fdt/js/json2table.js"></script>*/}
                            <script src="assets/pages/scripts/ui-modals.min.js" type="text/javascript"></script>
                            <script src="assets/global/plugins/js/jquery.blockui.js"></script>

                            {/*
                            <script src=".assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
                            */}
                          </div>
                        );
                      }
                    }

function mapStateToProps(state){
  var currentdate = new Date();
  // console.log("mapStateToProps - state");
  // console.log(state);
  return {
    responseData: state.appCast.all,
    fdtError: state.appCast.error,
    status: state.appCast.status,
    statusText: state.appCast.statusText,
    upiData : state.consumableUnit.all,
    currentDate: currentdate   // Force it to trigger componentWillReceiveProps()
  };
}

/*  We may need to implement these two functions in the future
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}
*/

export default connect(mapStateToProps, { fetchConsumableUnit, fetchAppCast })(FDT);
