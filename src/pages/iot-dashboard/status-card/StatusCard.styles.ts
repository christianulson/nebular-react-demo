import { createStyles, CSSObject } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

interface StatusCardStylesParams {
  type: string;
}

export default createStyles<CustomTheme, string, StatusCardStylesParams>(
  (theme, { type }: StatusCardStylesParams) => {
    const getIconStyles = () => {
      const leftColor = theme[`button_hero_${type}_left_background_color`];
      const rightColor = theme[`button_hero_${type}_right_background_color`];
      const leftHoverColor = theme[`button_hero_${type}_hover_left_background_color`];
      const rightHoverColor = theme[`button_hero_${type}_hover_right_background_color`];

      const result: CSSObject = {
        backgroundImage: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        '&:hover': {
          backgroundImage: `linear-gradient(to right, ${leftHoverColor}, ${rightHoverColor})`
        }
      };

      return result;
    };

    return {
      root: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '6rem',
        cursor: 'pointer',

        '.icon-container': {
          height: '100%',
          padding: '0.625rem'
        },

        '.icon': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '5.75rem',
          height: '4.75rem',
          fontSize: '3.75rem',
          borderRadius: theme.card_border_radius,
          transition: 'width 0.4s ease',
          transform: 'translate3d(0, 0, 0)',
          WebkitTransformStyle: 'preserve-3d',
          WebkitBackfaceVisibility: 'hidden',
          color: theme.text_control_color,

          ...getIconStyles()
        },

        '&.off': {
          color: theme.text_hint_color,

          '.status, .title, .icon': {
            color: theme.text_hint_color
          },

          '.icon': {
            boxShadow: 'none',
            backgroundImage: 'linear-gradient(to right, transparent, transparent)'
          }
        },

        '.details': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          ...theme.fns.ltr({ padding: '0 0.5rem 0 0.75rem' }),
          ...theme.fns.rtl({ padding: '0 0.75rem 0 0.5rem' }),
          borderLeft: '1px solid transparent'
        },

        '.title': {
          margin: 0
        },

        '.status': {
          textTransform: 'uppercase'
        }
      }
    };
  }
);
