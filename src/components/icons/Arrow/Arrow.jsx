import Svg from '../../../../assets/svg/icons/arrow.svg';
import { SvgContainer } from '../styled';

const Arrow = ({ mode, width }) => {
  return (
    <SvgContainer
      {...{
        'aria-label': 'arrow',
        width: width || '1.5rem',
      }}>
      <Svg />
    </SvgContainer>
  );
};

export default Arrow;
