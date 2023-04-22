import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-card-body-root': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },

    '.nebular-icon-root': {
      margin: '1rem'
    },

    '.nebular-card-footer-root': {
      textAlign: 'right'
    }
  }
}));
