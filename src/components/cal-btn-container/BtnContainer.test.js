import React from 'react';
import {shallow} from 'enzyme';
import BtnContainer from './BtnContainer';
import CalButton from '../cal-button/CalButton';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot ', () => {
      const component = shallow(<BtnContainer />);
      expect(component).toMatchSnapshot('Secondary button snapshot');
    });
  });
});
