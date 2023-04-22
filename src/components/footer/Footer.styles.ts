import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '.socials': {
      fontSize: '2rem',

      a: {
        padding: '0.4rem',
        color: theme.text_hint_color,
        transition: 'color ease-out 0.1s',

        '&:hover': {
          color: theme.text_basic_color
        }
      },

      ...theme.fns.mediaBreakpointDown('is', { fontSize: '1.5rem' })
    }
  }
}));
