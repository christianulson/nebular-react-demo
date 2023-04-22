import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    width: '100%',

    '.visitors-title': {
      marginTop: '1rem'
    },

    '.statistics-chart': {
      margin: '1.5rem 0',
      width: '100%',

      '.echarts': {
        display: 'block',
        height: '13.75rem',
        width: '100%',
        position: 'relative'
      }
    },

    '.chart-values': {
      display: 'flex'
    },

    '.chart-value': {
      flex: 1
    },

    '.legend': {
      flex: 1,
      marginLeft: 0,
      justifyContent: 'flex-start'
    }
  }
}));
