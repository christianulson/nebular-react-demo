import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

    '.legend': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '&:not(:last-of-type)': {
        ...theme.fns.ltr({ marginRight: '1rem' }),
        ...theme.fns.rtl({ marginLeft: '1rem' })
      }
    },

    '.legend-item-color': {
      minWidth: '15px',
      minHeight: '15px',
      borderRadius: '0.2rem'
    },

    '.legend-title': {
      ...theme.fns.ltr({ paddingLeft: '0.75rem' }),
      ...theme.fns.rtl({ paddingRight: '0.75rem' }),
      whiteSpace: 'nowrap'
    }
  }
}));
