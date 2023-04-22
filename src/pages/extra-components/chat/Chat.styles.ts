import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-chat-root': {
      margin: '3rem auto 0',
      width: '500px',
      ...theme.fns.mediaBreakpointDown('xxl', { width: '400px' }),
      ...theme.fns.mediaBreakpointDown('is', { width: '300px' })
    },

    '.chat-container': {
      marginBottom: '2rem',

      li: {
        paddingTop: '1rem'
      }
    },

    '.chat-description': {
      textAlign: 'center',
      margin: '0 auto',
      width: '52%',
      ...theme.fns.mediaBreakpointDown('md', { width: '90%' })
    },

    '.chat-features': {
      marginTop: '2.75rem'
    }
  }
}));
