import React, { useState } from 'react';
import styled from 'styled-components';
import { CurrentYears, DropdownContainer, YearsRange, ChevronButton } from './styled';
import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function YearsDropdown({ years }) {
  const [step, setStep] = useState(years.length - 1);

  const stepForward = () => {
    const newStep = step + 1 > years.length - 1 ? years.length - 1 : step + 1;
    setStep(newStep)
  };

  const stepBackwords = () => {
    const newStep = step - 1 < 0 ? 0 : step - 1;
    setStep(newStep)
  };
  return (
    <DropdownContainer>
      <CurrentYears>
        <ChevronButton onClick={stepBackwords}><ChevronLeft /></ChevronButton>
        <YearsRange>{years[step][0]}-{years[step][years[step].length - 1]}</YearsRange>
        <ChevronButton onClick={stepForward}><ChevronRight /></ChevronButton>
      </CurrentYears>
      <Grid>
        {years[step].map(year => (
          <p>{year}</p>
        ))}
      </Grid>
    </DropdownContainer>
  );
}
