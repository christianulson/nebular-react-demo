import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-body-root': {
      display: 'flex',
      flexDirection: 'column'
    },

    '.location, .date': {
      display: 'block'
    },

    '.location': {
      marginBottom: '0.1rem'
    },

    '.today': {
      display: 'flex',
      justifyContent: 'space-around'
    },

    '.today-temperature': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '2rem 1.5rem'
    },

    '.today-icon': {
      color: theme.color_primary_default,
      fontSize: '10rem',
      lineHeight: 1,
      marginTop: '-4rem',
      marginLeft: 'auto',
      marginRight: '0.4rem'
    },

    '.today-details': {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '2rem'
    },

    '.parameter': {
      flex: '1 1 auto',
      textAlign: 'center'
    },

    '.parameter-name, .parameter-value': {
      display: 'block'
    },

    '.caption': {
      textTransform: 'uppercase'
    },

    '.weekly-forecast': {
      display: 'flex',
      justifyContent: 'space-around',
      margin: 'auto 0'
    },

    '.day': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',

      '.nebular-icon-root': {
        width: '1.5rem',
        height: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        color: theme.card_text_color
      }
    }
  }
}));
