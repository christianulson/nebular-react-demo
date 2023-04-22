import { createStyles } from '@nebular-react/styles';
import { CustomTheme } from '../../../../themes/types';

export default createStyles<CustomTheme>((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.card_header_with_select_padding_top,
    paddingBottom: theme.card_header_with_select_padding_bottom,

    ...theme.fns.ltr({ paddingRight: '4rem' }),
    ...theme.fns.rtl({ paddingLeft: '4rem' })
  }
}));
