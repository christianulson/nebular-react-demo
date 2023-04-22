import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    '.title': {
      paddingLeft: '0.5rem'
    },

    '.nebular-card-header-root': {
      marginBottom: '-1px',
      '.nebular-icon-root': {
        color: theme.card_header_text_color,
        width: '0.8em',
        height: '0.8em'
      },
      alignItems: 'center',
      display: 'flex'
    },

    '.nebular-card-body-root': {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      overflow: 'hidden'
    },

    '.info': {
      display: 'flex',
      ...theme.fns.rtl({ flexDirection: 'row-reverse' }),
      justifyContent: 'space-between',
      padding: '0.75rem 0.75rem 0.5rem'
    },

    '.period': {
      width: '49%'
    },

    '.currency': {
      paddingRight: '0.25rem'
    },

    '.echarts': {
      flex: 1,
      position: 'relative',
      canvas: {
        borderBottomLeftRadius: theme.card_border_radius,
        borderBottomRightRadius: theme.card_border_radius
      }
    }
  }
}));
