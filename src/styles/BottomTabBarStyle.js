import {Platform, StyleSheet} from 'react-native';
import {BG_PRIMARY, LINE} from './Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 48,
    borderTopWidth: Platform.OS === 'ios' ? 0.2 : 0.25,
    borderColor: LINE,
    backgroundColor: BG_PRIMARY,
    paddingTop: 10,
    //   shadowColor: '#000000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 8,
    //   },
    //   elevation: 25,
    //   shadowRadius: 8,
    //   shadowOpacity: 0.5,
  },
  label: {
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: '500',
  },
});
