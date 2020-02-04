import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BlankWithRedux from '../src/components/page/underdevelopment/blankWithRedux';
import Sample from '../src/components/page/underdevelopment/sample';
//import FDT from '../src/components/page/fdt/fdt';
import {Provider} from 'react-redux';
import reducers from '../src/reducers/index';
import {createStore} from 'redux';

import TestUtils from 'react/lib/ReactTestUtils';

function setup () {
    const store = createStore(reducers);
    let output = TestUtils.renderIntoDocument(<Provider store={ store }><BlankWithRedux /></Provider>);
    return {
        output
    }
}

describe('Test Sample Component', () => {
    it('should render properly', (done) => {
        const { output } = setup();
        expect(Sample.prototype.componentDidMount).to.have.been.called;
        done();
    })
});

describe("blankWithRedux ", function() {

  it('finds a div', () => {

  const store = createStore(reducers);
  const wrapper = mount(
      <Provider store={ store } key="provider">
        <Sample />
      </Provider>
    )

  expect(wrapper.find('div').length).to.equal(0);
  expect(wrapper.contains(<div className="no-exist-class" />)).to.equal(false);
  });

});
