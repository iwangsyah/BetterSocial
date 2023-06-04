import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Chat({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>CHAaT</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
