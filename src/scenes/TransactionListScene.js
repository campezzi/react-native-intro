import React, {
  ListView,
} from 'react-native';

import SampleData from '../resources/SampleData';
import TransactionDetailsScene from './TransactionDetailsScene';
import TransactionRow from '../components/TransactionRow';

class TransactionListScene extends React.Component {

  constructor(props) {
    super(props);

    this._renderRow = this._renderRow.bind(this);
    this._presentTransaction = this._presentTransaction.bind(this);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(SampleData.transactions),
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }

  _renderRow(transaction) {
    return (
      <TransactionRow
        transaction={transaction}
        onPress={this._presentTransaction}
      />
    );
  }

  _presentTransaction(transaction) {
    let route = TransactionDetailsScene.route;
    route.title = transaction.title;
    route.props = { transaction };
    this.props.navigator.push(route);
  }

}

TransactionListScene.route = {
  component: TransactionListScene,
  title: 'Transaction List',
}

export default TransactionListScene;
