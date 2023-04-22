import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  cardBody: {
    display: 'flex',
    height: '100%',
    padding: 0,
    ...theme.fns.mediaBreakpointDown('sm', { flexDirection: 'column' })
  }
}));
