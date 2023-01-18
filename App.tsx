import React from 'react';
import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.lg}}>
        Hello World!
      </Text>
    </View>
  );
};

export default App;
