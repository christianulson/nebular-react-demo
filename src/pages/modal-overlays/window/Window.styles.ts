import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-button-wrapper + .nebular-button-wrapper': {
      marginLeft: '2rem',
      ...theme.fns.mediaBreakpointDown('is', { marginLeft: 0 })
    },

    '.nebular-card-body-root': {
      ...theme.fns.mediaBreakpointDown('xxl', { display: 'flex' }),
      ...theme.fns.mediaBreakpointDown('is', { display: 'block' })
    },

    '.nebular-button-wrapper': {
      ...theme.fns.mediaBreakpointDown('xxl', { flex: 1, padding: '0.8rem' }),
      ...theme.fns.mediaBreakpointDown('is', {
        width: '100%',
        display: 'block',
        marginBottom: '2rem',
        padding: '0.75rem'
      })
    }
  },

  form: {
    display: 'flex',
    flexDirection: 'column',

    '.text-label': {
      marginTop: '1.5rem'
    }
  }
}));
