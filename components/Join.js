import {
  Details,
  DonateButton,
  ImageWrapper,
  JoinComponent,
  ButtonGroup,
  StartButton,
  Title,
} from './styles/styledJoin';

import HospitalImage from '../images/hospital.png';
import DwayneImage from '../images/dwayne.png';
import CatIcon from '../images/cat.png';
import Image from 'next/image';

export default function Join() {
  return (
    <JoinComponent>
      <ImageWrapper>
        <img src={CatIcon} alt="" className='join-image' />
      </ImageWrapper>
      <Details>
        <Title>Ready to get started? Join thousands of others today.</Title>
        <ButtonGroup>
          <StartButton>Start a Fundeserved</StartButton>
          <DonateButton>Donate</DonateButton>
        </ButtonGroup>
      </Details>
    </JoinComponent>
  );
}
