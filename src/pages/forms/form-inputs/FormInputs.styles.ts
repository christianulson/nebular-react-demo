import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-card-body-root': {
      overflow: 'visible',
      paddingTop: 0,

      '> *': {
        marginTop: '1rem'
      }
    },

    '.full-name-inputs, .validation-checkboxes': {
      display: 'flex',
      margin: '1rem -0.5rem 0 -0.5rem',

      '> *': {
        margin: '0 0.5rem'
      }
    },

    '.checkbox-radio': {
      display: 'flex'
    },

    '.demo-items': {
      flex: '1 0 33%'
    }
  }
}));
