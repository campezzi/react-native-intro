'use strict';
import React, {
  Component,
  Navigator,
  StyleSheet,
  Platform,
  StatusBarIOS,
} from 'react-native';

import NavigationBarRouteMapper from './components/NavigationBarRouteMapper'
import TransactionListScene from './scenes/TransactionListScene'

export default class BrownBag extends Component {

  componentDidMount() {
    this._setStatusBarStyle();
  }

  render() {
    return (
      <Navigator
        sceneStyle={styles.sceneContainer}
        renderScene={this._renderScene}
        initialRoute={TransactionListScene.route}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={NavigationBarRouteMapper}
          />
        }

      />
    );
  }

  _renderScene(route, navigator) {
    let Component = route.component;
    return <Component {...route.props} navigator={navigator} />;
  }

  _setStatusBarStyle() {
    if (Platform.OS === 'ios') {
      StatusBarIOS.setStyle('light-content');
    }
  }

}

const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 64,
  },
  navigationBar: {
    backgroundColor: 'purple'
  }
})
