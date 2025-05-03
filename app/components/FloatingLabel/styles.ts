import { StyleSheet } from 'react-native'
import { Colors } from '@constants'

const styles = StyleSheet.create({
  inputContainer: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    position: 'relative',
  },
  input: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 0,
    color: Colors.light.text,
    paddingHorizontal: 16
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },

  
})

export default styles;
