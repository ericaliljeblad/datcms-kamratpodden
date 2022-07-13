import styled from 'styled-components';
import { Image } from 'react-datocms';

const StyledLogo = styled.div`
  max-width: 500px;
  margin-top: 8vh;
`;

const Logo = ({ image, ...props }) => {
  return (
    <StyledLogo>
      <Image data={image} />
    </StyledLogo>
  );
};

export default Logo;
