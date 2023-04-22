import { CORPORATE_THEME } from '@nebular-react/styles';
import { CustomTheme } from './types';

export const CorporateTheme: CustomTheme = {
  ...CORPORATE_THEME,
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
  select_min_width: '6rem',
  slide_out_background: 'linear-gradient(270deg, #edf1f7 0%, #e4e9f2 100%)',
  slide_out_shadow_color: '0 4px 14px 0 #8f9bb3',
  slide_out_shadow_color_rtl: '0 4px 14px 0 #8f9bb3'
};
