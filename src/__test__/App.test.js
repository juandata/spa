import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Section } from '../components/section';
import { Nav } from '../components/nav';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';
import { menuPages } from '../assets/globals';

describe('<Section />', function() {
  it('should render one <h1> element', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});

describe('<Nav />', function() {

  it('should render four <li> element', () => {
    const wrapper = mount(<Nav menuPages={menuPages} onChange={ null } />);
    expect(wrapper.find('li').length).toBe(menuPages.length);
  });
});

describe('<App />', function() {
  it('should have one <Nav /> element', () => {
    const wrapper = mount(
    <Provider store={store} >
      <App />
    </Provider>);
    expect(wrapper.find('.App').length).toBe(1);
  });
});
