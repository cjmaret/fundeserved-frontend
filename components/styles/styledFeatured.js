import styled from 'styled-components';
import HospitalImage from '../../images/hospital.png';

export const FeaturedComponent = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const FeaturedTitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  line-height: 1.5;
`;

export const FeaturedParagraph = styled.p`
  margin: 0 0 2rem 0;
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  margin: 0 2rem 2rem 0;
  width: 30%;
  flex-grow: 1;
  overflow: hidden;
  &:last-child {
    margin-right: 0;
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 2rem 2rem 2rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 4rem;
  line-height: 1.5;
`;

export const CardParagraph = styled.p`
  margin: 0 0 2rem 0;
  line-height: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  // Addition lines for 2 line or multiline ellipsis
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export const ReadMore = styled.button`
  max-width: 45%;
  background-color: var(--red);
  padding: 1rem 2rem;
  border: none;
  color: white;
  border-radius: 2rem;
  transition: all 0.4s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const MainCard = styled.div`
  background-image: url('/hospital.png');
  object-fit: cover;
  background-position: center;
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  margin: 0 0 3rem 0;
  ${CardDetails} {
    margin: 5rem 0 5rem 3rem;
    width: 40%;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
  }
  ${ReadMore} {
    max-width: 35%;
  }
`;