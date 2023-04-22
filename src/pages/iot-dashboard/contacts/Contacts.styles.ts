import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    overflow: 'hidden',

    '.nebular-tabset-root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',

      ul: {
        paddingBottom: '1px',
        '.nebular-tabset-tabLink': {
          padding: '1.25rem 2rem'
        }
      }
    },

    '.nebular-tabset-tab': {
      padding: 0
    },

    '.contact': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '&:first-of-type': {
        borderTop: 'none'
      }
    }
  }
}));
