import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function FeedImage({image})  { 

  return (
    <View style={{flex: 1}}>
      {image ? (
        <Image source={image} style={styles.image}/>
      ) : (
        <View style={styles.image}/>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  image : {
    flex: 1,
    width: '100%',
  },
})