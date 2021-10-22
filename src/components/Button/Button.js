export const Button = ({text, onClick}) => {
    return (
        <button className = "Button" onClick = {onClick}>{ text}</button>
    )
}