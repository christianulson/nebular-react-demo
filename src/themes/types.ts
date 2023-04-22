import { NebularTheme } from '@nebular-react/styles';
import { Property } from 'csstype';

export interface CustomTheme extends NebularTheme {
  layout_padding_top: Property.PaddingTop;
  card_header_with_select_padding_top: Property.PaddingTop;
  card_header_with_select_padding_bottom: Property.PaddingBottom;
  slide_out_background: Property.BackgroundColor;
  slide_out_shadow_color: Property.BoxShadow;
  slide_out_shadow_color_rtl: Property.BoxShadow;
}
