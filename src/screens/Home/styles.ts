import { StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 16
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    padding: 24,
    marginBottom: -48,
    zIndex: 1
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    padding: 16,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_700,
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.LG,
    backgroundColor: theme.COLORS.GRAY_500
  },
  button: {
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_700,
    backgroundColor: theme.COLORS.BLUE_DARK
  },
  buttonText: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.MD,
  },
  containerList: {
    margin: 0,
    padding: 24,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_600
  },
  taskListStatus: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.GRAY_400
  },
  taskStatusContainer: {
    flexDirection: 'row',
    gap: 8
  },
  tasksCreatedText: {
    color: theme.COLORS.BLUE,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: 'bold'
  },
  tasksDoneText: {
    color: theme.COLORS.PURPLE,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: 'bold'
  },
  taskCount: {
    color: theme.COLORS.GRAY_200
  },
  listEmptyContainer: {
    flex: 1,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listEmptyText: {
    color: theme.COLORS.GRAY_300,
    fontSize: theme.FONT_SIZE.MD
  },
  listEmptyTextBold: {
    marginTop: 16,
    color: theme.COLORS.GRAY_300,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: 'bold'
  }
});