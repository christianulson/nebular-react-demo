import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'block',
    height: '100%',
    width: '60%',
    ...theme.fns.mediaBreakpointDown('sm', { width: '100%', height: '50%' }),

    '.leaflet-container': {
      height: '100%',
      backgroundColor: theme.background_basic_color_2
    },

    '.leaflet-top, .leaflet-bottom': {
      zIndex: 997
    },

    '.leaflet-bar': {
      boxShadow: 'none'
    },

    '.leaflet-control-zoom': {
      border: 'none !important',

      a: {
        backgroundColor: theme.color_primary_default,
        color: theme.text_alternate_color,
        borderBottom: 'none',

        '&:hover': {
          backgroundColor: theme.color_primary_600
        }
      },

      '.leaflet-disabled': {
        backgroundColor: theme.color_primary_disabled,
        cursor: 'default',
        '&:hover': {
          backgroundColor: theme.color_primary_disabled
        }
      },

      '.leaflet-control-zoom-in': {
        borderTopLeftRadius: theme.button_rectangle_border_radius,
        borderTopRightRadius: theme.button_rectangle_border_radius
      },

      '.leaflet-control-zoom-out': {
        marginTop: '1px',
        borderBottomLeftRadius: theme.button_rectangle_border_radius,
        borderBottomRightRadius: theme.button_rectangle_border_radius
      }
    }
  }
}));
