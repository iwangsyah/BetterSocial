import React, { useCallback, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { BLUE } from '../../../styles/Colors';

export default function FeedText({text})  { 
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => setTextShown(!textShown);

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >=5); 
  }, []);
 
  return (
    <View style={{paddingVertical: 24, paddingHorizontal: 21}}>
      <Text onTextLayout={onTextLayout} numberOfLines={textShown ? undefined : 5} style={{ lineHeight: 21 }}>
        {text}
      </Text>
      { lengthMore ? (
        <Text onPress={toggleNumberOfLines} style={styles.txtMore}>
          {textShown ? 'Less' : 'More'}
        </Text>
      ) : null }
    </View>
  )
}

const styles = StyleSheet.create({
  txtMore: {
    lineHeight: 21, 
    marginTop: 10, 
    color: BLUE
  },
})