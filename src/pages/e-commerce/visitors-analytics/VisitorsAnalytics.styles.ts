import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',

    '.nebular-card-root': {
      position: 'relative'
    },

    '.nebular-card-header-root': {
      borderBottom: 'none',
      h3: {
        margin: 0
      }
    },

    '.subtitle': {
      color: theme.text_hint_color
    },

    '.container': {
      display: 'flex',
      flexDirection: 'row'
    },

    '.chart-container': {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative'
    },

    '.chart-header': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '2.125rem'
    },

    '.legends': {
      ...theme.fns.mediaBreakpointDown('is', { paddingLeft: 0 })
    }
  }
}));
