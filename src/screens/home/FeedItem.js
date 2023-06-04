import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { BG_PRIMARY, BLUE, LINE, TEXT_PRIMARY, TEXT_SECONDARY } from '../../styles/Colors';
import Images from '../../assets/images';

export default function FeedItem({item}) {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => setTextShown(!textShown);

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >=5); 
  }, []);

  return (
    <View style={{backgroundColor: BG_PRIMARY}}>
      <View style={{height: 64, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: LINE, paddingHorizontal: 21}}>
        <Image 
          source={Images.icProfile}
          style={{width: 48, height: 48, marginRight: 13}}
        />
        <View>
          <Text style={{fontWeight: '600', color: TEXT_PRIMARY, marginBottom: 5}}>Usup Suparma</Text>
          <Text style={{fontSize: 12, color: TEXT_SECONDARY}}>Mar 24, 2022</Text>
        </View>
      </View>
      <View style={{height: 483}}>
        <View style={{paddingVertical: 24, paddingHorizontal: 21}}>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 5}
            style={{ lineHeight: 21 }}>{item.text}</Text>
          {
            lengthMore ? <Text
            onPress={toggleNumberOfLines}
            style={{ lineHeight: 21, marginTop: 10, color: BLUE }}>{textShown ? 'Less' : 'More'}</Text>
            : null
          }
        </View>
        <Image
          source={item.image}
          style={styles.image}/>
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
