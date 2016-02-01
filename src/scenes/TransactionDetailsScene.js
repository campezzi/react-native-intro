import React, {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import TransactionRow from '../components/TransactionRow';

class TransactionDetailsScene extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TransactionRow transaction={this.props.transaction} />
        <Text style={styles.title}>More Details...</Text>
      </View>
    );
  }
}

TransactionDetailsScene.route = {
  component: TransactionDetailsScene,
  title: 'Transaction Details',
}

export default TransactionDetailsScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  title: {
    padding: 24,
  }
});
