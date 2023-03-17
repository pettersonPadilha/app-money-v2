import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Overlay,Content, CloseButton,TransactionType, TransactionTypeButton } from './styles';
import * as z from "zod";
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../lib/axios';
import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';


const newTransactionFormShema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income' , 'outcome'])

})

type newTransactionFormInputs = z.infer<typeof newTransactionFormShema>;

export function NewTransactionsModal() {

    const {createTransaction} = useContext(TransactionContext)

    const  {control,register, handleSubmit, formState: {isSubmitting}, reset} = useForm<newTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormShema),
        defaultValues: {
            type: "income"
        }
    })

    async function handleCreateNewTransaction(data:newTransactionFormInputs) {
        const {description, price, category,type} = data;

        await createTransaction({
            category,
            description,
            price,
            type
        })
      
        reset();
    }

    return(
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input type="text"  placeholder='Descrição' required {...register('description')}/>
                        <input type="number"  placeholder='Preço' required {...register('price', {valueAsNumber: true})}/>
                        <input type="text"  placeholder='Categoria' required {...register('category')}/>

                        <Controller 
                            control={control}
                            name="type"
                            render={(({field}) => {
                                return(
                                    <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant='income' value='income'>
                                        <ArrowCircleUp className='theme' size={24}/>
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={24}/>
                                        Saida
                                    </TransactionTypeButton>
                                </TransactionType>
                                )
                            })}
                        />

                        <button type='submit' disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>

            </Content>

        </Dialog.Portal>
    );
}