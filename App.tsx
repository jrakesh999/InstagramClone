import React from 'react';
import {View, StyleSheet} from 'react-native';
import CommentsScreen from './src/screens/CommentsScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      <CommentsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {flex: 1},
});
