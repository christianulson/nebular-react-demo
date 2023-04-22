import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-card-header-root': {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',

      p: {
        width: '80%'
      }
    }
  }
}));
