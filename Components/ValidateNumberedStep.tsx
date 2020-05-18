/*
Copyright (c) 2018-2020 Uber Technologies, Inc.
This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from "react";
import { getOverrides } from "baseui/esm/helpers/overrides.js";
import {
  StyledNumberStep,
  StyledNumberIcon,
  StyledContent,
  StyledContentTitle,
  StyledNumberContentTail,
  StyledContentDescription
} from "baseui/progress-steps";
import { Check, Delete } from "baseui/icon";
import {
  NumberedStepProps,
  NumberedStepOverrides
} from "baseui/progress-steps";
import { Override } from "baseui/overrides";

// import type { NumberedStepPropsT } from './types.js';

export interface ValidateNumberedStepProps {
  overrides?: ValidateNumberedStepOverrides;
  isError?: boolean;
}

export interface ValidateNumberedStepOverrides extends NumberedStepOverrides {
  ErrorIcon?: Override<any>;
}

function ValidateNumberedStep({
  overrides = {},
  isCompleted,
  isActive,
  isLast,
  isError,
  title,
  step,
  children
}: NumberedStepProps & ValidateNumberedStepProps) {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledNumberStep);
  const [Icon, iconProps] = getOverrides(overrides.Icon, StyledNumberIcon);
  const [ErrorIcon, errorIconProps] = getOverrides(
    overrides.ErrorIcon,
    StyledNumberIcon
  );
  const [Tail, tailProps] = getOverrides(
    overrides.Tail,
    StyledNumberContentTail
  );
  const [Content, contentProps] = getOverrides(
    overrides.Content,
    StyledContent
  );
  const [Title, titleProps] = getOverrides(overrides.Title, StyledContentTitle);
  const [Description, descriptionProps] = getOverrides(
    overrides.Description,
    StyledContentDescription
  );
  const [CheckIcon, checkIconProps] = getOverrides(overrides.Icon, Check);

  const [DeleteIcon, deleteIconProps] = getOverrides(
    overrides.ErrorIcon,
    Delete
  );

  const sharedProps = {
    $isCompleted: isCompleted,
    $isActive: isActive
  };

  return (
    <Root {...sharedProps} {...rootProps}>
      {isError ? (
        <ErrorIcon {...sharedProps} {...errorIconProps}>
          {!isCompleted && <DeleteIcon size={20} {...deleteIconProps} />}
        </ErrorIcon>
      ) : (
        <Icon {...sharedProps} {...iconProps}>
          {!isCompleted && <span>{step}</span>}
          {isCompleted && <CheckIcon size={20} {...checkIconProps} />}
        </Icon>
      )}
      {!isLast && <Tail {...sharedProps} {...tailProps} />}
      <Content {...sharedProps} {...contentProps}>
        <Title {...sharedProps} {...titleProps}>
          {title}
        </Title>
        <Description {...descriptionProps}>{children}</Description>
      </Content>
    </Root>
  );
}

ValidateNumberedStep.defaultProps = {
  isCompleted: false,
  isLast: false
};

export default ValidateNumberedStep;
