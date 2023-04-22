import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    overflow: 'auto',
    ...theme.fns.scrollbars(
      theme.card_scrollbar_color,
      theme.card_scrollbar_background_color,
      theme.card_scrollbar_width
    ),

    '.item': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '> *': {
        flex: 1
      },

      '&:first-of-type': {
        borderTop: 'none'
      },

      '.traffic-bar': {
        ...theme.fns.mediaBreakpointDown('is', { display: 'none' })
      }
    },

    '.delta': {
      display: 'flex',
      alignItems: 'center',

      '&.down': {
        color: theme.color_danger_default
      },

      '&.up': {
        color: theme.color_success_default
      }
    }
  }
}));
