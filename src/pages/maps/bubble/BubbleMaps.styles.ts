import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-card-body-root': {
      paddingTop: '1.25rem'
    },

    '.echarts': {
      position: 'relative',
      height: '100%'
    }
  }
}));
