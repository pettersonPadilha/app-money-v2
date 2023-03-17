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
}


interface TransactionProviderProps {
    children : ReactNode
}

/* Create context  */


export const TransactionContext = createContext({} as TransactionContextType);


export function TransactionProvider({children}:TransactionProviderProps) {
    const [transactions , setTransaction] = useState<TransactionProps[]>([]);

    async function loadTransactions() {
        const response = await fetch("http://localhost:3333/transaction")
        const data = await response.json();
        setTransaction(data);
    }
    
    useEffect(() => {
        loadTransactions();
    },[])
    return(
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    );
}