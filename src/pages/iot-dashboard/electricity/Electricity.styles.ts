import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.cards-container': {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden'
    },

    '.table-card, .chart-card': {
      boxShadow: 'none',
      marginBottom: 0,
      borderWidth: 0
    },

    '.table-card': {
      flex: '0 0 auto',
      ...theme.fns.mediaBreakpointDown('xl', { display: 'none' })
    },

    '.chart-card': {
      flex: '1 0 auto',
      '.nebular-card-header-root': {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.card_header_with_select_padding_top,
        paddingBottom: theme.card_header_with_select_padding_bottom,
        marginBottom: '-1px'
      }
    },

    '.type-select': {
      marginLeft: 'auto'
    },

    '.stats': {
      marginRight: '1rem',

      '> .caption': {
        display: 'block'
      }
    },

    '.nebular-tabset-root': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },

    '.nebular-tabset-tab': {
      padding: 0
    },

    '.nebular-list-item-root': {
      display: 'flex',
      alignItems: 'baseline',

      '&:first-of-type': {
        borderTop: 'none'
      }
    },

    '.month': {
      width: '2rem'
    },

    '.nebular-icon-root.down': {
      color: theme.color_danger_default
    },

    '.nebular-icon-root.up': {
      color: theme.color_success_default
    },

    '.results': {
      marginLeft: 'auto'
    }
  }
}));
