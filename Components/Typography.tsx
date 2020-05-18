import * as React from "react";
import { LabelMedium, LabelSmall, ParagraphSmall } from "baseui/typography";
import { StyledLink } from "baseui/link";
export default () => {
  return (
    <>
      <ParagraphSmall>
        See more info about typography
        <StyledLink href="https://baseweb.design/guides/theming/#typography">
          Here
        </StyledLink>
      </ParagraphSmall>
      <LabelSmall>Teste Fonte e estilos LabelSmall</LabelSmall>
      <LabelMedium>Teste Fonte e estilos LabelMedium</LabelMedium>
    </>
  );
};
