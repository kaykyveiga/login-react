/* eslint-disable react/prop-types */
import "./Button.css"

const Button = ({ id, text }) => {
  return <button id={id}>{text}</button>
}

export default Button