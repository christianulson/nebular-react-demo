import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    '.logo-container': {
      display: 'flex',
      alignItems: 'center'
    },

    '.theme-select': {
      minWidth: '5rem',
      ...theme.fns.ltr({ paddingRight: '1.25rem' }),
      ...theme.fns.rtl({ paddingLeft: '1.25rem' })
    },

    '.dir-toggle': {
      display: 'flex',
      alignItems: 'center'
    },

    '.nebular-action-root': {
      height: 'auto',
      display: 'flex',
      alignContent: 'center'
    },

    '.nebular-user-root': {
      cursor: 'pointer'
    },

    '.nebular-search-root': {
      display: 'flex',
      '.nebular-button-root': {
        padding: '0 !important',
        '.nebular-icon-root': {
          marginRight: 0
        }
      }
    },

    '.header-container': {
      display: 'flex',
      alignItems: 'center',
      width: 'auto',

      '.sidebar-toggle': {
        ...theme.fns.ltr({ paddingRight: '1.25rem' }),
        ...theme.fns.rtl({ paddingLeft: '1.25rem' }),
        textDecoration: 'none',
        color: theme.text_hint_color,
        '.nebular-icon-root': {
          fontSize: '1.75rem'
        }
      },

      '.logo': {
        padding: '0 1.25rem',
        fontSize: '1.75rem',
        ...theme.fns.ltr({ borderLeft: `1px solid ${theme.divider_color}` }),
        ...theme.fns.rtl({ borderRight: `1px solid ${theme.divider_color}` }),
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        ...theme.fns.mediaBreakpointDown('sm', { display: 'none' })
      }
    },

    '.control-item': {
      ...theme.fns.mediaBreakpointDown('sm', { display: 'none' })
    },

    '.user-action': {
      ...theme.fns.mediaBreakpointDown('sm', { borderLeft: 'none', padding: 0 }),
      '.nebular-user-userName': {
        ...theme.fns.mediaBreakpointDown('sm', { display: 'none' })
      }
    }
  }
}));
