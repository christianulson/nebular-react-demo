import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-body-root': {
      display: 'flex',
      height: `calc(100% - ${theme.card_margin_bottom})`
    },

    '.chart-info': {
      flex: 1,
      paddingTop: '0.7rem'
    },

    '.time-period': {
      marginTop: '1.5rem'
    },

    '.value': {
      marginTop: '0.2rem'
    },

    '.echarts': {
      flex: 1,
      position: 'relative',
      ...theme.fns.mediaBreakpointBetween('xl', 'xl', { flex: 2 }),
      ...theme.fns.mediaBreakpointBetween('sm', 'sm', { flex: 2 })
    }
  }
}));
