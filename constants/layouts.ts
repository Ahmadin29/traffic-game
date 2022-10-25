import { Dimensions } from 'react-native';

const width = Dimensions.get('window').height;
const height = Dimensions.get('window').width;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};