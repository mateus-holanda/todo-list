import { StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${theme.COLORS.GRAY_700}`,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    color: '#F2F2F2'
  }
});