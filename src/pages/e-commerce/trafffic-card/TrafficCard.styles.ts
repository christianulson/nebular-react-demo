import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-root': {
      display: 'flex'
    },

    '.nebular-revealcard-revealButton': {
      position: 'absolute',
      right: '1.25rem',
      top: '1rem',
      cursor: 'pointer',
      ...theme.fns.rtl({ right: 'auto', left: '1.25rem' }),
      padding: 0,
      color: theme.card_text_color,
      bottom: 'inherit'
    },

    '.nebular-revealCard-backContainer': {
      '.nebular-revealcard-revealButton': {
        '.nebular-icon-root': {
          transform: 'scaleX(-1)'
        }
      }
    }
  }
}));
