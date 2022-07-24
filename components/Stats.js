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
          The fundraising engine of choice for 50,000+ losers from millions of
          countries
        </Title>
        <StatsGroup>
          <Stat>
            <StatTitle>10,000</StatTitle>
            <StatParagraph>Countries served</StatParagraph>
            <StatCircle />
          </Stat>
          <Stat>
            <StatTitle>$1.2+</StatTitle>
            <StatParagraph>Donations wasted</StatParagraph>
            <StatCircle />
          </Stat>
          <Stat>
            <StatTitle>950,000</StatTitle>
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
            <StatParagraph>Improvements to the world</StatParagraph>
            <StatCircle />
          </Stat>
        </StatsGroup>
      </StatsComponent>
    </>
  );
}
