import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    width: '70%',
    borderRight: `${theme.divider_width} ${theme.divider_style} ${theme.divider_color}`,
    background: 'url(/images/square_pattern.svg)',
    backgroundSize: '75px',

    '&.dark-background': {
      backgroundImage: 'url(/images/square_pattern_cosmic.svg)'
    },

    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    ...theme.fns.mediaBreakpointDown('md', { width: '100%', border: 'none' }),

    '.room-selector': {
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center',
      flex: 1,
      margin: '0 auto',
      width: '90%',
      maxWidth: '650px',
      paddingBottom: '1rem'
    },

    '.nebular-card-root': {
      backgroundColor: 'transparent',
      borderWidth: 0,
      boxShadow: 'none',
      margin: 0
    },

    '.nebular-card-header-root': {
      borderColor: 'transparent'
    },

    svg: {
      width: '100%'
    },

    '.stroke-pattern': {
      fill: 'none',
      stroke: '#bdc4cd',
      strokeMiterlimit: 10,
      opacity: 0.1,
      strokeWidth: '1px'
    },

    '.stroked-element': {
      strokeWidth: '4px',
      stroke: '#bdc4cd',
      strokeMiterlimit: 10
    },

    '.room-border': {
      strokeWidth: '4px',
      stroke: '#bdc4cd',
      strokeMiterlimit: 10,
      fill: 'none'
    },

    '.room-bg': {
      fill: theme.card_background_color,
      stroke: 'transparent',
      cursor: 'pointer',
      strokeWidth: '4px'
    },

    '.room-bg-border-grad': {
      fill: 'none',
      stroke: 'none',
      strokeWidth: '4px'
    },

    '.room-text': {
      cursor: 'pointer',
      userSelect: 'none',
      pointerEvents: 'none',
      fill: theme.text_hint_color
    },

    '.selected-room': {
      zIndex: 40,

      '.room-text': {
        fill: theme.text_basic_color
      },
      '.room-border': {
        stroke: theme.color_primary_default
      }
    },

    '.header': {
      borderBottom: 'none',
      paddingBottom: 0
    }
  }
}));
