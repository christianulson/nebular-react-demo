import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',

    ...theme.fns.mediaBreakpointDown('md', {
      flexDirection: 'column',
      justifyContent: 'space-between'
    }),

    '&.expanded .room-selector-container': {
      ...theme.fns.mediaBreakpointDown('md', {
        display: 'none'
      })
    },

    '.room-selector-container, .player': {
      ...theme.fns.mediaBreakpointDown('md', { width: '100%', border: 'none' })
    },

    '.toggle': {
      display: 'none',

      ...theme.fns.mediaBreakpointDown('md', {
        display: 'inline-block',
        position: 'absolute',
        top: '0.7rem',
        left: '50%',
        transform: 'translateX(-50%) rotate(180deg)',
        fontSize: '2rem'
      })
    },

    '&.expanded': {
      '.toggle': {
        transform: 'translateX(-50%)'
      }
    }
  }
}));
