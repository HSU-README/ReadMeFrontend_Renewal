import styled from 'styled-components';
import maxWidth from 'styles/mixin';
import colors from 'styles/colors';

export const headerFont = {
  fontSize: '24px',
  fontWeight: '700',
  color: 'white',
  cursor: 'pointer',
};

export const Container = styled.div`
  ${maxWidth}
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid;
  border-color: ${colors.footerLine};
  background-color: ${colors.primary};

  .copyright {
    font-size: 18px;
  }

  .logo {
    width: 110px;
    height: 46px;
    margin-left: 1.5%;
    margin-right: 18%;
  }

  .searchbar {
    width: 25%;
  }

  .section-login {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 150px;
    margin-left: 14%;
    margin-right: 1.5%;
  }

  p {
    margin: 0px 0px;
  }
`;

export const MyPage = styled.div<{ bgImg: string }>`
  width: 35px;
  height: 35px;
  border: 1px solid;
  border-color: white;
  border-radius: 50px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgImg});
  cursor: pointer;
`;
