import React, {
  Component
} from 'react';
import {CardItem,Icon, Text} from 'native-base';
import styles from '../styles/mainstyle.js';

class ListItem extends Component {
  render() {
    return (
      <CardItem>
          <Icon name='md-create' />
          <Text>{this.props.task.name}</Text>
          <Icon name='md-checkmark' onPress={() => this.props.onTaskCompletion()}/>
      </CardItem>
    );
  }
}

module.exports = ListItem;
