import styled from 'styled-components';

export const DropdownContainer = styled.div`
  padding: 0.5rem;
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

export const ChevronButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
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

export const Year = styled.button`
  padding: 0.5rem;
  line-height: 1.5rem;
  background-color: transparent;
  border: none;
  background-color: ${({isSelected}) => isSelected && '#185bb4'};
  color: ${({isSelected}) => isSelected && 'white'};
  border-radius: .5rem;
  cursor: pointer;
`;
