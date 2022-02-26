import styled from "styled-components";
import {Card} from "./Card";

const StyledCardList = styled.ul`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  width: 60%;
  margin: 60px auto;
`;

export const CardList = (props) => {
  const cards = props.books.map((book) =>
    <Card key={book.id} book={book} /> 
  );
  return <StyledCardList>{cards}</StyledCardList>;
}
