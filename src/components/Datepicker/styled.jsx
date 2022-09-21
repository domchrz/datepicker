import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: min-content;
  background-color: #FFFFFF;
  box-shadow: 0 -4px 64px rgb(24, 39, 75, .12);
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
`;

export const Month = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.75rem;
`;
export const MonthButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: none;
  border: none;
  background-color: #f5f4f4;
  color: #c0c0c0;
  transition: color 0.3s;

  & svg {
    height: 0.5rem;
    width: 100%;
    color: inherit;
  }

  &:hover {
    color: #185bb4;
  }
`;


export const Year = styled.p`
  line-height: 1.5rem;
`;

export const YearButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #f5f4f4;
  gap: 1rem;
  padding: 0.5rem;
  border: none;
  color: #c0c0c0;
  transition: color 0.3s;

  & svg {
    height: 1.375rem;
    width: 100%;
    color: inherit;
  }

  &:hover {
    color: #185bb4;
  }
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  place-items: center;
`;
