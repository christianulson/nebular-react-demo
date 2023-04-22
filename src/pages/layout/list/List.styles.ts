import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.list-card': {
      '.nebular-card-header-root': {
        borderBottom: 'none'
      },

      '.nebular-card-body-root': {
        padding: 0
      }
    },

    '.nebular-list-root': {
      ...theme.fns.scrollbars(
        theme.card_scrollbar_color,
        theme.card_scrollbar_background_color,
        theme.card_scrollbar_width
      )
    }
  }
}));
