import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    padding: '1.5rem 4.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '-1rem',

    '.legend-chart, .period-select': {
      paddingTop: '1rem',
      ...theme.fns.ltr({ paddingLeft: '0.5rem' }),
      ...theme.fns.rtl({ paddingRight: '0.5rem' })
    },

    '.period-select': {
      ...theme.fns.mediaBreakpointUp('md', {
        ...theme.fns.ltr({ marginLeft: 'auto' }),
        ...theme.fns.rtl({ marginRight: 'auto' })
      })
    }
  }
}));
