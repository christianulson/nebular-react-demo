import { DEFAULT_THEME } from '@nebular-react/styles';
import { CustomTheme } from './types';

export const LightTheme: CustomTheme = {
  ...DEFAULT_THEME,
  variables: {
    ...DEFAULT_THEME.variables,
    // Darker semantic colors keep white text and outline/ghost labels at WCAG AA.
    primary: '#274bdb',
    success: '#007d6c',
    info: '#0066cc',
    warning: '#8a5200',
    danger: '#c41d4a'
  },
  // Button/alert/tag tokens resolve to the 500 palette.
  color_basic_600: '#5c6b8a',
  color_primary_500: '#274bdb',
  footer_text_highlight_color: 'var(--color-primary-600)',
  color_success_500: '#007d6c',
  color_info_500: '#0066cc',
  color_warning_500: '#8a5200',
  color_danger_500: '#c41d4a',
  layout_padding_top: '2.25rem',
  menu_item_icon_margin: '0 0.5rem 0 0',
  card_height_tiny: '13.5rem',
  card_height_small: '21.1875rem',
  card_height_medium: '28.875rem',
  card_height_large: '36.5625rem',
  card_height_giant: '44.25rem',
  card_margin_bottom: '1.875rem',
  card_header_with_select_padding_top: '0.5rem',
  card_header_with_select_padding_bottom: '0.5rem',
  select_min_width: '8rem',
  slide_out_background: '#f7f9fc',
  slide_out_shadow_color: '0 4px 14px 0 #8f9bb3',
  slide_out_shadow_color_rtl: '0 4px 14px 0 #8f9bb3'
};
