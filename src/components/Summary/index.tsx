import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {

    const {transactions} = useContext(TransactionContext);
    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'income') {
            acc.income += transaction.price;
            acc.total += transaction.price;
        } else {
            acc.outcome += transaction.price;
            acc.total -= transaction.price;
        }


        return acc;
    },
        {
            income:0,
            outcome:0,
            total:0
        }
    )


    return(
        <SummaryContainer>

            {/* Sumary 01 */}
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{summary.income}</strong>
            </SummaryCard>

            {/* Sumary 02 */}
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{summary.outcome}</strong>
            </SummaryCard>

                {/* Sumary 03 */}
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}