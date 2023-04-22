import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    h3: {
      margin: 0
    },

    '.nav-buttons': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      margin: '-0.5rem',

      '> *': {
        margin: '0.5rem'
      },

      justifyContent: 'center'
    },

    '.step-complete': {
      textAlign: 'center',
      padding: theme.stepper_step_content_padding,

      h3: {
        marginBottom: '0.5rem'
      },

      '.nebular-button-wrapper': {
        margin: '0.5rem'
      }
    }
  }
}));
