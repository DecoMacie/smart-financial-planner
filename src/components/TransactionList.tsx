import TransactionLoader from "../assets/TransactionLoader";

const items = TransactionLoader();
console.log(items);

const TransactionList = () => {
  return (
    <>
      <h1>TransactionList</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
