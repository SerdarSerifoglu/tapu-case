import styled from "styled-components";
import ProductDefaultImage from "../media/product.png";
import LocationIcon from "../media/location-icon.svg";
import StarIcon from "../media/star.svg";
import BasketIcon from "../media/basket.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts, addBasket, deleteBasket } from "../redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const basket = useSelector((state) => state.product.basket);

  console.log("products", products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addBasketEvent = async (product) => {
    if (basket.filter((e) => e.id == product.id) == 0) {
      await dispatch(addBasket(product));
    }
  };

  const deleteBasketEvent = async (product) => {
    await dispatch(deleteBasket(product));
  };

  return (
    <>
      {products.map((product) =>
        basket.filter((basket) => basket.id == product.id).length > 0 ? (
          <Grid>
            <ImageSection>
              <Image src={ProductDefaultImage} />
            </ImageSection>
            <TitleSection>
              <b>{product.title}</b>
            </TitleSection>
            <DescriptonSection>{product.description}</DescriptonSection>
            <RateSection>
              <Image src={StarIcon} />
              <span>&nbsp;{product.rate}</span>
            </RateSection>
            <DistanceSection>
              <Image src={LocationIcon} />
              <span>&nbsp;{product.distance + "km"}</span>
            </DistanceSection>
            <PriceSection>{product.price + "₺"}</PriceSection>

            <AddBasketSection
              key={product.id}
              onClick={() => deleteBasketEvent(product)}
            >
              <Image src={BasketIcon} />
              <SpanStyled>&nbsp; SEPETTEN ÇIKAR</SpanStyled>
            </AddBasketSection>
          </Grid>
        ) : (
          <Grid>
            <ImageSection>
              <Image src={ProductDefaultImage} />
            </ImageSection>
            <TitleSection>
              <b>{product.title}</b>
            </TitleSection>
            <DescriptonSection>{product.description}</DescriptonSection>
            <RateSection>
              <Image src={StarIcon} />
              <span>&nbsp;{product.rate}</span>
            </RateSection>
            <DistanceSection>
              <Image src={LocationIcon} />
              <span>&nbsp;{product.distance + "km"}</span>
            </DistanceSection>
            <PriceSection>{product.price + "₺"}</PriceSection>

            <AddBasketSection
              key={product.id}
              onClick={() => addBasketEvent(product)}
            >
              <Image src={BasketIcon} />
              <SpanStyled>&nbsp; SEPETE EKLE</SpanStyled>
            </AddBasketSection>
          </Grid>
        )
      )}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "img title title"
    "img desc desc"
    "img rate distance"
    "img price price"
    "img basket basket";
  gap: 5px;
`;
const ImageSection = styled.div`
  grid-area: img;
  align-self: center;
  justify-self: center;
`;
const TitleSection = styled.div`
  grid-area: title;
`;
const DescriptonSection = styled.div`
  grid-area: desc;
`;
const DistanceSection = styled.div`
  grid-area: distance;
`;
const RateSection = styled.div`
  grid-area: rate;
`;
const PriceSection = styled.div`
  grid-area: price;
`;
const AddBasketSection = styled.div`
  grid-area: basket;
  margin-bottom: 10px;
`;

const Image = styled.img``;

const SpanStyled = styled.span`
  color: #e82223;
`;
export default Product;
