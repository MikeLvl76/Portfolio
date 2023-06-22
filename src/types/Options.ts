import { Dispatch, SetStateAction } from "react";

export type OptionsList = {
  darkMode: boolean,
}

export type Options = {
  list: OptionsList,
  setList: Dispatch<SetStateAction<OptionsList>>;
};
