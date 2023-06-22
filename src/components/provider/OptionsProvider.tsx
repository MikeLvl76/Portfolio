import { ReactNode, useState } from "react";
import { OptionsContext } from "../context/OptionsContext";
import { OptionsList } from "../../types/Options";

interface Props {
  children: ReactNode;
}

export default function OptionsProvider(props: Props) {
  const [list, setList] = useState<OptionsList>({
    darkMode: false,
  });

  return (
    <OptionsContext.Provider value={{ list, setList }}>
      {props.children}
    </OptionsContext.Provider>
  );
}
