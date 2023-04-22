import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    position: 'relative',
    marginTop: '-1.5rem',
    width: '100%',
    maxWidth: '300px',

    img: {
      width: '100%',
      height: 'auto',
      visibility: 'hidden'
    },

    '.svg-container': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: 2
    },

    '.temperature-bg': {
      position: 'absolute',
      width: '88%',
      height: '88%',
      top: '13%',
      left: '6%',
      borderRadius: '50%',
      zIndex: 1,

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: `${theme.divider_width} ${theme.divider_style} ${theme.divider_color}`
    },

    '.power-bg': {
      '.nebular-button-root': {
        position: 'absolute',
        width: '5.25rem',
        height: '5.25rem',
        backgroundColor: theme.card_background_color,
        borderRadius: '50%',
        bottom: '2%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        zIndex: 2,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: `${theme.divider_width} ${theme.divider_style} ${theme.divider_color}`,

        '&:hover': {
          backgroundColor: theme.button_ghost_basic_hover_background_color,
          borderColor: theme.button_ghost_basic_hover_border_color
        },

        '&:active': {
          backgroundColor: theme.button_ghost_basic_active_background_color,
          borderColor: theme.button_ghost_basic_active_border_color
        },

        '&:focus': {
          backgroundColor: theme.button_ghost_basic_focus_background_color,
          borderColor: theme.button_ghost_basic_focus_border_color
        }
      },

      '&.on': {
        '.power-icon': {
          color: theme.color_primary_default
        }
      }
    },

    '.power-icon': {
      position: 'absolute',
      top: '50%',
      marginTop: '-0.625rem',
      left: '50%',
      marginLeft: '-0.625rem'
    }
  }
}));
