import styles from "./AppName.module.css"
import { FaAmazon } from "react-icons/fa";
function AppName(){
    return  <h1 className={styles.heading}>
    <b>TODO App </b>
    <FaAmazon />
  </h1>
}
export default AppName;