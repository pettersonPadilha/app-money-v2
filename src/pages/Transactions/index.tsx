import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {

    const {transactions} = useContext(TransactionContext)
  
    return(
        <div>
            <Header/>
            <Summary/>

            {/* Table */}
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        {transactions.map(item => {
                            return(
                                <tr key={item.id}>
                                <td width="50%">{item.description}</td>
                                    <td>
                                        <PriceHighLight variant={item.type}>
                                           {item.price}
                                        </PriceHighLight>
                                    </td>
                                <td>{item.category}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}