import Styles from "./button.module.scss";

/*
Props

title: String
kind: "primary" | "secondary"
 */
const Button = ({ title, kind }) => {
  const generateClassByKind = () => {
    if (kind === "secondary") {
      return Styles.secondary
    }
    return Styles.primary
  }
  return <button className={`${Styles.button} ${generateClassByKind()}`}>{title}</button>

}

export default Button;