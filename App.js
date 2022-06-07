/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Hello World</Text>
    </View>
  );
};

export default codePush(App);
