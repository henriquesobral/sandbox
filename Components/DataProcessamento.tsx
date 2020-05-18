import * as React from "react";
import { StatefulDatepicker } from "baseui/datepicker";
import pt from "date-fns/locale/pt";
import { SIZE } from "baseui/input";
import { PLACEMENT } from "baseui/popover";

export default () => (
  <StatefulDatepicker
    locale={pt}
    onChange={({ date }) => console.log(date)}
    size={SIZE.compact}
    formatString=" d/M/yyyy"
    placeholder="DD/MM/YYYY"
    mask={null}
    clearable
    overrides={{
      Popover: {
        props: {
          placement: PLACEMENT.bottomLeft
        }
      },
      Input: {
        style: ({ $theme }) => {
          return {
            ...$theme.typography.ParagraphSmall
          };
        }
      },
      Day: {
        style: ({
          $theme,
          $selected,
          $isHighlighted,
          $pseudoSelected,
          $pseudoHighlighted,
          $isHovered
        }) => {
          return {
            ":after": {
              backgroundColor: $selected
                ? $isHighlighted
                  ? $theme.colors.calendarDayBackgroundSelectedHighlighted
                  : $theme.colors.calendarDayBackgroundSelected
                : $pseudoSelected
                ? $isHighlighted
                  ? $theme.colors.calendarDayBackgroundPseudoSelectedHighlighted
                  : "transparent"
                : $isHovered || $isHighlighted || $pseudoHighlighted
                ? ($theme.colors as any).calendarDayBackgroundPseudoHighlighted
                : "transparent"
            }
          };
        }
      }
    }}
  />
);
