import styled from 'styled-components';
import { Form } from './styledForm';

export const FundraiserSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1080px;
  width: 95%;
  margin: 50px 0 0 0;
  @media (min-width: 700px) {
    margin: 75px 0 150px 0;
  }
`;

export const TitleGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  width: 100%;
  text-align: left;
  margin: 0 0 15px 0;
  line-height: 1.2;
  @media (min-width: 460px) {
    font-size: 3.5rem;
  }
  @media (min-width: 700px) {
    font-size: 4.5rem;
    width: 55%;
    margin: 0 0 0 25px;
  }
`;

export const UpdateButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 0 2rem 0;
  @media (min-width: 700px) {
    width: 40%;
    margin: 0;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin: 0 0 2rem 0;
  }
`;

export const UpdateButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 0;
  height: 50%;
  border: none;
  border-radius: 10px;
  transition: opacity 0.4s ease;
  background-color: var(--green);
  width: 40%;
  font-size: 1.2rem;
  color: var(--white);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media (min-width: 700px) {
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    width: 170px;
    margin: 0 1rem 1rem 0;
  }
`;

export const FundraiserInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Details = styled.div`
  width: 100%;
  @media (min-width: 700px) {
    margin-right: 20px;
    width: 60%;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 15px;
  @media (min-width: 700px) {
    margin-bottom: 25px;
  }
`;

export const Description = styled.p`
  white-space: pre-wrap;
  margin: 0;
`;

export const Sidebar = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (min-width: 700px) {
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    width: 40%;
  }
`;

export const AmountGroup = styled.p`
  font-size: 1.2rem;
  margin: 0;
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const AmountValue = styled.p``;

export const AmountRaised = styled.span`
  font-weight: 700;
  font-size: 2.2rem;
  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

export const PercentageBarGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 15px 0;
  padding: 10px 0;
`;

export const PercentageBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(255, 123, 111, .5);
  border-radius: 10px;
`;

export const PercentageBarFilled = styled.div`
  position: absolute;
  width: ${(props) => (props.filled <= 100 ? props.filled : 100)}%;
  height: 10px;
  background-color: var(--salmon);
  border-radius: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Button = styled.a`
  font-size: 1.5rem;
  width: 100%;
  max-width: 400px;
  background-color: var(--salmon);
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  text-align: center;
  transition: opacity 0.4s ease;
  color: var(--white);
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:hover {
    text-decoration: none;
  }
`;

export const ShareButton = styled(Button)`
  background-color: var(--green);
`;

export const DonateButton = styled(Button)``;

export const DonorList = styled.div`
  margin: 25px 0;
  width: 100%;
`;

export const DonorCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 10px;
  font-size: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DonorCardPhoto = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 50px;
`;

export const DonorCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`;

export const DonorCardName = styled.h3`
  margin: 0;
`;

export const DonorCardAmount = styled.p`
  margin: 0;
`;

export const DonorListSeeAllButton = styled(Button)`
  width: 60%;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  @media (min-width: 700px) {
  }
`;

export const UpdateFormContainer = styled(ModalContainer)`
  visibility: ${(props) => (props.isUpdateModalOpen ? 'visible' : 'hidden')};
`;

export const DeleteFormContainer = styled(ModalContainer)`
  visibility: ${(props) => (props.isDeleteModalOpen ? 'visible' : 'hidden')};
`;

export const UpdateForm = styled(Form)`
  position: relative;
  background-color: white;
  width: 95%;
  @media (min-width: 700px) {
    width: 100%;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 18px;
  top: 3px;
  left: 3px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteFormGroup = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  max-width: 400px;
  width: 95%;
  @media (min-width: 700px) {
    width: 100%;
  }
`;

export const DeleteFormTitle = styled.h2``;

export const DeleteFormButton = styled.button`
  font-size: 2rem;
  background-color: var(--salmon);
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  transition: opacity 0.4s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
