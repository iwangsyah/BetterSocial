import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../../assets/images';
import { LINE, TEXT_PRIMARY, TEXT_SECONDARY } from '../../../styles/Colors';

export default function UserInfo()  {  
  return (
    <View style={styles.userinfoContainer}>
      <Image source={Images.icProfile} style={styles.icProfile} />
      <View>
        <Text style={styles.txtName}>Usup Suparma</Text>
        <Text style={styles.txtDate}>Mar 24, 2022</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userinfoContainer: {
    height: 64, 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: LINE, 
    paddingHorizontal: 21
  },
  icProfile: {
    width: 48, 
    height: 48, 
    marginRight: 13
  },
  txtName:  {
    fontWeight: '600', 
    color: TEXT_PRIMARY, 
    marginBottom: 5
  },
  txtDate : {
    fontSize: 12, 
    color: TEXT_SECONDARY
  },
})