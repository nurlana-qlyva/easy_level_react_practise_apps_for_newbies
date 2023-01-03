import style from "./index.module.css";

const isOperator = value => {
    return (
        !isNaN(value) || value == "." || value == "="
    )
}

const Button = props => <div className={`${style.button} ${isOperator(props.children) ? null : style.operator}`} onClick={props.onclick}>{props.children}</div>

export default Button;
