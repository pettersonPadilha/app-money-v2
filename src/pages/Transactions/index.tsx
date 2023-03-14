import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {
    return(
        <div>
            <Header/>
            <Summary/>

            {/* Table */}
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                                <td>
                                    <PriceHighLight variant="income">
                                        R$ 12.000,00
                                    </PriceHighLight>
                                </td>
                            <td>Vendas</td>
                            <td>13/04/2022</td>
                        </tr>

                        {/* row */}

                        <tr>
                            <td width="50%">Lanche</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 59,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                        
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}