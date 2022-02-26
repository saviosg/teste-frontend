import styled from "styled-components";
import {parseISO,intlFormat} from "date-fns";

const StyledCard = styled.li`
  background-color: #fff;
  width: 259px;
  height: 380px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  font-family: Inter, sans-serif;
`;

const CardDescription = styled.div`
  color: #787885;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardImg = styled.img`
  width: 228px;
  height: 224px;
  margin: 10px auto;
  border-radius: 4px;
`;

const CardInfo = styled.div`
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  max-height: 150px;
  gap: 10px;
`;

const CardAuthor = styled.div`
  color: #787885;
`;

const CardGenre = styled.div`
  border: 1px solid #9DC2FF;
  border-radius: 4px;
  padding: 6px;
`;

const CardInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2264D1;
  font-weight: 500;
  height: 30px;
  gap: 15px;
`;

export const Card = (props) => {
  const published = parseISO(props.book.published);

  return (
  <StyledCard>
    <CardImg src={props.book.image} alt={props.book.title}/>
    <CardInfo>
      <div>{props.book.title}</div>
      <CardAuthor>{props.book.author}</CardAuthor>
      <CardDescription>{props.book.description}</CardDescription>
      <CardInfoBottom>
        <CardGenre>{props.book.genre}</CardGenre>
        <div>{intlFormat(published, {day: 'numeric', month: 'short', year: '2-digit'})}</div>
      </CardInfoBottom>
    </CardInfo>
  </StyledCard>
  );
}
