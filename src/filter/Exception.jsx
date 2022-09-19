import { ExceptionStyled } from "../App.styled"
export const ExceptionComponent = ({exception, setException}) => {
    return <ExceptionStyled
        type="text"
        value={exception}
        onChange={(e) => setException(e.target.value)}
        placeholder="Exception ingredients..." />


}
