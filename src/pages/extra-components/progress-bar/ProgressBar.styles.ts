import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-progress-bar-root ~ .nebular-progress-bar-root': {
      marginTop: '1rem'
    },

    '.progress-bar-container': {
      display: 'flex',
      alignItems: 'center'
    },

    '.interactive-progress-bar': {
      flex: 1,
      margin: '0 1rem'
    }
  }
}));
