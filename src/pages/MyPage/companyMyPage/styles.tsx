import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import maxWidth from 'styles/mixin';

export const Container = styled.div`
  ${maxWidth}
  background: ${colors.background};
`;

export const MyPageContainer = styled.div`
  display: flex;
  height: 90vh;
  background: ${colors.background};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border-right: 2px solid;
  border-color: ${colors.primary};

  .myPageTitle {
    margin: 50px 0px 20px 0px;
    font-size: 36px;
    font-weight: bold;
  }
  .myPageSelect {
    width: 100%;
    margin: 40px 0px 20px 0px;
    text-align: center;
    font-size: 24px;
    color: black;
    :hover {
      cursor: pointer;
      border-right: 5px solid;
      border-color: ${colors.primary};
    }
  }
`;

export const ViewContainer = styled.div`
  display: flex;
  flex: 6;
`;

export const UserInfoMenu = styled.div<{ currentMyPage: string }>`
  ${(props) =>
    props.currentMyPage === 'userInfo' &&
    css`
      border-right: 5px solid;
      border-color: ${colors.primary};
    `}
`;

export const MyPortfolioMenu = styled.div<{ currentMyPage: string }>`
  ${(props) =>
    props.currentMyPage === 'myPortfolio' &&
    css`
      border-right: 5px solid;
      border-color: ${colors.primary};
    `}
`;
