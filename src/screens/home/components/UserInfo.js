import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../../assets/images';
import { LINE, TEXT_PRIMARY, TEXT_SECONDARY } from '../../../styles/Colors';

export default function UserInfo({item})  {  

  const Separator = () => <View style={styles.separator} />

  const RenderItemInfo = ({data, icon}) => (
    <>
      {data ? (
        <View style={styles.rowCenterVertical}>
          <Separator />
          {icon ? (
            <Image source={icon} style={styles.icon} />
          ) : (
            <Text style={styles.txtInfo}>{data}</Text>
          )}
        </View>
      ) : null}
    </>
  )

  return (
    <View style={styles.userinfoContainer}>
      <Image source={Images.icProfile} style={styles.icProfile} />
      <View>
        <Text style={styles.txtName}>Usup Suparma</Text>
        <View style={styles.rowCenterVertical}>
          <Text style={styles.txtInfo}>Mar 24, 2022</Text>
          <RenderItemInfo data={item.isPublic} icon={Images.icGlobe} />
          <RenderItemInfo data={item.isExpiry} icon={Images.icExpiry} />
          <RenderItemInfo data={item.location} />
        </View>
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
  rowCenterVertical: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInfo : {
    fontSize: 12, 
    color: TEXT_SECONDARY
  },
  icon: {
    width: 16,
    height: 16
  },
  separator: {
    width: 2,
    height: 2,
    backgroundColor: TEXT_SECONDARY,
    marginHorizontal: 5
  }
})