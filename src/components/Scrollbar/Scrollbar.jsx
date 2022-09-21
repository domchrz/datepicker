import { useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Calendar from '../../models/Calendar';

const Container = styled.div`
  position: relative;
  width: 5.8125rem;
  height: 12.5rem;
  background-color: lightgrey;
  overflow-y: hidden;
`;

const YearsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(99% - 6px);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s linear;
  transform: ${({ scroll }) => `translateY(${scroll}px)`};
`;

const ScrollBg = styled.div`
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  height: 11.8125rem;
  width: 6px;
  border-radius: 3px;
  background-color: salmon;
`;

const ScrollBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.25rem;
  border-radius: 3px;
  background-color: blue;
  cursor: pointer;
  transition: transform 0.3s linear;
  transform: ${({ scroll, componentHeight, containerHeight }) => {
    let translate = (-scroll * 153) / 1171;
    if (translate > containerHeight - componentHeight) {
      translate = containerHeight - componentHeight;
    }
    return `translateY(${translate}px)`;
  }};
`;

export default function Scrollbar({ setCalendar, calendar }) {
  const [scroll, setScroll] = useState(0);
  const [scroll2, setScroll2] = useState(0);
  const [isMouseDragging, setIsMouseDragging] = useState(false);
  const [scrollStart, setScrollStart] = useState(null);
  const yearsRef = useRef(null);
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);
  // console.log(yearsRef.current.offsetHeight)

  const setScrollValue = deltaY => {
    const delta = -deltaY;
    if (scroll + delta > 0) {
      setScroll(0);
      return;
    }
    if (scroll + delta < -(yearsRef.current.offsetHeight - containerRef.current.clientHeight)) {
      setScroll(-(yearsRef.current.offsetHeight - containerRef.current.clientHeight));
      return;
    }
    setScroll(scroll + delta);
  };

  const handleMouseWheel = e => {
    setScrollValue(e.deltaY);
  };

  const handleMouseDown = e => {
    e.stopPropagation()
    setIsMouseDragging(true);
    setScrollStart(e.clientY)
  };

  const handleMouseMove = e => {
    if (!isMouseDragging) return;
    // const movementY = -e.movementY;
    console.log(e.clientY);
    const movement = -((e.clientY - scrollStart))
    console.log(movement) 
    if (scroll + movement > 0) {
      setScroll(0);
      return;
    }
    if (
      scroll + movement <
      -(yearsRef.current.offsetHeight - containerRef.current.clientHeight)
    ) {
      setScroll(-(yearsRef.current.offsetHeight - containerRef.current.clientHeight));
      return;
    }
    setScroll(scroll + movement);
  };

  const handleMouseUp = e => {
    setIsMouseDragging(false);
    setScrollStart(null)
  };

  const handleMouseLeave = () => {
    setIsMouseDragging(false);
    setScrollStart(null)
  };

  const handleScorllBgClick = () => {
    const delta = -100;
    if (scroll + delta > 0) {
      setScroll(0);
      return;
    }
    if (scroll + delta < -(yearsRef.current.offsetHeight - containerRef.current.clientHeight)) {
      setScroll(-(yearsRef.current.offsetHeight - containerRef.current.clientHeight));
      return;
    }
    setScroll(scroll + delta);
  }

  return (
    <Container ref={containerRef} onWheel={handleMouseWheel} onMouseLeave={handleMouseLeave}>
      <ScrollBg onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onClick={handleScorllBgClick}>
        <ScrollBar
          scroll={scroll}
          ref={scrollbarRef}
          componentHeight={scrollbarRef.current?.offsetHeight}
          containerHeight={containerRef.current?.clientHeight}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          // onMouseLeave={handleMouseLeave}
        />
      </ScrollBg>
      <YearsContainer ref={yearsRef} scroll={scroll}>
        {calendar.getYearsList().map(year => (
          <button
            key={year}
            onClick={() => {
              setCalendar(new Calendar(year, calendar.month.number));
            }}>
            {year}
          </button>
        ))}
      </YearsContainer>
    </Container>
  );
}
