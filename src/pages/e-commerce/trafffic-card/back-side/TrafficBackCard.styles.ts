import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    '.nebular-card-body-root': {
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',

      '.echarts': {
        flex: 1,
        position: 'relative',

        canvas: {
          borderBottomLeftRadius: theme.card_border_radius,
          borderBottomRightRadius: theme.card_border_radius
        }
      }
    }
  }
}));
