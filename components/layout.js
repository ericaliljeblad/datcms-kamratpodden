import styled, { css } from 'styled-components';
import Alert from "./alert";
import Footer from "./footer";

const StyledLayout = styled.div`
  height: 100vh;
  background: rgba(243, 243, 243, 0.5);

  a {
    color: rgb(13, 28, 70);
    transition: color 0.2s ease;

    &:hover {
      color: rgb(45, 74, 147);
    }
  }

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 56px 16px;
  }
`;

const Layout = ({ children, ...props }) => {
  return (
    <>
      <StyledLayout>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </StyledLayout>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
