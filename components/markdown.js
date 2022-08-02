import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

const StyledMarkdown = styled.div`
  a {
    color: rgb(13, 28, 70);
    text-decoration: underline;
    transition: color 0.2s ease;

    &:hover {
      color: rgb(45, 74, 147);
    }
  }
`;

const MarkdownComp = ({ children, ...props }) => {
  return (
    <StyledMarkdown>
      <Markdown>
        {children}
      </Markdown>
    </StyledMarkdown>
  );
};

export default MarkdownComp;





