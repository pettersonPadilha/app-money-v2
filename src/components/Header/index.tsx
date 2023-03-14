import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <h1>App <span>Money</span> </h1>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );
}