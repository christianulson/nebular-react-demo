import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    display: 'block',
    height: '17.5rem',
    width: '100%',

    '.echarts': {
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }
}));
