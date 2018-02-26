import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Section } from '../components/section';
import { Nav } from '../components/nav';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';

xdescribe('<Section />', function() {
  it('should render one <h1> element', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});

describe('<Nav />', function() {
  const menuPages =  [
    {title:'Menu item 1', inbox:0},
    {title:'Menu item 2', inbox:0},
    {title:'Menu item 3', inbox:0},
    {title:'Reviews', inbox:1138},
  ];
  it('should render four <li> element', () => {
    const wrapper = shallow(<ul><Nav menuPages={menuPages} onChange={ null } /></ul>);
    expect(wrapper.find('ul').length).toBe(1);
  });
});

xdescribe('<App />', function() {
  it('should have one <main> element', () => {
    const wrapper = shallow(<Provider store={store} >
      <App />
    </Provider>);
    expect(wrapper.find('main').length).toBe(1);
  });
});
