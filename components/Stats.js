import {
  StatsComponent,
  Title,
  StatsGroup,
  Stat,
  StatTitle,
  StatParagraph,
  StatCircle,
} from './styles/styledStats';

export default function Stats() {
  return (
    <>
      <StatsComponent>
        <Title>
          The fundraising engine of choice for 50,000+ people from millions of
          countries
        </Title>
        <StatsGroup>
          <Stat>
            <StatTitle>10,000</StatTitle>
            <StatParagraph>Countries served</StatParagraph>
            <StatCircle />
          </Stat>
          <Stat>
            <StatTitle>$1.2B+</StatTitle>
            <StatParagraph>Donations wasted</StatParagraph>
            <StatCircle />
          </Stat>
          <Stat>
            <StatTitle>2,500</StatTitle>
            <StatParagraph>Donors scammed</StatParagraph>
            <StatCircle />
          </Stat>
          <Stat>
            <StatTitle>500</StatTitle>
            <StatParagraph>Layoffs this year</StatParagraph>
            <StatCircle />
          </Stat>
          <Stat>
            <StatTitle>0</StatTitle>
            <StatParagraph>Differences made</StatParagraph>
            <StatCircle />
          </Stat>
        </StatsGroup>
      </StatsComponent>
    </>
  );
}
