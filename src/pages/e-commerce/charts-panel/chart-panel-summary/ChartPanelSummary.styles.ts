import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.background_basic_color_2,
    justifyContent: 'space-between',
    padding: '1.5rem 4rem 1rem',
    border: `1px solid ${theme.border_basic_color_3}`,
    borderLeft: 'none',
    borderRight: 'none',

    '& > div': {
      ...theme.fns.mediaBreakpointDown('sm', { flex: '50%' })
    }
  }
}));
