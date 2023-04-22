import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.show-hide-toggle': {
      display: 'block',
      position: 'absolute',
      top: '1.5rem',
      ...theme.fns.ltr({ right: '1.5rem' }),
      ...theme.fns.rtl({ left: '1.5rem' }),
      cursor: 'pointer',
      backgroundColor: 'transparent',
      zIndex: 2,

      ...theme.fns.mediaBreakpointDown('is', { right: '0.5rem' })
    },

    '.slide-out-container': {
      display: 'block',
      height: '100%',
      top: 0,
      overflow: 'hidden',
      transition: 'all 0.2s ease-out',
      ...theme.fns.ltr({
        borderTopRightRadius: theme.card_border_radius,
        borderBottomRightRadius: theme.card_border_radius
      }),
      ...theme.fns.rtl({
        borderTopLeftRadius: theme.card_border_radius,
        borderBottomLeftRadius: theme.card_border_radius
      }),
      position: 'absolute',
      padding: '1.5rem',
      width: '40%',
      ...theme.fns.mediaBreakpointDown('md', { width: '50%' }),
      ...theme.fns.mediaBreakpointDown('is', { width: '100%' }),

      '&::before': {
        display: 'block',
        height: '100%',
        top: 0,
        overflow: 'hidden',
        transition: 'all 0.2s ease-out',

        content: '" "',
        ...theme.fns.ltr({ right: 0 }),
        ...theme.fns.rtl({ left: 0 }),
        width: '100%',
        position: 'absolute',
        background: theme.slide_out_background,
        boxShadow: theme.slide_out_shadow_color,
        ...theme.fns.rtl({ boxShadow: theme.slide_out_shadow_color_rtl }),
        opacity: 0.9,
        zIndex: 1
      },

      '&.expanded': {
        left: '60%',
        ...theme.fns.rtl({ left: 'auto' }),
        ...theme.fns.rtl({ right: '60%' }),
        ...theme.fns.mediaBreakpointDown('md', {
          left: '50%',
          ...theme.fns.rtl({ right: '50%' })
        }),
        ...theme.fns.mediaBreakpointDown('is', {
          left: 0,
          ...theme.fns.rtl({ right: 0 })
        }),

        '.content-wrapper': {
          margin: 0
        }
      },

      '.content-wrapper': {
        zIndex: 1,
        position: 'relative',
        width: '100%',
        margin: '0 6rem',
        transition: 'all 0.2s ease-out',
        h4: {
          margin: 0
        }
      },

      '&.collapsed': {
        ...theme.fns.ltr({ left: 'calc(100% - 6rem)' }),
        ...theme.fns.rtl({ right: 'calc(100% - 6rem' }),
        ...theme.fns.mediaBreakpointDown('is', {
          left: 'calc(100% + 1px - 3rem)',
          ...theme.fns.rtl({ right: 'calc(100% - 3rem)' })
        })
      }
    }
  }
}));
