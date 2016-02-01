import React, {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const NavigationBarRouteMapper = {

  LeftButton(route, navigator, index) {
    if (index === 0) return null;
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
    );
  },

  Title(route, navigator, index) {
    return (
      <Text style={styles.title}>{route.title}</Text>
    );
  },

  RightButton(route, navigator, index) {
    return null;
  },

};
export default NavigationBarRouteMapper;

const styles = StyleSheet.create({
  backButton: {
    color: '#FFF',
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    paddingTop: 8,
  }
})
