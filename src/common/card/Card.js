import React from "react";
import "./style.css";

const Card = ({ cardItem, addToCard, decreaseQty }) => {
  const totalPrice = cardItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section className="card-items">
        <div className="container d_flex">
          <div className="card-details">
            {cardItem.length === 0 && (
              <h1 className="no-items product">No Items in Card</h1>
            )}
            {cardItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="card-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="card-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="card-items-function">
                    <div className="removeCard">
                      <button className="removeCard">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cardControl d_flex">
                      <button
                        className="incCard"
                        onClick={() => addToCard(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCard"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="card-total product">
            <h2>Card Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
