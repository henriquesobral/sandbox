import * as React from "react";
import { Select, SIZE } from "baseui/select";

export default () => {
  const [value, setValue] = React.useState([]);
  return (
    <Select
      size={SIZE.compact}
      backspaceRemoves={false}
      creatable
      deleteRemoves={false}
      options={[
        {
          label: (
            <div>
              Project 1<br />
              Teste
            </div>
          ),
          id: "#F0F8FF"
        },
        { label: "Project 2", id: "#FAEBD7" },
        { label: "Project 3", id: "#00FFFF" },
        { label: "Project 4", id: "#7FFFD4" },
        { label: "Project 5", id: "#F0FFFF" },
        { label: "Project 6", id: "#F5F5DC" }
      ]}
      value={value}
      filterOutSelected={false}
      required
      placeholder="Selecione o sistema de coord..."
      onChange={params => setValue(params.value)}
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.ParagraphSmall
            };
          }
        }
      }}
    />
  );
};
