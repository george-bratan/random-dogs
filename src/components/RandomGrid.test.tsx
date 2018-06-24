import * as enzyme from 'enzyme';
import * as React from 'react';
import RandomGrid from './RandomGrid';

//
it('renders container', () => {
  const wrapper = enzyme.shallow(<RandomGrid />);
  expect(wrapper.find(".container").length).toEqual(1);
});

//
it('correctly adds images', () => {
  const wrapper = enzyme.shallow(<RandomGrid imageCount={8} />); 
  const component = wrapper.instance() as RandomGrid;

  expect(component.state.imageCount).toEqual(8);

  component.addImages(4);
  expect(component.state.imageCount).toEqual(12);
});

//
it('splits into rows', () => {
  const wrapper = enzyme.shallow(<RandomGrid />); 
  const component = wrapper.instance() as RandomGrid;

  expect(component.splitRows(Array(3), 4).length).toEqual(1);
  expect(component.splitRows(Array(4), 4).length).toEqual(1);
  expect(component.splitRows(Array(5), 4).length).toEqual(2);
});
