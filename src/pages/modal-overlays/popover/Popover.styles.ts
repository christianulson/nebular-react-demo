import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-card-body-root': {
      margin: '0 -0.5rem',

      '.nebular-button-wrapper, p': {
        margin: '0.5rem 0.5rem 0'
      }
    }
  },

  popoverCard: {
    margin: 0,
    maxWidth: '20rem'
  }
}));
