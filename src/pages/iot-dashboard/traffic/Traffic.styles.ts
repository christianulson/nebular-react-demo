import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',

    '.nebular-card-header-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.card_header_with_select_padding_top,
      paddingBottom: theme.card_header_with_select_padding_bottom,
      marginBottom: '-1px'
    },

    '.echarts': {
      flex: 1,
      position: 'relative',
      canvas: {
        borderBottomLeftRadius: theme.card_border_radius,
        borderBottomRightRadius: theme.card_border_radius
      }
    }
  }
}));
