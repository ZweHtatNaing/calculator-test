import React from 'react';
import {shallow} from 'enzyme';
import CalButton from './CalButton';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Secondary', () => {
      const component = shallow(<CalButton theme="secondary" operator={'1'} />);
      expect(component).toMatchSnapshot('Secondary button snapshot');
    });
    it('should match to snapshot - Ascent', () => {
      const component = shallow(<CalButton theme="accent" operator={'+'} />);
      expect(component).toMatchSnapshot('Ascent button snapshot');
    });
  });
  describe('Interaction', () => {
    describe('handleButtonPress', () => {
      it('should call onPress', () => {
        /** Arrange
             1. mock function
             2. passing in mock function as props
             3. checking return values
         **/
        const value = {label: '1'};
        const onPress = jest.fn(e => (value.value = e.target.value));

        const Wrapper = shallow(
          <CalButton operator={value.label} onPress={onPress} />,
        );
        expect(Wrapper.props().children.props.children).toEqual('1');
      });
    });
  });
});
