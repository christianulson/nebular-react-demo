import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    '.nebular-card-header-root': {
      flexDirection: 'row',
      paddingTop: theme.card_header_with_select_padding_top,
      paddingBottom: theme.card_header_with_select_padding_bottom
    },

    '.nebular-card-body-root': {
      padding: '1rem 0 0',
      flexDirection: 'column',
      flex: 1,
      overflow: 'hidden',
      display: 'flex'
    },

    '.chart-info': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      margin: `0 ${theme.card_padding}`
    },

    '.delta': {
      '&.up .direction': {
        color: theme.color_success_default
      },
      '&.down .direction': {
        color: theme.color_danger_default
      },

      position: 'absolute',
      display: 'inline-block',
      top: 0,
      right: 0,
      ...theme.fns.rtl({ left: 0, right: 'auto' })
    },

    '.echarts': {
      canvas: {
        borderBottomLeftRadius: theme.card_border_radius,
        borderBottomRightRadius: theme.card_border_radius
      },
      flex: 1,
      position: 'relative'
    }
  }
}));
