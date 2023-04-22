import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-body-root': {
      display: 'block',

      '.nebular-button-wrapper': {
        width: '100%',
        marginBottom: '2rem',
        display: 'block',
        ...theme.fns.mediaBreakpointDown('lg', { padding: '0.8rem' }),
        ...theme.fns.mediaBreakpointDown('is', { padding: '0.75rem' }),

        '&:last-of-type': {
          marginBottom: 0
        }
      }
    }
  },

  dialogCard: {
    maxWidth: '600px',
    maxHeight: '500px'
  }
}));
