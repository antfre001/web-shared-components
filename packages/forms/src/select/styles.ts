import { createMemoClass } from "@sk-web-gui/theme";
import { cx } from "@sk-web-gui/utils";

export const useSelectClass = createMemoClass((props) => {

  const classes = cx(
    "form-select"
  );

  return classes;
});
