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

describe("<FDT /> Functional Testing : ", function() {

  it('Call componentDidMount', () => {
    Sinon.spy(FDT.prototype, 'componentDidMount');
    const wrapper = setup();
    expect(wrapper.length).to.equal(1);
    expect(FDT.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Call componentWillReceiveProps', () => {
    const spy = Sinon.spy(FDT.prototype, 'componentWillReceiveProps');
    const wrapper = setup();
    expect(spy.calledOnce).to.equal(false);
    wrapper.setProps({ foo: 'foo' });
    expect(spy.calledOnce).to.equal(true);
  });

  it('Set props in Provider', () => {
    const store = createStore(reducers);
    const wrapper = mount(
        <Provider store={ store } testData='testData' >
          <FDT />
        </Provider>
    );
    expect(wrapper.props().testData).to.equal("testData");
    wrapper.setProps({ testData: "updatedTestData" });
    expect(wrapper.props().testData).to.equal("updatedTestData");
  });

  it('Set props in FDT', () => {
    const store = createStore(reducers);
    const wrapper = mount(
        <Provider store={ store } >
          <FDT testData='testData'/>
        </Provider>
    );
    const component_FDT = wrapper.find(FDT);
    expect(component_FDT.props().testData).to.equal("testData");

    // enzyme does not support setProps() on child. We wait for this bug to be fixed
    // Error: ReactWrapper::setProps() can only be called on the root
    // component_FDT.setProps({ testData: "updatedTestData" });
    // expect(component_FDT.props().testData).to.equal("updatedTestData");
  });

  it('Find the no-exist-class', () => {
    const store = createStore(reducers);
    const wrapper = mount(
        <Provider store={ store }>
          <FDT />
        </Provider>
    );
    expect(wrapper.find('no-exist-class').length).to.equal(0);
  });

  it('Check initial state', () => {
    const wrapper = setup();
    expect(wrapper.find('#test_fileContent').text()).to.equal('');
    expect(wrapper.find('#test_lastClientState').text()).to.equal('');
    expect(wrapper.find('#test_clientVersion').text()).to.equal('');
    expect(wrapper.find('#test_responseData').text()).to.equal('');
    expect(wrapper.find('#test_upiData').text()).to.equal('');
    expect(wrapper.find('#test_formattedTable').text()).to.equal('');
    expect(wrapper.find('#test_filePath').text()).to.equal('');
    expect(wrapper.find('#test_upi1Data').text()).to.equal('');
    expect(wrapper.find('#test_upi2Data').text()).to.equal('');
    expect(wrapper.find('#test_loadUPI').text()).to.equal('false');
    expect(wrapper.find('#test_loadUPI2').text()).to.equal('false');
    expect(wrapper.find('#test_validClientState').text()).to.equal('false');
    expect(wrapper.find('#test_tracerType').text()).to.equal('debug');
    expect(wrapper.find('#test_showResults').text()).to.equal('false');
    expect(wrapper.find('#test_customEndpoint').text()).to.equal('false');
    expect(wrapper.find('#test_uploadLogFile').text()).to.equal('true');
  });
});
