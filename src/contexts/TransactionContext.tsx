import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";


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
       const response = await  api.get("/transaction", {
        params: {
            q:query
        }
       })


        setTransaction(response.data);
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