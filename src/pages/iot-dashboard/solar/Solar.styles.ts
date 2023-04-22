import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-body-root': {
      overflow: 'hidden'
    },

    '.echart': {
      position: 'relative',
      left: '1rem',
      height: 'calc(100% - 2 * 1rem)',
      width: '40%'
    },

    '.info': {
      marginLeft: '45%',
      paddingTop: '1rem'
    },

    '.value': {
      margin: 0
    },

    '.details': {
      color: theme.text_hint_color
    }
  }
}));
