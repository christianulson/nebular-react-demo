import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.ck-editor__editable': {
      minHeight: `calc(${theme.card_height_large} - 8.5rem)`,
      maxHeight: `calc(${theme.card_height_large} - 8.5rem)`,
      ...theme.fns.scrollbars(
        theme.card_scrollbar_color,
        theme.card_scrollbar_background_color,
        theme.card_scrollbar_width
      )
    }
  }
}));
