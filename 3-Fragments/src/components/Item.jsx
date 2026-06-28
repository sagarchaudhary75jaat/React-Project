import styles from"./Item.module.css"
const Item = ({ food }) => {
  return <li className={`${styles['Kg-item']} `}><span className={styles['Kg-span']}>{food}</span></li>;
};

export default Item;