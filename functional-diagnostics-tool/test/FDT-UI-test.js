import React from 'react';
import { expect } from 'chai';
import Sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import FDT from '../src/components/page/fdt/index';

import { Provider } from 'react-redux';

import reducers from '../src/reducers';
import { createStore } from 'redux';

function setup() {
    if(setup.wrapper)
      return setup.wrapper;
    else{
      const store = createStore(reducers);
      setup.wrapper = mount(<FDT store={ store } />);
      return setup.wrapper;
    }
}

describe("<FDT /> UI Testing : ", function() {

  it('Checking setup function', () => {
    const wrapper = setup();
    expect(wrapper.length).to.equal(1);
  });

  it('Button Test - Radio Button: Client State Format', () => {
    const wrapper = setup();
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('#textarea_ClientState').length).to.equal(0);
    expect(wrapper.find('#test_uploadLogFile').text()).to.equal('true');
    wrapper.find('#clientStateFormatText').simulate('change');
    expect(wrapper.find('#textarea_ClientState').length).to.equal(1);
    expect(wrapper.find('#test_uploadLogFile').text()).to.equal('false');
    wrapper.find('#clientStateFormatFile').simulate('change');
    expect(wrapper.find('#textarea_ClientState').length).to.equal(0);
    expect(wrapper.find('#test_uploadLogFile').text()).to.equal('true');
  });

  it('Button Test - Button: Select File', () => {
    const wrapper = setup();
    var buttonHtml = wrapper.find('#logFileInput').html();
    expect(buttonHtml).to.equal('<input type="file" id="logFileInput" name="...">');
    // wrapper.find('#logFileInput').simulate('change',{
    //   target: {
    //             value: "I need model target object :)",
    //             files: ['G:\\testFilePath\\testFileName.json']
    //           }
    //   }
    // );
  });

  it('UI Test - Link: How to enable loggin?', () => {
    const wrapper = setup();
    expect(wrapper.contains(<a href="https://knowledge.autodesk.com/community/article/14326" target="_blank"> How to enable logging? </a>)).to.equal(true);
  });

  it('Button Test - Radio Button: Tracer Type', () => {
    const wrapper = setup();
    expect(wrapper.find('#test_tracerType').text()).to.equal('debug');
    wrapper.find('#traceRadio').simulate('change');
    expect(wrapper.find('#test_tracerType').text()).to.equal('trace');
    wrapper.find('#debugRadio').simulate('change');
    expect(wrapper.find('#test_tracerType').text()).to.equal('debug');
  });

  it('Button Test - Radio Button: Preview Mode', () => {
    const wrapper = setup();
    expect(wrapper.find('#test_preview').text()).to.equal('false');
    wrapper.find('#previewEnableRadio').simulate('change');
    expect(wrapper.find('#test_preview').text()).to.equal('true');
    wrapper.find('#previewDisableRadio').simulate('change');
    expect(wrapper.find('#test_preview').text()).to.equal('false');
  });

  it("UI Test - Input form: ClientStateUpload function", function() {
    const wrapper = setup();
    expect(wrapper.contains(<label className="control-label col-md-3">Log file upload</label>)).to.equal(true);
    expect(wrapper.contains(<span className="help-block"> Please upload the log file. </span>)).to.equal(true);
    expect(wrapper.contains(<a href="javascript:;" className="input-group-addon btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>)).to.equal(true);
    expect(wrapper.find('#filePath').hasClass('fileinput-filename')).to.equal(true);
  });

  it("UI Test - Input form: Advanced Settings", function() {
    const wrapper = setup();
    expect(wrapper.find("#btn_advancedSetting").hasClass('red')).to.equal(true);
    expect(wrapper.find("#btn_advancedSetting").hasClass('btn')).to.equal(true);
    expect(wrapper.find("#btn_advancedSetting").hasClass('btn-outline')).to.equal(true);
    expect(wrapper.find("#btn_advancedSetting").hasClass('active')).to.equal(false);
    expect(wrapper.find("#btn_advancedSetting").html()).to.equal('<button type="button" class="btn red btn-outline" id="btn_advancedSetting" data-toggle=""> Advanced Settings </button>');

    // The following line will cause error because enzyme does not support it
    //wrapper.find('#btn_advancedSetting').simulate('click');
    //expect(wrapper.find("#btn_advancedSetting").hasClass('active')).to.equal(true);
  });

  it('Button Test - Radio Button: Endpoint', () => {
    const wrapper = setup();
    expect(wrapper.find('#test_customEndpoint').text()).to.equal('false');
    wrapper.find('#customEndpointTrue').simulate('change');
    expect(wrapper.find('#test_customEndpoint').text()).to.equal('true');
    wrapper.find('#customEndpointFalse').simulate('change');
    expect(wrapper.find('#test_customEndpoint').text()).to.equal('false');
  });

  it('Input Test - Select: Endpoint List', () => {
    const wrapper = setup();
    expect(wrapper.find('#serverDropdownList').childAt(0).text()).to.equal('https://update.delivery.autodesk.com/appcast/services/appcastService/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(1).text()).to.equal('https://update.delivery.autodesk.com/appcast/services/appcastService/sam/v5');
    expect(wrapper.find('#serverDropdownList').childAt(2).text()).to.equal('https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(3).text()).to.equal('https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v5');
    expect(wrapper.find('#serverDropdownList').childAt(4).text()).to.equal('https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(5).text()).to.equal('https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v5');
  });

  it('Input Test - Select: Endpoint List and Preview', () => {
    const wrapper = setup();
    expect(wrapper.find('#test_preview').text()).to.equal('false');
    wrapper.find('#previewEnableRadio').simulate('change');
    expect(wrapper.find('#test_preview').text()).to.equal('true');
    expect(wrapper.find('#serverDropdownList').childAt(0).text()).to.equal('https://update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(1).text()).to.equal('https://update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v5');
    expect(wrapper.find('#serverDropdownList').childAt(2).text()).to.equal('https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(3).text()).to.equal('https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v5');
    expect(wrapper.find('#serverDropdownList').childAt(4).text()).to.equal('https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(5).text()).to.equal('https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v5');
    wrapper.find('#previewDisableRadio').simulate('change');
    expect(wrapper.find('#test_preview').text()).to.equal('false');
    expect(wrapper.find('#serverDropdownList').childAt(0).text()).to.equal('https://update.delivery.autodesk.com/appcast/services/appcastService/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(1).text()).to.equal('https://update.delivery.autodesk.com/appcast/services/appcastService/sam/v5');
    expect(wrapper.find('#serverDropdownList').childAt(2).text()).to.equal('https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(3).text()).to.equal('https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v5');
    expect(wrapper.find('#serverDropdownList').childAt(4).text()).to.equal('https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v4');
    expect(wrapper.find('#serverDropdownList').childAt(5).text()).to.equal('https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/sam/v5');
  });

  it('Input Test - Text: Custom Endpoint', () => {
    const wrapper = setup();
    expect(wrapper.find('#customEndpointURL').html()).to.
      equal('<input type="text" id="customEndpointURL" class="form-control spinner input-circle" placeholder="https://update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4" style="margin-top: -5px; margin-left: 10px;" disabled="">');
    wrapper.find('#customEndpointTrue').simulate('change');
    expect(wrapper.find('#customEndpointURL').html()).to.
      equal('<input type="text" id="customEndpointURL" class="form-control spinner input-circle" placeholder="https://update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4" style="margin-top: -5px; margin-left: 10px;">');
    wrapper.find('#customEndpointFalse').simulate('change');
    expect(wrapper.find('#customEndpointURL').html()).to.
      equal('<input type="text" id="customEndpointURL" class="form-control spinner input-circle" placeholder="https://update.delivery.autodesk.com/appcast/services/appcastService/preview/sam/v4" style="margin-top: -5px; margin-left: 10px;" disabled="">');
  });

  it('Button Test - Button: Clear', () => {
    const wrapper = setup();
    wrapper.find('#clientStateFormatText').simulate('change');
    wrapper.find('#btn_clear').simulate('change');
    expect(wrapper.find('#textarea_ClientState').text()).to.equal('');
    expect(wrapper.find('#textarea_ClientState').html()).to.
      equal('<textarea class="form-control" rows="6" id="textarea_ClientState"></textarea>');
    expect(wrapper.find('#test_filePath').text()).to.equal('');
    expect(wrapper.find('#test_showResults').text()).to.equal('false');
  });

  it('Button Test - Button: Submit', () => {
    const wrapper = setup();
    //wrapper.find('#btn_submit').simulate('click');
    expect(wrapper.find('#btn_submit').text()).to.equal('Submit');
    expect(wrapper.find('#btn_submit').html()).to.equal('<button type="button" class="btn green" id="btn_submit">Submit</button>');
  });

});
