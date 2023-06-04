import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../../assets/images';
import { ICON, LINE, TOSCA } from '../../../styles/Colors';

export default function ActionBar()  {  
  return (
    <View style={[styles.actionContainer, styles.rowCenterVertical]}>
      <View style={styles.rowCenterVertical}>
        <Image source={Images.icShare} style={styles.icon(26)}/>
        <Image source={Images.icComment} style={styles.icon(10)}/>
        <Text style={{color: ICON}}>37</Text>
      </View>
      <View style={styles.rowCenterVertical}>
        <Image source={Images.icBlock} style={styles.icon(20)}/>
        <Image source={Images.icUnlike} style={styles.icon()}/>
        <Text style={{marginHorizontal: 10, color: TOSCA}}>376</Text>
        <Image source={Images.icLike} style={styles.icon()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionContainer: {
    height: 52, 
    width: '100%', 
    borderTopWidth: 1, 
    borderColor: LINE,
    paddingHorizontal: 21,
    justifyContent: 'space-between'
  },
  rowCenterVertical: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: marginRight => ({
    width: 22,
    height: 22,
    marginRight,
    resizeMode: 'contain'
  })
})