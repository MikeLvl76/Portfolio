import { createContext } from "react";
import { Options } from "../../types/Options";

export const OptionsContext = createContext<Options>({
  list: {
    darkMode: false,
  },
  setList: () => undefined,
});
