import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-button-wrapper': {
      margin: '1rem'
    },

    '.size-medium-group': {
      marginTop: '2rem',
      borderTop: `1px solid ${theme.divider_color}`
    }
  }
}));
