import Image from 'next/image';
import {
  LeadComponent,
  Paragraph,
  Title,
  Steps,
  Step,
  StepImage,
  StepDetails,
  StepTitle,
  StepParagraph,
  StepSpan,
} from './styles/styledLead';
import SmokingImage from '../images/smoking.jpg';
import SelfieImage from '../images/selfie.jpg';
import HospitalImage from '../images/hospital.png';

export default function Lead() {
  return (
    <LeadComponent>
      <Title>Fundraising on Fundeserved only takes a few minutes!</Title>
      <Steps>
        <Step>
          <StepDetails>
            <StepTitle>
              <StepSpan>1. </StepSpan>Start with the basics
            </StepTitle>
            <StepParagraph>
              Have a problem you could 100% solve yourself
            </StepParagraph>
          </StepDetails>
          <StepImage>
            <Image src={SmokingImage} alt="" />
          </StepImage>
        </Step>
        <Step>
          <StepImage>
            <Image src={SelfieImage} alt="" />
          </StepImage>
          <StepDetails>
            <StepTitle>
              <StepSpan>2. </StepSpan>Craft your story
            </StepTitle>
            <StepParagraph>
              Pretend you&apos;re not the cause of all your misfortunes
            </StepParagraph>
          </StepDetails>
        </Step>
        <Step>
          <StepDetails>
            <StepTitle>
              <StepSpan>3. </StepSpan>Profit!
            </StepTitle>
            <StepParagraph>Continue enjoying your unhealthy lifestyle!</StepParagraph>
          </StepDetails>
          <StepImage>
            <Image src={HospitalImage} alt="" />
          </StepImage>
        </Step>
      </Steps>
    </LeadComponent>
  );
}