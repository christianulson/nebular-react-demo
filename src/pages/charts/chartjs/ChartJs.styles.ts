import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.chartjs': {
      display: 'block',
      height: theme.card_height_medium,
      width: '100%'
    }
  }
}));
