import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    height: '100%',
    width: '30%',

    ...theme.fns.mediaBreakpointDown('md', { width: '100%', border: 'none' }),

    '.nebular-card-root': {
      boxShadow: 'none',
      borderWidth: 0,
      margin: 0,
      height: '100%'
    },

    '.body': {
      display: 'flex',
      flexDirection: 'column',
      padding: 0
    },

    '.track-info': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      flex: 1,
      padding: theme.card_padding
    },

    '.cover': {
      borderRadius: theme.card_border_radius,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '10rem',
      height: '10rem'
    },

    '.details': {
      textAlign: 'center',
      paddingTop: '1.5rem',

      h4: {
        margin: '0 0 0.5rem 0'
      },

      span: {
        color: theme.text_hint_color
      }
    },

    '.progress-wrap': {
      position: 'relative',
      height: '1rem'
    },

    '.progress-foreground': {
      backgroundColor: theme.color_primary_default,
      height: '2px',
      position: 'absolute',
      left: 0,
      marginTop: 'calc(0.75rem - 1px)',
      width: '100px'
    },

    '.progress': {
      appearance: 'none',
      width: '100%',
      background: 'transparent',
      height: '1.5rem',
      outline: 'none',
      position: 'absolute',

      ...theme.fns.thumb({
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        background: theme.color_primary_default,
        cursor: 'pointer',
        marginTop: 'calc(-0.5rem + 1px)',
        border: 'none'
      }),

      ...theme.fns.track({
        width: '100%',
        height: '2px',
        cursor: 'pointer',
        background: theme.border_basic_color_3
      })
    },

    '.timing': {
      paddingTop: '0.5rem',
      margin: '0 0.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      color: theme.text_hint_color,

      '.current': {
        ...theme.fns.ltr({ order: 0 }),
        ...theme.fns.rtl({ order: 1 })
      },
      '.remaining': {
        ...theme.fns.ltr({ order: 1 }),
        ...theme.fns.rtl({ order: 0 })
      }
    },

    '.controls': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...theme.fns.rtl({ flexDirection: 'row-reverse' }),
      padding: '1rem',
      maxWidth: '400px',
      width: '100%',
      margin: '0 auto',

      ...theme.fns.mediaBreakpointBetween('lg', 'lg', { padding: '0.5rem' })
    },

    '.control-button': {
      color: theme.text_hint_color,

      '&.on': {
        color: theme.color_primary_default
      },

      '.nebular-icon-root': {
        fontSize: '1.5em'
      },

      '&.medium': {
        ...theme.fns.mediaBreakpointBetween('lg', 'lg', {
          padding: theme.button_ghost_small_padding
        })
      }
    },

    '.volume': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
      position: 'relative',
      maxWidth: '400px',

      '.progress-wrap': {
        height: '2.25rem',
        margin: 0,
        width: '80%',

        '.progress-foreground': {
          left: 'auto',
          marginTop: 'calc(1rem + 1px)',
          zIndex: 0,
          maxWidth: '99.5%'
        },

        '.progress': {
          height: '2.25rem',
          overflow: 'visible',

          ...theme.fns.thumb({
            width: '1.5rem',
            height: '1.5rem',
            backgroundColor: theme.background_basic_color_1,
            boxShadow: `0 0.125rem 0.5rem 0 ${theme.border_basic_color_3}`,
            border: `1px solid ${theme.border_basic_color_3}`,
            marginTop: '-0.75rem',
            position: 'relative',
            zIndex: 10
          })
        }
      }
    },

    'volume-icon': {
      fontSize: '1em',
      color: theme.text_hint_color
    },

    '&.collapsed': {
      border: 'none',
      height: '4.5rem',

      '.header': {
        display: 'none'
      },

      '.body': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        overflow: 'visible'
      },

      '.footer': {
        display: 'none'
      },

      '.track-info': {
        height: '4.5rem',
        flexDirection: 'row',
        padding: 0,
        flex: 'none',

        '.cover': {
          height: '4.5rem',
          width: '4.5rem',
          flex: 'none'
        },

        '.details': {
          marginLeft: '0.875rem',
          textAlign: 'left',
          padding: 0,

          h4: {
            marginBottom: '0 0 0.125rem 0 !important'
          }
        }
      },

      '.progress-wrap': {
        width: 'calc(100% - 6rem)',
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 0,
        marginTop: 'calc(-0.75rem + 1px)',
        marginLeft: '5.25rem'
      },

      '.timing': {
        display: 'none'
      },

      '.controls': {
        padding: '0 1rem 0 0',
        maxWidth: 'inherit',
        width: 'inherit',
        margin: 0,

        '.nebular-button-wrapper': {
          display: 'none'
        },
        '.play-button, .skip-forward-button': {
          display: 'block',
          fontSize: '1.3rem',

          ...theme.fns.mediaBreakpointDown('is', {
            padding: '0.5rem'
          })
        },

        '.skip-forward-button': {
          ...theme.fns.mediaBreakpointDown('is', { display: 'none' })
        }
      },

      '.volume': {
        display: 'none'
      },

      '.track-info .details': {
        span: {
          ...theme.fns.mediaBreakpointDown('is', {
            display: 'inline-block',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          })
        }
      }
    }
  }
}));
