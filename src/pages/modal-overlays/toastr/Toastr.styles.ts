import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.position-select': {
      minWidth: '13rem'
    },

    '.label': {
      display: 'block'
    },

    '.nebular-card-footer-root .nebular-button-wrapper:first-of-type': {
      ...theme.fns.ltr({ marginRight: '1rem' }),
      ...theme.fns.rtl({ marginLeft: '1rem' })
    }
  }
}));
