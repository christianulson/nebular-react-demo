import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-checkbox-root': {
      marginBottom: '1rem'
    },

    '.form-inline .nebular-form-field-fullWidth': {
      flex: 1
    },

    '.form-inline > *': {
      margin: '0  1.5rem 1.5rem 0'
    },

    '.nebular-card-root.inline-form-card .nebular-card-body-root': {
      paddingBottom: 0
    }
  }
}));
