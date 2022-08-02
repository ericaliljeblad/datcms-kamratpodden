import styled, { css } from 'styled-components';
import Alert from "./alert";
import Footer from "./footer";

const StyledLayout = styled.div`
  background: rgba(243, 243, 243, 0.5);

  main {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 56px 16px;
    overflow: hidden;
    background: rgba(243, 243, 243, 0.5);
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
