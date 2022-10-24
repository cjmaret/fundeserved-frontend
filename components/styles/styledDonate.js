import styled from 'styled-components';

export const DonateSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  max-width: 1120px;
`;

export const MainGroup = styled.div`
  padding: 2rem;
  width: ${(props) => (props.mobileWidth ? '100%' : '60%')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  @media (min-width: 700px) {
    margin-right: 2rem;
    max-width: 600px;
  }
`;

export const ReturnButton = styled.a`
  font-size: 1.5rem;
  width: 175px;
  padding: 0.5rem 0;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 0 0 2rem 0;
  text-align: center;
  align-self: flex-start;
  transition: opacity 0.4s ease;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.7;
  }
  @media (min-width: 700px) {
    width: 225px;
    font-size: 2rem;
    margin: 0 0 4rem 0;
  }
`;

export const InfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const InfoImage = styled.img`
  width: 150px;
  margin-right: 20px;
  object-fit: cover;
`;

export const InfoDetailsGroup = styled.div``;

export const DetailsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin: 1rem 0 0 0;
  line-height: 1.3;
  & > span {
    font-weight: 700;
  }
  @media (min-width: 700px) {
    line-height: 1.5;
  }
`;

export const DetailsSubtitle = styled.p``;

export const DonateGroup = styled.div`
  margin: 1rem 0;
  @media (min-width: 700px) {
    margin: 2rem 0;
  }
`;

export const DonateTitle = styled.h3`
  font-size: 2rem;
  margin: 0.5rem 0;
`;

export const DonateInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: 1px solid ${(props) => (props.inputError ? 'var(--salmon)' : 'grey')};
  border-radius: 5px;
  width: 100%;
  font-size: 2.5rem;
  @media (min-width: 500px) {
    font-size: 4rem;
  }
`;

export const Dollar = styled.p`
  margin: 0;
`;

export const DonateInput = styled.input`
  line-height: 1;
  border: none;
  font-family: inherit;
  font-size: 2.5rem;
  font-weight: 700;
  width: 70%;
  text-align: right;
  outline: none;
  height: 95%;
  @media (min-width: 500px) {
    font-size: 4rem;
  }
`;

export const Cents = styled.p`
  line-height: 1;
  margin: 0;
`;

export const DonateInputError = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--salmon);
  text-align: center;
  line-height: 1;
  margin: 1rem 0 0 0;
`;

export const TallySidebarGroup = styled.div`
  width: 40%;
  max-width: 275px;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

export const TallyMobileGroup = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

export const TallyTitle = styled.h3`
  margin: 0.5rem 0;
`;

export const TallyAmount = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  color: grey;
  border-bottom: 1px solid grey;
  padding-bottom: 1rem;
`;

export const TallyDue = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

export const GuaranteeGroup = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const GuaranteeImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 0;
  @media (min-width: 500px) {
    margin-right: 15px;
  }
`;

export const GuaranteeDetailsGroup = styled.div`
  margin: 1rem 0 0 0;
`;

export const GuaranteeTitle = styled.h3`
  font-size: 2rem;
  margin: 0 0 1rem 0;
  line-height: 1.5;
`;

export const GuaranteeSubtitle = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
  @media (min-width: 500px) {
    font-size: 1.2rem;
  }
`;
