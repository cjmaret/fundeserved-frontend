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
import FlamIcon from '../images/join-logo-2.png';
import Image from 'next/image';

export default function Join() {
  return (
    <JoinComponent>
      <ImageWrapper>
        <img src={FlamIcon} alt="" className="join-image" />
      </ImageWrapper>
      <Details>
        <Title>Ready to make some money? Join thousands of others today.</Title>
        <ButtonGroup>
          <StartButton href="/create-fundraiser">Start a GoFundYourself</StartButton>
          <DonateButton href="/fundraisers">Donate</DonateButton>
        </ButtonGroup>
      </Details>
    </JoinComponent>
  );
}
