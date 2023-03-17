import { Children, createContext, ReactNode, useEffect, useState } from "react";


interface TransactionProps {
    id:number;
    description:string;
    category: string;
    price:number;
    type: 'income' | 'outcome';
    createdAt: string;
}

interface TransactionContextType {
    transactions:TransactionProps[];
    fetchTransactions: (query?:string) => Promise<void>;
}


interface TransactionProviderProps {
    children : ReactNode
}

/* Create context  */


export const TransactionContext = createContext({} as TransactionContextType);


export function TransactionProvider({children}:TransactionProviderProps) {
    const [transactions , setTransaction] = useState<TransactionProps[]>([]);

    async function fetchTransactions(query?:string) {
        const url = new URL("http://localhost:3333/transaction");

        if(query) {
            url.searchParams.append('q',query);
        }

        const response = await fetch(url)
        const data = await response.json();
        setTransaction(data);
    }
    
    useEffect(() => {
        fetchTransactions();
    },[])
    return(
        <TransactionContext.Provider value={{transactions, fetchTransactions}}>
            {children}
        </TransactionContext.Provider>
    );
}