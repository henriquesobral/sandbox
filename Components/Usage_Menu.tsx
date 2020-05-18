import * as React from "react";
import { ListItem, ListItemLabel } from "baseui/list";
import CircularProgress from "./CircularProgress";
import { LabelXSmall, ParagraphXSmall } from "baseui/typography";
import { styled } from "baseui";
import { expandBorderStyles } from "baseui/styles";

export default ({ progress }) => {
  return (
    <StyledRoot>
      <StyledArtworkContainer>
        <CircularProgress progress={progress} size={32} strokeWidth={2} />
      </StyledArtworkContainer>
      <StyledContent>
        <ListItemLabel description={"description"}>Label Four</ListItemLabel>
      </StyledContent>
    </StyledRoot>
  );
};

const StyledRoot = styled("div", ({ $theme }) => {
  return {
    alignItems: "center",
    backgroundColor: $theme.colors.backgroundPrimary,
    display: "flex",
    width: "100%"
  };
});

export const StyledContent = styled("div", ({ $theme }) => {
  return {
    ...expandBorderStyles($theme.borders.border100),
    alignItems: "center",
    borderTopStyle: "none",
    borderRightStyle: "none",
    borderLeftStyle: "none",
    display: "flex",
    flexGrow: 1,
    height: "72px",
    justifyContent: "space-between",
    paddingRight: $theme.sizing.scale500,
    marginLeft: $theme.sizing.scale500
  };
});

export const StyledArtworkContainer = styled("div", ({ $theme }) => {
  return {
    alignItems: "center",
    display: "flex",
    paddingLeft: $theme.sizing.scale700,
    paddingRight: $theme.sizing.scale700
  };
});
