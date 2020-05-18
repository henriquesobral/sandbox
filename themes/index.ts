import { createTheme, createDarkTheme } from "baseui";
import lightColorTokens from "./LightTheme";
import darkColorTokens from "./DarkTheme";

const THEME = {
  light: "light",
  dark: "dark"
};

const lightOverrides = {
  colors: {
    backgroundPrimary: lightColorTokens.primaryB,

    // Button
    buttonPrimaryFill: lightColorTokens.accent,
    buttonPrimaryText: lightColorTokens.primaryB,
    buttonPrimaryHover: lightColorTokens.accent300,
    buttonPrimaryActive: lightColorTokens.accent200,

    // Tick
    tickFillSelected: lightColorTokens.accent,
    tickFillSelectedHover: lightColorTokens.accent,

    //Numbered Steps
    backgroundColorActiveCompleted: lightColorTokens.accent,

    // Calender date picker
    calendarHeaderBackground: lightColorTokens.accent,
    calendarDayBackgroundSelectedHighlighted: lightColorTokens.accent,
    calendarDayBackgroundPseudoSelected: lightColorTokens.accent,
    calendarDayBackgroundSelected: lightColorTokens.accent,
    calendarDayBackgroundPseudoHighlighted: lightColorTokens.primary50,
    calendarDayForegroundSelected: lightColorTokens.primaryB,
    calendarDayForegroundSelectedHighlighted: lightColorTokens.primaryB,

    // Toggle
    toggleFillChecked: lightColorTokens.accent,
    backgroundColor: lightColorTokens.accent,

    // Border
    borderFocus: lightColorTokens.accent,

    // Link
    linkText: lightColorTokens.primary500,
    linkVisited: lightColorTokens.primary500,
    linkHover: lightColorTokens.primary700,
    linkActive: lightColorTokens.primary700,

    // Progress bar
    progressbarTrackFill: lightColorTokens.mono900,
    progressbarBackgroundColor: lightColorTokens.accent,
    spinnerTrackFill: lightColorTokens.accent,
    spinnerBackgroundColor: lightColorTokens.accent,

    progressStepsActiveText: lightColorTokens.primary400,
    progressStepsActiveFill: lightColorTokens.primary50,
    progressStepsCompletedFill: lightColorTokens.primaryA,
    progressStepsCompletedText: lightColorTokens.primaryB,

    buttonPrimarySpinnerForeground: "transparent",
    buttonPrimarySpinnerBackground: lightColorTokens.primaryB,
    processingCardBackground: lightColorTokens.primaryB
  }
};

const darkOverrides = {
  colors: {
    backgroundPrimary: darkColorTokens.mono800,
    backgroundSecondary: darkColorTokens.mono800,
    backgroundTertiary: darkColorTokens.mono800,
    backgroundInversePrimary: darkColorTokens.mono800,
    backgroundInverseSecondary: darkColorTokens.mono800,

    listHeaderFill: darkColorTokens.mono800,
    listBodyFill: darkColorTokens.mono800,
    listIconFill: darkColorTokens.mono800,
    listBorder: darkColorTokens.mono800,

    // Button Primary
    buttonPrimaryFill: darkColorTokens.accent,
    buttonPrimaryText: darkColorTokens.primary,
    buttonPrimaryHover: darkColorTokens.accent300,
    buttonPrimaryActive: darkColorTokens.accent200,

    // Button Secondary
    buttonSecondaryFill: darkColorTokens.primary100,
    buttonSecondaryText: darkColorTokens.primaryB,
    buttonSecondaryHover: darkColorTokens.primary300,
    buttonSecondaryActive: darkColorTokens.primary300,

    // Button Terciary
    buttonTerciaryFill: darkColorTokens.primary100,
    buttonTerciaryText: darkColorTokens.primaryB,
    buttonTerciaryHover: darkColorTokens.primary300,
    buttonTerciaryActive: darkColorTokens.primary300,

    // Tick e Radio
    tickFillSelected: darkColorTokens.accent,
    tickFillSelectedHover: darkColorTokens.accent,
    tickMarkFill: darkColorTokens.primary,

    // Calender date picker
    calendarHeaderBackground: lightColorTokens.accent,
    calendarBackground: lightColorTokens.primary700,
    calendarDayBackgroundSelectedHighlighted: lightColorTokens.accent,
    calendarDayBackgroundPseudoSelected: lightColorTokens.accent,
    calendarDayBackgroundSelected: lightColorTokens.accent,
    calendarDayBackgroundPseudoHighlighted: lightColorTokens.primary500,
    calendarDayForegroundSelected: lightColorTokens.primaryB,
    calendarDayForegroundSelectedHighlighted: lightColorTokens.primaryB,

    // Toggle
    toggleFillChecked: darkColorTokens.accent,
    backgroundColor: darkColorTokens.accent,

    // Select -
    borderFocus: darkColorTokens.accent,
    inputFill: darkColorTokens.mono800,
    menuFill: darkColorTokens.primary700,
    menuFillHover: darkColorTokens.mono800,
    inputFillActive: darkColorTokens.primary700,

    // Tooltip
    tooltipBackground: darkColorTokens.primary700,
    tooltipText: darkColorTokens.primary,

    // Link
    linkText: darkColorTokens.primary500,
    linkVisited: darkColorTokens.primary500,
    linkHover: darkColorTokens.primary700,
    linkActive: darkColorTokens.primary700,

    // Progress bar
    progressbarTrackFill: darkColorTokens.mono200,
    progressbarBackgroundColor: darkColorTokens.accent,

    //Progres steps background
    // listHeaderFill: darkColorTokens.mono800,
    progressStepsActiveText: darkColorTokens.primary400,
    progressStepsActiveFill: darkColorTokens.primary600,
    progressStepsCompletedFill: darkColorTokens.primary,
    progressStepsCompletedText: darkColorTokens.mono1000,

    buttonPrimarySpinnerForeground: "transparent",
    buttonPrimarySpinnerBackground: darkColorTokens.primary100,
    processingCardBackground: darkColorTokens.mono700
  }
};

const LightTheme = createTheme(lightColorTokens, lightOverrides);
const DarkTheme = createDarkTheme(darkColorTokens, darkOverrides);

export { THEME, LightTheme, DarkTheme };
