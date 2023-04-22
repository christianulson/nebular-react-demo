import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-tabset-root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',

      '.nebular-tabset-tabsetUl': {
        borderColor: 'transparent',
        paddingBottom: '1px',
        '.nebular-tabset-tabLink': {
          padding: '1.25rem 2rem'
        }
      }
    },

    '.nebular-tabset-tab.nebular-tabset-tabActive > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      height: '100%'
    },

    '.slider-container': {
      display: 'flex',
      flex: 1,
      msFlex: '1 1 auto',
      justifyContent: 'center',
      alignItems: 'center'
    },

    '.slider-value-container': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '.value': {
        position: 'relative',
        margin: 0,

        '&.temperature::before': {
          position: 'absolute',
          content: '"°"',
          top: 0,
          right: '-0.85rem'
        },

        '&.humidity::before': {
          position: 'absolute',
          content: '"%"',
          top: '3px',
          right: '-1.6rem',
          fontSize: '0.7rem'
        }
      },

      '&.off': {
        '.value': {
          color: theme.text_hint_color,
          letterSpacing: '0.25rem',
          paddingLeft: '0.5rem',

          '&.temperature::before': {
            display: 'none'
          }
        },

        '.desc': {
          display: 'none'
        }
      }
    },

    '.nebular-radio-group': {
      display: 'flex',
      justifyContent: 'space-between'
    },

    '.nebular-radio-root': {
      flex: '0 0 auto',
      width: 'calc(3.5rem + 2px)',
      height: 'calc(3.5rem + 2px)',

      '.nebular-radio-outerCircle, .nebular-radio-innerCircle': {
        display: 'none'
      },

      label: {
        padding: 0
      },

      '.nebular-radio-text': {
        border: '1px solid transparent',
        fontSize: '2.5rem',
        padding: '0.5rem',
        margin: 0,
        color: theme.text_hint_color
      },

      '.nebular-radio-nativeInput:checked ~ .nebular-radio-text': {
        borderColor: theme.color_primary_default,
        borderRadius: theme.card_border_radius,
        color: theme.text_primary_color
      }
    }
  }
}));
