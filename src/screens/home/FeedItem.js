import React from 'react';
import { View, Image,StyleSheet } from 'react-native';
import { BG_PRIMARY } from '../../styles/Colors';
import UserInfo from './components/UserInfo';
import FeedText from './components/FeedText';

export default function FeedItem({item}) {

  return (
    <View style={{backgroundColor: BG_PRIMARY}}>
      <UserInfo />
      <View style={{height: 483}}>
        <FeedText text={item.text} />
        <Image source={item.image} style={styles.image}/>
        <View style={{flexDirection: 'row'}}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image : {
    width: '100%',
    height: 300,
  }
});
