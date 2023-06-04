import React from 'react';
import { View, Image,StyleSheet, Text } from 'react-native';
import { BG_PRIMARY, ICON, LINE, TOSCA } from '../../styles/Colors';
import UserInfo from './components/UserInfo';
import FeedText from './components/FeedText';
import Images from '../../assets/images';
import ActionBar from './components/ActionBar';
import FeedImage from './components/FeedImage';

export default function FeedItem({item}) {

  return (
    <View style={{flex: 1, backgroundColor: BG_PRIMARY}}>
      <UserInfo item={item} />
      <View style={{height: 483}}>
        <FeedText text={item.text} />
        <FeedImage image={item.image} />
        <ActionBar />
      </View>
    </View>
  );
}