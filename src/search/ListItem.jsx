
export const ListItem = (props) => {
    const delItem = (e) =>{
        props.setAllList(props.allList.filter(item => item !== e.target.id))
    }
    return <div>
        <button id={props.butonId} onClick={delItem} >X</button>
        <div>{props.name}</div>
    </div>
}