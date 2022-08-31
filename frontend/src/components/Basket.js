import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Basket = () => {
  const basket = useSelector((state) => state.product.basket);

  const [sum, setSum] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  let sumRef = useRef(0);

  useEffect(() => {
    sumRef = 0;
    basket.forEach((e) => (sumRef += e.price));
    setSum(sumRef);
    setTax((sumRef * 10) / 100);
    setTotal((sumRef * 110) / 100);
  }, [basket]);

  return (
    <>
      <Wrapper>
        <p>
          Toplam:
          {sum} ₺
        </p>
        <p>
          Vergi:
          {tax} ₺
        </p>
        <p>
          <b>
            Genel Toplam:
            {total} ₺
          </b>
        </p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 0 30px;
`;

export default Basket;
