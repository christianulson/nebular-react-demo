import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>(() => ({
  root: {
    '.nebular-card-body-root': {
      display: 'flex',
      justifyContent: 'space-between',

      '.nebular-datepicker-input, .nebular-rangepicker-input, .nebular-datetime-picker-input': {
        width: '100%',
        '.nebular-form-field-container': {
          width: '100%',
          '.nebular-input-root': {
            width: '100%'
          }
        }
      }
    }
  }
}));
