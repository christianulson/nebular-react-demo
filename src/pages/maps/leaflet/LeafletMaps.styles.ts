import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-body-root': {
      padding: 0
    },

    '.leaflet-top, leaflet-bottom': {
      zIndex: 997
    },

    '.leaflet-container': {
      width: '100%',
      height: theme.card_height_large
    },

    '.leaflet-control-zoom a': {
      textDecoration: 'none'
    }
  }
}));
