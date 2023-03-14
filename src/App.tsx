import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaul";
import {GlobalStyle} from "./styles/global"

export function App() {
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <h1>ola mundo</h1>
    </ThemeProvider>
  )
}



