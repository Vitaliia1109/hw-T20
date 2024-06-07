import "./TotalPrice.css";

const TotalPrice = ({ totalPrice }) => {
  return <h3 className="text-right">Total price: ${totalPrice}</h3>;
};

export default TotalPrice;
