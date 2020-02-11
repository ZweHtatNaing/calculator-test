import React from 'react';
import {shallow} from 'enzyme';
import CalResult from './CalResult';
import App from '../../../App';
import CalButton from '../cal-button/CalButton';
describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot ', () => {
      const component = shallow(
        <CalResult first={'1'} second={'2'} operator={'+'} result={3} />,
      );
      expect(component).toMatchSnapshot('Secondary button snapshot');
    });
  });

});
