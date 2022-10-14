import styled from 'styled-components';

export const DonateSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-areas: '. main main sidebar .';
  grid-gap: 1.5rem 2rem;
  grid-template-columns: 1fr 4fr 4fr 4fr 1fr;
  padding: 2rem 0;
  max-width: 1120px;
`;

export const MainGroup = styled.div`
  grid-area: main;
  padding: 2rem 3rem 3rem;
  width: 600px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const ReturnButton = styled.a`
  font-size: 20px;
  padding: 0.5rem 0.5rem;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 4rem;
  width: 225px;
  text-align: center;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    transform: translate(1px, 1px);
  }
`;

export const InfoGroup = styled.div`
  width: 100%;
  display: flex;
`;

export const InfoImage = styled.img`
  width: 150px;
  margin-right: 20px;
`;

export const InfoDetailsGroup = styled.div``;

export const DetailsTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  & > span {
    font-weight: 700;
  }
`;

export const DetailsSubtitle = styled.p``;

export const DonateGroup = styled.div`
  margin: 2rem 0;
`;

export const DonateTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 1rem;
`;

export const DonateInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: 1px solid ${(props) => (props.inputError ? 'var(--red)' : 'grey')};
  border-radius: 5px;
  width: 100%;
  font-size: 40px;
`;

export const Dollar = styled.p`
  margin: 0;
`;

export const DonateInput = styled.input`
  border: none;
  font-family: inherit;
  font-size: 40px;
  font-weight: 700;
  width: 70%;
  text-align: right;
  outline: none;
  height: 95%;
`;

export const Cents = styled.p`
  margin: 0;
`;

export const DonateInputError = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: var(--red);
  text-align: center;
  line-height: 1;
  margin: 1rem 0 0 0;
`;

export const GuaranteeGroup = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  align-items: center;
`;

export const GuaranteeImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;

export const GuaranteeDetailsGroup = styled.div``;

export const GuaranteeTitle = styled.h3`
  font-size: 15px;
  margin: 0;
`;

export const GuaranteeSubtitle = styled.p`
  font-size: 12px;
  color: var(--grey);
  margin: 0;
  line-height: 1.5;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
  width: 300px;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const SidebarTitle = styled.h3`
  margin: 0.5rem 0;
`;

export const SidebarAmount = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  color: grey;
  border-bottom: 1px solid grey;
  padding-bottom: 2rem;
`;

export const SidebarDue = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;
