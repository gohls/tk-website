import { useState } from "react";
import { Scheme, createTheme } from "src/styles/theme";

type SetScheme = (scheme: Scheme) => void;

const useScheme = (): [Scheme, SetScheme] => {
  const [scheme, setScheme] = useState<Scheme>("light");

  const switchScheme = (newSchema: Scheme) => {
    debugger;
    setScheme(newSchema);
  };

  //   useEffect(() => {
  //     if (!window) return

  //     const scheme = getCookie("scheme")
  //     setScheme(scheme === "light" ? "light" : "dark")
  //   }, [])

  return [scheme, switchScheme];
};

export default useScheme;
