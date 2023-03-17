import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {

    interface TransactionProps {
        id:number;
        description:string;
        category: string;
        price:number;
        type: 'income' | 'outcome';
        createdAt: string;
    }

    const [transaction , setTransaction] = useState<TransactionProps[]>([]);

    async function loadTransactions() {
        const response = await fetch("http://localhost:3333/transaction")
        const data = await response.json();
        setTransaction(data);
    }
    
    useEffect(() => {
        loadTransactions();
    },[])


    return(
        <div>
            <Header/>
            <Summary/>

            {/* Table */}
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        {transaction.map(item => {
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