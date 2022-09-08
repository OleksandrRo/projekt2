import { SelectStyled } from "../App.styled"
export const Choise = (props) => {

    return (
        <SelectStyled name={props.name} onChange={(e) => props.changeValue(e.target.value)}>
            {props.aray.map((e) => (
                <option key={e.id} value={e.value}>{e.name}</option>))}
        </SelectStyled>
    )
}