import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-root': {
      position: 'relative'
    },

    '.nebular-flipcard-flipButton': {
      position: 'absolute',
      right: '0.625rem',
      top: '1rem',
      cursor: 'pointer',
      ...theme.fns.rtl({ right: 'auto', left: '0.625rem' }),
      padding: 0,
      color: theme.card_text_color,
      bottom: 'inherit',

      '.nebular-icon-root': {
        width: '1em',
        height: '1em'
      }
    },

    '.nebular-flipcard-backContainer': {
      '.nebular-flipcard-flipButton': {
        '.nebular-icon-root': {
          transform: 'scaleX(-1)'
        }
      }
    }
  }
}));
