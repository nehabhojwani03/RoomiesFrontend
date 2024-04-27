import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToolsScreen = () => {

  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Co-living management tools Screen</Text>
    </View>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 26,
    fontWeight: 'bold'

  }
});
