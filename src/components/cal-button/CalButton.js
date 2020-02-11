import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

class CalButton extends React.Component {
  /** Button Component */
  render() {
    const {operator, size, theme, handleButtonPress} = this.props;

    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    /** Setting double will take 2 col in a row like colspan=2 */
    if (size === 'double') {
      buttonStyles.push(styles.buttonDouble);
    }

    /** secondary = Black Color, ascent = Yellow Color*/
    if (theme === 'secondary') {
      buttonStyles.push(styles.buttonSecondary);
      textStyles.push(styles.textSecondary);
    } else if (theme === 'accent') {
      buttonStyles.push(styles.buttonAccent);
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        onPress={() => handleButtonPress(operator)}>
        <Text style={textStyles}>{operator}</Text>
      </TouchableOpacity>
    );
  }
}
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;
const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
});

export default CalButton;
