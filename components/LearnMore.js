import {
  LearnMoreComponent,
  LearnMoreInfoGroup,
  LearnMoreParagraph,
  LearnMoreQuestion,
  LearnMoreQuestionGroup,
  LearnMoreTitle,
  SuccessPersonDescription,
  SuccessPersonDetails,
  SuccessPersonGroup,
  SuccessPersonImageWrapper,
  SuccessPersonQuote,
  SuccessPersonTitle,
  SuccessStory,
  SuccessStoryGroup,
  SucessPersonDescription,
} from './styles/styledLearnMore';
import Success1Image from '../images/success-1.png';
import Success2Image from '../images/success-2.png';

export default function LearnMore() {
  return (
    <LearnMoreComponent>
      <LearnMoreInfoGroup>
        <LearnMoreTitle>About GoFundYourself</LearnMoreTitle>
        <LearnMoreParagraph>
          GoFundYourself is a service that caters to people with the worst
          reasons to ask for money, who have the audacity to ask for money, and
          who lack the shame and decency which would otherwise prevent them from
          asking for money. GoFundYourself saw an opportunity, in which
          grifters, lunatics, and the entitled could collect funds to support
          their harebrained schemes, bail themselves out of self-induced
          predicaments, or simply to put money towards ideas that are neither
          feasible nor in any way advisable. Where others said 'GoFundYourself
          shouldn't exist in any capacity whatsoever', we said 'why not?',
          ignoring the many many legal and ethical reasons why not.
        </LearnMoreParagraph>
      </LearnMoreInfoGroup>
      <LearnMoreInfoGroup>
        <LearnMoreTitle>How does GoFundYourself work?</LearnMoreTitle>
        <LearnMoreParagraph>
          It's easy! Simply create a fundraiser for whatever idea you like,
          provided it's not a good one, include some appeals to emotion, hollow
          rhetoric, and various political buzzwords, and watch the cash roll in!
        </LearnMoreParagraph>
      </LearnMoreInfoGroup>
      <LearnMoreInfoGroup>
        <LearnMoreTitle>Common questions</LearnMoreTitle>
        <LearnMoreQuestionGroup>
          <LearnMoreQuestion>
            How should I use my fundraiser earnings?
          </LearnMoreQuestion>
          <LearnMoreParagraph>
            We here at GoFundYourself are happy to say that you can use your
            money however you like! You could start with a jetski and see where
            it takes you from there. Sky's the limit!
          </LearnMoreParagraph>
        </LearnMoreQuestionGroup>
        <LearnMoreQuestionGroup></LearnMoreQuestionGroup>
        <LearnMoreQuestionGroup>
          <LearnMoreQuestion>How do I get my money?</LearnMoreQuestion>
          <LearnMoreParagraph>
            Please set up a bank account either on the Dark Web or in the Virgin
            Islands. That's where all the Illuminati keep their money, so why
            shouldn't you?
          </LearnMoreParagraph>
        </LearnMoreQuestionGroup>
        <LearnMoreQuestionGroup></LearnMoreQuestionGroup>
        <LearnMoreQuestionGroup>
          <LearnMoreQuestion>
            Will I get in trouble with the government?
          </LearnMoreQuestion>
          <LearnMoreParagraph>
            Of course, it's natural to be worried about your fundraiser being
            investigated by the FBI, (commonly known as 'charity fraud',
            'larceny', or 'embezzlement'), and you should be! What you're doing
            is definitely illegal, more than likely breaks federal laws, which
            means you're looking at around a decade of prison time on top of
            thousands of dollars of fines, but we here at GoFundYourself cannot
            stress enough how this is not our problem.
          </LearnMoreParagraph>
        </LearnMoreQuestionGroup>
        <LearnMoreQuestionGroup>
          <LearnMoreQuestion>
            Is this really a moral thing to do?
          </LearnMoreQuestion>
          <LearnMoreParagraph>
            GoFundYourself subscribes to the philosophical school of moral
            relativism, which posits that morality is subject to the era and
            culture within which a particular judgment is being made, and
            therefore it is the absolutist's position which is fundamentally
            limiting, whilst a normative relativist stance suggests that a
            tolerance of all moral attitudes is the only satisfactory response.
            And if you realize that we wrote this grandiloquent answer to get
            out of answering the original question, then please check out our
            job board because we'd love to have you on the team at
            GoFundYourself.
          </LearnMoreParagraph>
        </LearnMoreQuestionGroup>
      </LearnMoreInfoGroup>
      <LearnMoreInfoGroup>
        <LearnMoreTitle>Success Stories</LearnMoreTitle>
        <SuccessStoryGroup>
          <SuccessStory>
            <SuccessPersonGroup>
              <SuccessPersonImageWrapper>
                <img src={Success1Image} alt="" />
              </SuccessPersonImageWrapper>
              <SuccessPersonDetails>
                <SuccessPersonTitle>Bridgette, aged 37,</SuccessPersonTitle>
                <SuccessPersonDescription>
                  -- forgot to pick her kids up from daycare because she went to
                  Six Flags
                </SuccessPersonDescription>
              </SuccessPersonDetails>
            </SuccessPersonGroup>
            <SuccessPersonQuote>
              "I'm so grateful for the kind, naive people around the world who
              helped me raise over $60,000 to get my kids back! The lawyers'
              fees alone were exorbitant, and my poor kids were in the foster
              system for every day I couldn't afford to prove I was an able
              caretaker. Overall it turned out to be a huge hassle. I ended up
              not bothering to try and get them back, and put the money towards
              a lottery ticket for a seat on the Blue Origin maiden voyage, but
              I didn't win, unfortunately."
            </SuccessPersonQuote>
          </SuccessStory>
          <SuccessStory>
            <SuccessPersonGroup>
              <SuccessPersonImageWrapper>
                <img src={Success2Image} alt="" />
              </SuccessPersonImageWrapper>
              <SuccessPersonDetails>
                <SuccessPersonTitle>Gerardo, aged 29</SuccessPersonTitle>
                <SuccessPersonDescription>
                  -- patent holder of the motorcycle seatbelt
                </SuccessPersonDescription>
              </SuccessPersonDetails>
            </SuccessPersonGroup>
            <SuccessPersonQuote>
              "I never thought I would ever see my invention become a reality,
              but thanks to GoFundYourself, I was able to get enough financial
              backing to mass produce MotorBelt, the world's first and only
              motorcycle seatbelt! And thanks to the research which was never
              actually done, but claims my invention has a 99% success rate, I'm
              turning out hundreds of MotorBelts a day! It's so funny, it's
              really just a car seatbelt and motorcycle seat that I hotglued
              together! I don't even think it works!"
            </SuccessPersonQuote>
          </SuccessStory>
        </SuccessStoryGroup>
      </LearnMoreInfoGroup>
      <LearnMoreInfoGroup>
        <LearnMoreTitle>Supported countries</LearnMoreTitle>
        <LearnMoreParagraph>
          GoFundYourself is fully supported in every country in which legal
          loopholes are wide enough to allow us to operate there! And partially
          supported in countries that for some reason think that GoFundYourself
          is a slap in the face to civility and social consciousness.
        </LearnMoreParagraph>
      </LearnMoreInfoGroup>
    </LearnMoreComponent>
  );
}
