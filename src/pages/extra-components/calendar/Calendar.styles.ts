import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-1rem -0.5rem',
    justifyContent: 'center',

    ...theme.fns.mediaBreakpointUp('md', { justifyContent: 'flex-start' }),
    ...theme.fns.mediaBreakpointUp('lg', { margin: '-1.1rem' }),
    ...theme.fns.mediaBreakpointUp('xxxl', { margin: '-1rem' }),

    '.calendar-container': {
      margin: '1rem 0.5rem',
      ...theme.fns.mediaBreakpointUp('lg', { margin: '1rem' })
    },

    '.subtitle': {
      display: 'block',
      marginBottom: '0.5rem'
    }
  }
}));
