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
      contentFontSize: 14,
      colorPrimaryHover: colorPalette.brand[700],
      defaultHoverBorderColor: colorPalette.gray[300],
      borderColorDisabled: colorPalette.gray[100],
    },
    Input: {
      activeShadow: "0 0 0 3px rgba(110, 152, 144, 0.2)",
      errorActiveShadow: "0 0 0 3px rgba(240, 68, 56, 0.24)",
    },
    InputNumber: {
      activeShadow: "0 0 0 3px rgba(110, 152, 144, 0.2)",
      errorActiveShadow: "0 0 0 3px rgba(240, 68, 56, 0.24)",
    },
    Slider: {
      handleColor: colorPalette.brand[500],
      railBg: "#EAECF0",
      trackBg: colorPalette.brand[500],
    },
  },
};

export default theme;
