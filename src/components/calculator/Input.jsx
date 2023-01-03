import style from "./index.module.css";

export const Input = props => {
    return (
        <>
            <input type="text" onChange={props.change} value={props.val}/>
        </>
    )
}
