import styled from 'styled-components';
import maxWidth from 'styles/mixin';
import colors from 'styles/colors';

const Container = styled.footer`
  ${maxWidth}
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  margin-top: auto;
  border-top: 1px solid;
  border-color: ${colors.footerLine};
  background-color: #f8f9fa;

  .copyright {
    font-size: 12px;
    margin-right: 40px;
  }
`;

export default Container;
