import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
  render() {
    const {name} = this.props.employees;
    console.log('jbhlgyuykl', name);

    return (
        // <TouchableWithoutFeedback onPress>
          <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      /* </TouchableWithoutFeedback> */
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
