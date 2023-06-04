import React, { useState } from "react";
import { Text, Platform } from "react-native";
import { BLUE } from "../styles/Colors";

export default function ReadMoreText({
  style,
  numberOfLines = 5,
  children,
  readMoreText = "More",
  readLessText = "Less",
  readMoreStyle = {color: BLUE},
  readLessStyle = {color: BLUE},
  ...props
}) {
  const [readMore, setReadMore] = useState(false);
  const [text, setText] = useState({
    length: 0,
    isTruncatedText: false,
  });
  const getReadMoreStyle = () => {
    if(readMore){
      return readLessStyle;
    }
    return readMoreStyle;
  }
  
  function handleReadMoreText(textLayoutLines) {
    let textLength = 0;
    if (textLayoutLines.length > numberOfLines) {
      for (var line=0; line<numberOfLines; line++){
        textLength += textLayoutLines[line].text.length;
      }
      setText({ length: textLength, isTruncatedText: true });
      return;
    }
    setText({ length: children.length, isTruncatedText: false });

  }
  return (
    <>
      {Platform.OS === 'ios' && (
        <Text
          style={{height: 0}}
          onTextLayout={({ nativeEvent: { lines } }) => {
            if (text.length > 0) {
              return;
            }
            if (Platform.OS === 'ios') {
              handleReadMoreText(lines);
            }
          }}
        >
          {children}
        </Text>
      )}
      <Text
        style={style}
        numberOfLines={text.length === 0 ? numberOfLines : 0}
        onTextLayout={({ nativeEvent: { lines } }) => {
            if (text.length > 0) {
            return;
          }
          if (Platform.OS === 'android') {
            handleReadMoreText(lines);
          }
        }}
        {...props}
      >
        {text.isTruncatedText && !readMore && text.length !== 0
          ? `${children.slice(0, text.length - 10).trim()}...`
          : children}
        {text.isTruncatedText && (
          <Text
            style={getReadMoreStyle()}
            onPress={() => setReadMore(!readMore)}
          >
            {readMore ? readLessText : readMoreText}
          </Text>
        )}
      </Text>
    </>
  );
}