import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    height: theme.list_item_line_height,
    maxWidth: '7rem',

    '.value-prev, .value-now': {
      flex: 1
    },

    '.progress-line-container': {
      flex: 1,
      marginBottom: '0.1875rem'
    },

    '.progress-line-prev, .progress-line-now': {
      height: '100%',
      width: '0.7rem'
    },

    '.progress-line-prev': {
      backgroundColor: theme.border_basic_color_3,
      ...theme.fns.ltr({ marginLeft: 'auto', marginRight: '0.25rem' }),
      ...theme.fns.rtl({ marginLeft: '0.25rem', marginRight: 'auto' })
    },

    '.progress-line-now': {
      ...theme.fns.ltr({ marginLeft: '0.25rem', marginRight: 'auto' }),
      ...theme.fns.rtl({ marginLeft: 'auto', marginRight: '0.25rem' }),

      '&.success': {
        backgroundColor: theme.color_success_default
      },

      '&.failure': {
        backgroundColor: theme.color_danger_default
      }
    }
  }
}));
