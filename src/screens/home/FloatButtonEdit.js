import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import Images from '../../assets/images';
import { TOSCA } from '../../styles/Colors';

export default function FloatButtonEdit()  {  
  return (
    <Pressable style={styles.button}>
      <Image source={Images.icPencil}style={styles.icon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50, 
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: TOSCA, 
    position: 'absolute', 
    borderRadius: 25, 
    right: 20, 
    bottom: 62,
  },
  icon: {
    width: 22, 
    height: 22
  }
})