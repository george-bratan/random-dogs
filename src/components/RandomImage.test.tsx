import * as enzyme from 'enzyme';
import * as React from 'react';
import RandomImage from './RandomImage';

//
it('renders an image', () => {
  const wrapper = enzyme.shallow(<RandomImage />);
  expect(wrapper.find(".random").length).toEqual(1);
});

//
it('renders the correct image', () => {
  const wrapper = enzyme.shallow(<RandomImage />);  
  expect(wrapper.find('.random').prop('src')).toEqual('logo.svg');
});

//
it('correctly identifies file types', () => {
  const wrapper = enzyme.shallow(<RandomImage />); 
  const component = wrapper.instance() as RandomImage;

  expect(component.is_image('jpg')).toEqual(true);
  expect(component.is_video('mp4')).toEqual(true);

  expect(component.is_image('mp4')).toEqual(false);
  expect(component.is_video('jpg')).toEqual(false);
});
