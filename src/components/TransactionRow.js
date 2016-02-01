import React, {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

class TransactionRow extends React.Component {

  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  render () {
    let transaction = this.props.transaction;
    return (
      <TouchableHighlight underlayColor="#EFEFEF" onPress={this._onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{transaction.title}</Text>
          <Text style={this._stylesForAmount()}>${Math.abs(transaction.amount)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onPress () {
    let { onPress, transaction } = this.props;
    if (onPress !== undefined) {
      onPress(transaction);
    }
  }

  _stylesForAmount() {
    let { transaction } = this.props;
    return [
      styles.amount,
      transaction.amount > 0 ? {color: 'green'} : {color: 'red'},
    ];
  }

}

export default TransactionRow;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
  },
});
