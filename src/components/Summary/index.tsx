import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {

    const summary = useSummary();

    return(
        <SummaryContainer>

            {/* Sumary 01 */}
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            {/* Sumary 02 */}
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

                {/* Sumary 03 */}
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}