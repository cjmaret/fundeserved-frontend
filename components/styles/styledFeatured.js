import styled from 'styled-components';

export const FeaturedComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 2rem;
  max-width: 1080px;
  width: 100%;
  background-color: var(--offWhite);
`;

export const FeaturedTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 4rem;
  line-height: 1.2;
`;

export const FeaturedParagraph = styled.p`
  margin: 0 0 3rem 0;
  font-size: 2rem;
  line-height: 1.2;
`;

export const CardGroup = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1rem;
  margin: 0;

  position: relative;
`;

export const CardLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Category = styled.p`
  position: absolute;
  padding: 0 0.25rem;
  top: 5%;
  right: 5%;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  font-size: 0.75rem;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 1rem;
  overflow: hidden;
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardTitle = styled.h3`
  margin: 0.5rem 0;
  width: 95%;
  font-size: 1rem;
  line-height: 1.2;
  color: var(--grey);
`;

// export const CardDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
// `;

// export const AmountRaised = styled.p`
//   margin: 0 0 0.5rem 0;
//   font-size: 0.9rem;
//   font-weight: 700;
//   line-height: 1.2;
// `;

///////

//////

//////

/*
import styled from 'styled-components';

export const FeaturedComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: 1080px;
  width: 90%;
`;

export const FeaturedTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 4rem;
  line-height: 1.2;
`;

export const FeaturedParagraph = styled.p`
  margin: 0 0 3rem 0;
  font-size: 2rem;
  line-height: 1;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 300px;
  @media (min-width: 500px) {

  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  margin: 0 0 2rem 0;
  width: 100%;
  &:last-child {
    margin-right: 0;
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 1rem;
  overflow: hidden;
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  line-height: 1.2;
`;

export const CardParagraph = styled.p`
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
  font-size: 0.75rem;
  color: var(--grey);
`;

export const AmountRaised = styled.p`
  margin: 0 0 .5rem 0;
  font-size: .9rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const ReadMore = styled.button`
  width: 40%;
  background-color: var(--red);
  padding: 0.5rem;
  border: none;
  color: white;
  border-radius: 2rem;
  transition: all 0.4s ease;
  font-size: 0.75rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const MainCard = styled.div`
  position: relative;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 200px;
  margin: 0 0 3rem 0;
  ${CardDetails} {
    margin: 2rem 0 2rem 1rem;
    width: 40%;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
  }
  ${ReadMore} {
    max-width: 40%;
  }
`;

export const MainCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0.75rem;
  background-color: white;
  border-radius: 1rem;
  width: 65%;
  top: 40%;
  left: 3%;
  transform: translate(0, 0);
`;

export const MainCardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
*/
