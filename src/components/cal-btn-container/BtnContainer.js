import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import CalButton from '../cal-button/CalButton';

class BtnContainer extends React.Component {
  render() {
    const {handleButtonPress: handleButtonPress, refresh} = this.props;

    /** Four button per-row for operational characters & Three Button per-row for numbers*/
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <CalButton
            theme="accent"
            operator={'+'}
            handleButtonPress={handleButtonPress}
          />
          <CalButton
            theme="accent"
            operator={'−'}
            handleButtonPress={handleButtonPress}
          />
          <CalButton
            theme="accent"
            operator={'×'}
            handleButtonPress={handleButtonPress}
          />
          <CalButton
            theme="accent"
            operator={'÷'}
            handleButtonPress={handleButtonPress}
          />
        </View>

        <View style={styles.row}>
          <CalButton operator={'7'} handleButtonPress={handleButtonPress} />
          <CalButton operator={'8'} handleButtonPress={handleButtonPress} />
          <CalButton operator={'9'} handleButtonPress={handleButtonPress} />
        </View>

        <View style={styles.row}>
          <CalButton operator={'4'} handleButtonPress={handleButtonPress} />
          <CalButton operator={'5'} handleButtonPress={handleButtonPress} />
          <CalButton operator={'6'} handleButtonPress={handleButtonPress} />
        </View>

        <View style={styles.row}>
          <CalButton operator={'1'} handleButtonPress={handleButtonPress} />
          <CalButton operator={'2'} handleButtonPress={handleButtonPress} />
          <CalButton operator={'3'} handleButtonPress={handleButtonPress} />
        </View>

        <View style={styles.row}>
          <CalButton operator={'0'} handleButtonPress={handleButtonPress} />
          <CalButton operator={'.'} handleButtonPress={handleButtonPress} />
          <CalButton
            theme="accent"
            operator={'C'}
            handleButtonPress={refresh}
          />
          <CalButton
            theme="accent"
            operator={'='}
            handleButtonPress={handleButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default BtnContainer;
