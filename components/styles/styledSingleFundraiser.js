import styled from 'styled-components';
import Form from './styledForm';

export const FundraiserSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 1080px;
`;

export const TitleGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
`;

export const Title = styled.h1`
  font-size: 45px;
  margin: 0;
`;

export const UpdateButton = styled.button`
  font-size: 15px;
  border: 1px solid red;
  padding: 10px 15px;
  height: 50%;
  border: none;
  border-radius: 10px;
  transition: opacity 0.4s ease;
  background-color: var(--lightGrey);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const FundraiserInfo = styled.div`
  display: flex;
`;

export const Details = styled.div`
  min-width: 550px;
  margin-right: 20px;
`;

export const Image = styled.img`
  min-width: 100%;
  object-fit: cover;
  max-width: 500px;
  margin-bottom: 25px;
  border-radius: 15px;
`;

export const Description = styled.p`
  white-space: pre-wrap;
`;

export const Sidebar = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  min-width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const AmountGroup = styled.p`
  font-size: 15px;
  margin: 0;
`;

export const AmountValue = styled.p``;

export const AmountRaised = styled.span`
  font-weight: 700;
  font-size: 25px;
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
  background-color: var(--offWhite);
  border-radius: 10px;
`;

export const PercentageBarFilled = styled.div`
  position: absolute;
  width: ${(props) => (props.filled <= 100 ? props.filled : 100)}%;
  height: 10px;
  background-color: var(--red);
  border-radius: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  color: white;
  font-size: 15px;
  width: 100%;
  background-color: var(--red);
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
    transform: translate(1px, 1px);
  }
`;

export const ShareButton = styled(Button)`
  background-color: green;
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
`;

export const DonorCardName = styled.h3`
  margin: 0;
`;

export const DonorCardAmount = styled.p`
  margin: 0;
`;

export const DonorListSeeAllButton = styled(Button)`
  width: 40%;
`;

export const UpdateFormComponent = styled.div`
  visibility: ${(props) => (props.isUpdateFormOpen ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpdateForm = styled(Form)`
  position: relative;
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 25px;
  top: -5px;
  left: -5px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

export const UpdateFormFade = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;