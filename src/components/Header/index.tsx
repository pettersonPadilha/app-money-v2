import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <h1>App <span>Money</span> </h1>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionsModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    );
}
