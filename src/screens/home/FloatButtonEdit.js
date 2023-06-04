import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import Images from '../../assets/images';

export default function FloatButtonEdit()  {  
  return (
    <Pressable style={styles.button}>
      <Image 
        source={Images.icPencil} 
        style={{width: 22, height: 22}} 
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50, 
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#00ADB5', 
    position: 'absolute', 
    borderRadius: 25, 
    right: 20, 
    bottom: 62,
  }
})