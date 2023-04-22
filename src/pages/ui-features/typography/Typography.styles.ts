import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.font-row': {
      '&:first-of-type': {
        marginBottom: '2rem'
      },

      '.header': {
        alignItems: 'baseline'
      },

      p: {
        margin: 0
      }
    },

    '.headings-card': {
      h1: {
        margin: 0
      },

      '.header': {
        paddingBottom: '0.675rem',
        marginBottom: '0.675rem',

        '&:last-of-type': {
          marginBottom: 0
        }
      }
    },

    '.header': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingBottom: '1rem',
      marginBottom: '1rem',
      borderBottom: `1px solid ${theme.divider_color}`,

      '&:last-of-type': {
        borderBottom: 'none'
      },

      'div:first-of-type': {
        flex: 2,
        msFlex: '2 1 auto',
        lineHeight: 1,
        alignItems: 'flex-end',

        'h1, h2, h3, h4, h5, h6': {
          marginBottom: 0,
          marginTop: 0
        }
      },

      '.variants': {
        flex: 1,
        msFlex: '1 1 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        span: {
          paddingRight: '1rem',
          paddingLeft: '1rem'
        }
      },

      '.detail': {
        flex: 1,
        display: 'flex'
      }
    },

    '.article': {
      'h1, h2, h3, h4, h5, h6': {
        marginTop: 0,
        marginBottom: '0.5rem'
      }
    },

    '.colors': {
      display: 'flex',
      flexDirection: 'column',

      '.item': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.25rem',
        'h1, h2, h3, h4, h5, h6': {
          marginTop: 0
        },
        '&:last-of-type': {
          marginBottom: 0
        }
      },

      '.color': {
        width: '86px',
        height: '60px',
        borderTopRightRadius: '1rem',
        borderBottomLeftRadius: '1rem',
        ...theme.fns.ltr({ marginRight: '1rem' }),
        ...theme.fns.rtl({ marginLeft: '1rem' })
      },

      'h1, h2, h3, h4, h5, h6': {
        marginBottom: '0.25rem'
      }
    },

    '.text-link': {
      color: theme.link_text_color
    },

    '.bg-link': {
      background: theme.link_text_color
    },

    '.bg-heading': {
      background: theme.text_basic_color
    },

    '.bg-basic': {
      background: theme.text_basic_color
    },

    '.bg-hint': {
      background: theme.text_hint_color
    },

    '.bg-status-primary': {
      background: theme.text_primary_color
    },

    '.bg-status-success': {
      background: theme.text_success_color
    },

    '.bg-status-info': {
      background: theme.text_info_color
    },

    '.bg-status-warning': {
      background: theme.text_warning_color
    },

    '.bg-status-danger': {
      background: theme.text_danger_color
    },

    '.lists': {
      'h1, h2, h3, h4, h5, h6': {
        margin: 0
      }
    }
  }
}));
