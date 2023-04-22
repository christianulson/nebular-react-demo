import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    display: 'block',
    flex: 1,
    position: 'relative'
  }
}));
