import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import _ from 'lodash';
import {BG_PRIMARY, BG_TERITARY} from '../../styles/Colors';
import FeedItem from './FeedItem';

export default function Home({navigation}) {
  const data = [
    {
      key: '1',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s wit the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: require('../../assets/images/example/image.png'),
    },
    {
      key: '2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
      image: null,
    },
    {
      key: '3',
      text: 'Lorem ipsum dolor sit amet, consectetur',
      image: require('../../assets/images/example/image2.jpeg'),
    },
  ];
  const keyExtractor = React.useCallback((_, index) => index.toString(), []);

  const renderItem = ({item}) => (
    <FeedItem item={item} />
  );
  
 
  return (
    <SafeAreaView style={{ backgroundColor: BG_PRIMARY}}>
      <FlatList
        data={data}
        pagingEnabled
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        enableEmptySections={true}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#F5F5F5'
  }
});
