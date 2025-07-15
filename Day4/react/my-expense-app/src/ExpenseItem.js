import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate /> {/* No props passed */}
            <h3>{props.amount}</h3>
            <h1>ExpenseItem</h1>
            <div className="expense-item-price">
                <h2>{props.title}</h2>
                <div>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;