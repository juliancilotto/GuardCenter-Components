import type { ThemeConfig } from "antd";
import colorPalette from "./colorPalette";

const theme: ThemeConfig = {
  token: {
    colorPrimary: colorPalette.brand[600],
    colorError: colorPalette.error[500],
    colorWarning: colorPalette.warning[500],
    colorSuccess: colorPalette.success[500],
  },
  components: {
    Tabs: {
      cardBg: colorPalette.brand[200],
      itemColor: colorPalette.brand[25],
    },
    Button: {
      contentFontSizeLG: 14,
      fontWeight: 600,
      contentLineHeight: 20,
      primaryShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      defaultShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",

      colorPrimaryHover: colorPalette.brand[700],
      defaultHoverBorderColor: colorPalette.gray[300],
      borderColorDisabled: colorPalette.gray[100],
    },
  },
};

export default theme;
