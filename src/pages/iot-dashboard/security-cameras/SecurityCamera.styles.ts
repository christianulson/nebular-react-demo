import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.nebular-card-header-root': {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '0.625rem',
      paddingBottom: '0.625rem'
    },

    '.single-view-button-wrapper': {
      ...theme.fns.ltr({ marginLeft: 'auto' }),
      ...theme.fns.rtl({ marginRight: 'auto' })
    },

    '.single-view-button': {
      '.nb-square': {
        fontSize: '1.2rem'
      },
      padding: '0.338rem 0.338rem',

      ...theme.fns.ltr({
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }),
      ...theme.fns.rtl({
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      })
    },

    '.grid-view-button': {
      svg: {
        verticalAlign: 'top'
      },

      ...theme.fns.ltr({
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }),
      ...theme.fns.rtl({
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      })
    },

    '.grid-container': {
      height: '100%',
      display: 'flex'
    },

    '.single-view, .grid-view': {
      flex: '1 0 100%'
    },

    '.grid-view': {
      display: 'flex',
      flexWrap: 'wrap',

      '.camera': {
        flex: '1 0 50%'
      }
    },

    '.single-view .camera': {
      width: '100%',
      height: '100%'
    },

    '.camera': {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'relative',

      '&::before': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 1
      },

      '&:hover::before': {
        opacity: 0
      }
    },

    '.camera-name': {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      color: 'white',
      background: theme.overlay_backdrop_background_color,
      padding: '0.5rem 1rem'
    },

    '.nebular-actions-action': {
      ...theme.fns.mediaBreakpointDown('xl', { padding: 0 })
    }
  }
}));
