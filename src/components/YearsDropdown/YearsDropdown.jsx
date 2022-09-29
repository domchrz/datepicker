import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CurrentYears, DropdownContainer, YearsRange, ChevronButton, Year } from './styled';
import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function YearsDropdown({ years, changeYear, currentYear }) {
  const [step, setStep] = useState(years.length - 1);
  const [isSelected, setIsSelected] = useState(currentYear);

  const stepForward = () => {
    const newStep = step + 1 > years.length - 1 ? years.length - 1 : step + 1;
    setStep(newStep);
  };

  const stepBackwards = () => {
    const newStep = step - 1 < 0 ? 0 : step - 1;
    setStep(newStep);
  };

  useEffect(() => {
    setStep(years.length - 1);
  }, [years]);

  useEffect(() => {
    setIsSelected(currentYear)
  }, [currentYear])
  return (
    <DropdownContainer>
      <CurrentYears>
        <ChevronButton onClick={stepBackwards}>
          <ChevronLeft />
        </ChevronButton>
        <YearsRange>
          {years[step][0]}-{years[step][years[step].length - 1]}
        </YearsRange>
        <ChevronButton onClick={stepForward}>
          <ChevronRight />
        </ChevronButton>
      </CurrentYears>
      <Grid>
        {years[step].map(year => (
          <Year
            isSelected={isSelected === year}
            onClick={() => {
              changeYear(year);
              setIsSelected(year);
            }}>
            {year}
          </Year>
        ))}
      </Grid>
    </DropdownContainer>
  );
}
