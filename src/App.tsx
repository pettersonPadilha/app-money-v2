import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaul";
import {GlobalStyle} from "./styles/global"
import { Transaction } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionContext";

export function App() {
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TransactionProvider>
        <Transaction/>
      </TransactionProvider>
    </ThemeProvider>
  )
}



