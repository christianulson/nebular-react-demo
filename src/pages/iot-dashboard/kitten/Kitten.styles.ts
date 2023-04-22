import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.picture': {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'relative',
      borderTopLeftRadius: theme.card_border_radius,
      borderTopRightRadius: theme.card_border_radius,
      flex: 1
    },

    '.details': {
      padding: theme.card_padding
    },

    '.description': {
      textAlign: 'justify'
    },

    '.nebular-card-footer-root': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    },

    '.nebular-icon-root': {
      fontSize: '1.55rem',
      color: theme.color_primary_default,

      svg: {
        verticalAlign: 'top'
      }
    }
  }
}));
