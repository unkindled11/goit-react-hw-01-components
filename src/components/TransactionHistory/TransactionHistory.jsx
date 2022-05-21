import PropTypes from "prop-types";

import styles from "./transactionHistory.module.css"

const TransactionHistory = ({ items }) => {

    const element = items.map(item => (

        <tr className={styles.row} key={item.id}>
            <td className={styles.rowElement} >{item.type}</td>
            <td className={styles.rowElement} >{item.amount}</td>
            <td className={styles.rowElement} >{item.currency}</td>
        </tr>

    ));
 
    return (

        <table className={styles.transactionHistory}>

            <thead className={styles.head}>

                <tr className={styles.row}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>

            </thead>

            <tbody>{element}</tbody>
        </table>

    );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

