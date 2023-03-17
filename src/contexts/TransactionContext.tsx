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

interface createTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
    
}

interface TransactionContextType {
    transactions:TransactionProps[];
    fetchTransactions: (query?:string) => Promise<void>;
    createTransaction: (data:createTransactionInput) => Promise<void> 
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
                    _sort: 'createdAt',
                    _order: 'desc',
                    q:query
            }
                })
                setTransaction(response.data)

                
    }

    async function createTransaction(props:createTransactionInput) {
        const {category,description,price,type} = props;
        const response =  await api.post("transaction", {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })
        setTransaction(state => [response.data,...state ]);
       }
    
    useEffect(() => {
        fetchTransactions();
    },[])
    return(
        <TransactionContext.Provider value={{transactions, fetchTransactions,createTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}