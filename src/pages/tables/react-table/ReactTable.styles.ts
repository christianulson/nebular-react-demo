import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    '.react-table-container': {
      table: {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        display: 'table',
        width: '100%',
        maxWidth: '100%',
        overflow: 'auto',
        wordBreak: 'keep-all'
      },

      'table tr th, table tr th a': {
        fontFamily: theme.text_paragraph_font_family,
        fontSize: theme.text_paragraph_font_size,
        fontWeight: theme.text_paragraph_font_weight,
        lineHeight: theme.text_paragraph_line_height,
        color: theme.text_basic_color
      },

      'table tr td': {
        fontFamily: theme.text_paragraph_font_family,
        fontSize: theme.text_paragraph_font_size,
        fontWeight: theme.text_paragraph_font_weight,
        lineHeight: theme.text_paragraph_line_height,
        color: theme.text_basic_color
      },

      'table tr th, table tr td': {
        position: 'relative',
        padding: '0.875rem 1.25rem',
        border: `1px solid ${theme.divider_color}`,
        verticalAlign: 'middle'
      },

      '.titles': {
        th: {
          padding: '0.875rem 1.25rem',
          ...theme.fns.ltr({ paddingRight: '2.75rem' }),
          ...theme.fns.rtl({ paddingLeft: '2.75rem' }),

          '.sort-icon': {
            fontWeight: theme.text_paragraph_font_weight,
            position: 'absolute',
            margin: 0,
            ...theme.fns.ltr({ right: '0.75rem' }),
            ...theme.fns.rtl({ left: '0.75rem' }),
            top: '0.85rem',
            lineHeight: '1rem'
          }
        }
      },

      'thead tr': {
        background: theme.background_basic_color_1
      },

      'tbody tr': {
        '&:hover': {
          backgroundColor: theme.background_basic_color_3
        },

        '&:nth-of-type(2n)': {
          backgroundColor: theme.background_basic_color_2
        }
      },

      '.react-table-pagination': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem',
        alignItems: 'center',

        '> *': {
          marginLeft: '0.3rem',
          marginRight: '0.3rem'
        },

        '.react-table-pagination-nav': {
          display: 'flex',
          padding: 0,
          fontFamily: theme.button_text_font_family,
          fontSize: theme.button_medium_text_font_size,
          lineHeight: theme.button_medium_text_line_height,
          border: `${theme.divider_width} solid ${theme.divider_color}`,
          borderRadius: theme.border_radius,

          '.react-table-page-link': {
            '&:not(:last-of-type)': {
              '.nebular-button-wrapper': {
                ...theme.fns.ltr({ borderRight: `1px solid ${theme.divider_color}` }),
                ...theme.fns.rtl({ borderLeft: `1px solid ${theme.divider_color}` })
              }
            },

            '.nebular-button-wrapper': {
              a: {
                fontSize: theme.button_medium_text_font_size,
                lineHeight: theme.button_medium_text_line_height,
                backgroundColor: 'transparent',
                color: theme.button_outline_primary_text_color,
                padding: '0.75rem 0.95rem',
                border: 'none',

                '&:focus,&:hover,&:active': {
                  boxShadow: 'none'
                },

                '.nebular-icon-root': {
                  width: '0.75rem'
                }
              },

              '&.nebular-button-wrapperDisabled': {
                a: {
                  color: theme.button_outline_primary_disabled_text_color
                }
              }
            }
          }
        }
      }
    }
  }
}));
