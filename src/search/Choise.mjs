
export const Choise = (props) => {

    return (
    <select name={props.name} onChange={(e) => props.changeValue(e.target.value)}>
        {props.aray.map((e) => (
            <option key={e.name} value={e.value}>{e.name}</option>))}
    </select>
    )
}