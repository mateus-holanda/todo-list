import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minWidth: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 8,
    borderColor: theme.COLORS.GRAY_400,
    backgroundColor: theme.COLORS.GRAY_500,
  },
  checkIcon: {
    marginLeft: 12
  },
  taskDescription: {
    padding: 8,
    flexShrink: 1,
    color: theme.COLORS.GRAY_100
  },
  taskDescriptionDone: {
    padding: 8,
    flexShrink: 1,
    color: theme.COLORS.GRAY_300,
    textDecorationLine: 'line-through'
  },
  removeIcon: {
    marginRight: 8
  }
})