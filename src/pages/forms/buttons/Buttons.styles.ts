import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.buttons-row': {
      margin: '-0.5rem'
    },

    '.nebular-button-wrapper': {
      margin: '0.5rem'
    },

    '.action-icon': {
      ...theme.fns.ltr({ marginRight: '0.5rem' }),
      ...theme.fns.rtl({ marginLeft: '0.5rem' })
    },

    '.action-card': {
      height: '8rem'
    }
  }
}));
