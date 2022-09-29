import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* gap: .5rem; */
  width: min-content;
  min-width: 17.75rem;
  /* min-height: 18.8125rem; */
  background-color: #ffffff;
  box-shadow: 0 -4px 64px rgb(24, 39, 75, 0.12);
  border-radius: 1rem;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const MonthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Month = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  padding-block: 0.5rem;
  width: 6.75rem;
  background-color: #f5f4f4;
  border-radius: 0.5rem;
`;
export const ChevronButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.5rem;
  padding-inline: 0.25rem;
  height: 100%;
  background-color: none;
  border: none;
  background-color: transparent;
  color: #c0c0c0;
  transition: color 0.3s;
  cursor: pointer;

  & svg {
    color: inherit;
    height: 0.875rem;
    width: 0.625rem;
  }

  &:hover {
    color: #185bb4;
  }
`;

export const Year = styled.p`
  line-height: 1.5rem;
`;

export const YearContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f4f4;
  font-weight: 300;
  gap: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;

  & svg {
    height: 1.5rem;
    width: 1.5rem;
    color: inherit;
    cursor: pointer;
  }
`;

export const DropdownButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  & svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #c0c0c0;
    cursor: pointer;
  }
`;

export const DaysGrid = styled.div`
  display: grid;
  margin-top: 0.5rem;
  grid-template-columns: repeat(7, 2.25rem);
  place-items: center;
`;

export const WeekDay = styled.p`
  line-height: 1.25rem;
  padding: 0.5rem;
  font-size: 0.75rem; ;
`;

export const MonthDay = styled.p`
  grid-column: span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.125rem;
  height: 2.125rem;
  font-size: 0.875rem;
  ${({ isCurrentMonth }) => !isCurrentMonth && `color: #C0C0C0;`}
  background-color: ${({ isSelected }) => isSelected && '#185bb4'};
  color: ${({ isSelected }) => isSelected && 'white'};
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ isCurrentMonth, isSelected }) => isCurrentMonth && !isSelected && `#F1F1F1`};
  }
`;

export const Line = styled.div`
  grid-row: 1 / span 7;
  height: 0.03125rem;
  width: 100%;
  align-self: end;
  background-color: #bebebe;
`;

export const DropdownContainer = styled.div`
  top: calc(100% + 0.6875rem);
  right: 0;
  position: absolute;
  width: 14.4375rem;
  height: 13.5rem;
  position: absolute;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0px -0.25rem 4rem -0.25rem rgba(24, 39, 75, 0.12);

  &::before {
    position: absolute;
    top: -0.3rem;
    right: 1rem;
    content: '';
    transform: rotateZ(45deg);
    background-color: white;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 0.15rem;
  }
`;

export const CurrentYears = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const YearsRange = styled.p`
  padding: 0.5rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.5);
`;
