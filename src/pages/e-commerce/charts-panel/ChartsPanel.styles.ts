import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-tabset-root': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,

      ul: {
        borderColor: 'transparent',
        paddingBottom: '1px',
        '.nebular-tabset-tabLink': {
          padding: '1.25rem 2rem'
        }
      }
    },

    '.nebular-tabset-tab': {
      flex: 1,
      padding: '0 0 1.25rem',

      '& > div': {
        width: '100%',
        height: '100%',
        display: 'flex'
      }
    },

    '.chart-container': {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },

    '.echarts': {
      flex: 1,
      position: 'relative',
      padding: '0 1.25rem'
    }
  }
}));
