import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-header-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: 'none',
      paddingTop: theme.card_header_with_select_padding_top,
      paddingBottom: theme.card_header_with_select_padding_bottom
    },

    '.nebular-list-root': {
      overflowX: 'hidden',
      ...theme.fns.scrollbars(
        theme.card_scrollbar_color,
        theme.card_scrollbar_background_color,
        theme.card_scrollbar_width
      )
    },

    '.nebular-list-item-root': {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      margin: '0 -0.25rem'
    },

    '.visited-date, .visited-pages-count, .visited-percentage': {
      flex: '1 0 auto',
      margin: '0 0.25rem'
    },

    '.value': {
      marginTop: '0.25rem',
      color: theme.color_success_default
    },

    '.delta': {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',

      '&.down': {
        color: theme.color_danger_default
      },

      '&.up': {
        color: theme.color_success_default
      },

      '.nebular-icon-root': {
        svg: {
          verticalAlign: 'top'
        }
      }
    }
  }
}));
