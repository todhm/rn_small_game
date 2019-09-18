import {
  Animated,
  StyleSheet,
  View,
  LayoutAnimation,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/Button';
import Logo from '../components/Logo';
import Toggle from '../components/Toggle';
import configureTransition from '../utils/configureTransition';
import sleep from '../utils/sleep';

const State = {
  Launching: 'Launching',
  WillTransitionIn: 'WillTransitionIn',
  WillTransitionOut: 'WillTransitionOut',
};

const BOARD_SIZES = [3, 4, 5, 6];

export default class Start extends React.Component {
  static propTypes = {
    onChangeSize: PropTypes.func.isRequired,
    onStartGame: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  };
  async componentDidMount(){
    await sleep(500);

    await configureTransition(()=>{
      this.setState({transitionState:State.WillTransitionIn})
    })


  }

  state = {
    transitionState: State.Launching,
  };

  render() {
    const {size,onChangeSize} = this.props; 
    const {transitionState} = this.state; 
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo/>
        </View>
        {transitionState !== State.Launching&&(
          <View>
          <Toggle
            options={BOARD_SIZES}
            value={size}
            onChange={onChangeSize}
          />
        </View>
        )}
        {transitionState !== State.Launching&&(
          <View>
            <View>
              <Button title={'Start Game'}
                onPress={()=>{}}
              />
            </View>
        </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    alignSelf: 'stretch',
    paddingHorizontal: 40,
  },
});
