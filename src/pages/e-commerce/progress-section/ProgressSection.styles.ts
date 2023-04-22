import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.progress-info': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: '2rem',

      '&:first-of-type': {
        marginTop: 0
      },

      '.description': {
        marginTop: '0.5rem'
      }
    }
  }
}));
