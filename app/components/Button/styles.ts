import { StyleSheet } from 'react-native';
import { Colors } from '@constants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
});
export default styles;