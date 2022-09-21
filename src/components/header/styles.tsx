import styled from 'styled-components';
import maxWidth from 'styles/mixin';
import colors from 'styles/colors';

export const headerFont = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'black',
  marginRight: '15px',
  cursor: 'pointer',
};

export const Container = styled.div`
  ${maxWidth}
  display: flex;
  justify-content: space-between;
  padding: 19.5px 20px;
  gap: 20px;
  border-bottom: 1px solid;
  border-color: ${colors.footerLine};
  background-color: white;

  .copyright {
    font-size: 18px;
  }

  .logo {
    width: 110px;
    height: 46px;
    margin-left: 80px;
  }

  .section-login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 285px;
  }

  p {
    margin: 0px 0px;
  }
`;
