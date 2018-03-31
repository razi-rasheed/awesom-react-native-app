import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class News extends Component {
  state = {};
  render({ theme }) {
    const { colors } = theme;
    return (
      <View>
        <Text>News</Text>
      </View>
    );
  }
}

News.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(News);
