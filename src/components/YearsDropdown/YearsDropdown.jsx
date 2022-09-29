import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CurrentYears, DropdownContainer, YearsRange, ChevronButton, Year } from './styled';
import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.3125rem;
`;

export default function YearsDropdown({ years, changeYear, currentYear }) {
  const [step, setStep] = useState(years.length - 1);
  const [yearList, setYearList] = useState(years);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const stepForward = () => {
    const newStep = step + 1 > years.length - 1 ? years.length - 1 : step + 1;
    setStep(newStep);
  };

  const stepBackwards = () => {
    const newStep = step - 1 < 0 ? 0 : step - 1;
    setStep(newStep);
  };

  useEffect(() => {
    let step;
    years.forEach((element, idx) => {
      if (element.find(el => el === currentYear)) {
        step = idx;
      }
    });
    setYearList(years);
    setStep(step);
    setSelectedYear(currentYear);
  }, [years, currentYear]);

  return (
    <DropdownContainer>
      <CurrentYears>
        <ChevronButton onClick={stepBackwards}>
          <ChevronLeft />
        </ChevronButton>
        <YearsRange>
          {yearList[step][0]}-{yearList[step][yearList[step].length - 1]}
        </YearsRange>
        <ChevronButton onClick={stepForward}>
          <ChevronRight />
        </ChevronButton>
      </CurrentYears>
      <Grid>
        {yearList[step].map(year => (
          <Year
            isSelected={selectedYear === year}
            onClick={() => {
              changeYear(year);
              setSelectedYear(year);
            }}>
            {year}
          </Year>
        ))}
      </Grid>
    </DropdownContainer>
  );
}
