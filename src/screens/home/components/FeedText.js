import React from 'react';
import {StyleSheet, View} from 'react-native';
import { ReadMoreText } from '../../../components';

export default function FeedText({text})  { 

  return (
    <View style={styles.container}>
      <ReadMoreText>
        {text}
      </ReadMoreText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 21
  }
})