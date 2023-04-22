import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: 1,
    padding: theme.card_padding,

    '.header': {
      marginLeft: '1rem',
      h2: {
        margin: 0,
        marginBottom: '0.5rem'
      }
    },

    '.echarts': {
      position: 'relative',
      height: '100%',
      ...theme.fns.mediaBreakpointDown('sm', { height: '75%' })
    }
  }
}));
