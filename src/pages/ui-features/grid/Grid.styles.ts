import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.show-grid': {
      '.row': {
        margin: '-0.5rem'
      },

      'div[class^=col-]': {
        padding: '0.5rem',
        boxSizing: 'border-box',

        div: {
          textAlign: 'center',
          backgroundColor: theme.background_basic_color_2,
          padding: '0.75rem 0.25rem',
          borderRadius: '0.25rem'
        }
      }
    },

    '.grid-h': {
      marginTop: '1.5rem',
      marginBottom: '0.5rem',

      '&:first-of-type': {
        marginTop: 0
      }
    },

    '.table-responsive': {
      marginTop: '1rem'
    }
  }
}));
