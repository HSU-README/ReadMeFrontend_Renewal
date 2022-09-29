import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import maxWidth from 'styles/mixin';

export const Container = styled.div`
  ${maxWidth}
  background: ${colors.background};
`;

export const MyPageContainer = styled.div`
  display: flex;
  height: 84vh;
  background: ${colors.background};
  border-bottom: 8px solid;
  border-color: white;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  width: 13%;
  min-width: 180px;
  border-color: white;

  .myPageTitle {
    width: 100%;
    height: 17vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: bold;
    border-top: 8px solid;
    border-color: white;
    color: white;
  }

  .myPageMenu {
  }
  .myPageSelect {
    width: 100%;
    height: 17vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ViewContainer = styled.div`
  display: flex;
  flex: 6;
`;

export const UserInfoMenu = styled.div<{ currentMyPage: string }>`
  ${(props) =>
    props.currentMyPage === 'userInfo'
      ? css`
          box-shadow: inset 14px 0 0 0 white;
        `
      : css`
          box-shadow: inset 14px 0 0 0 #fbc9c9;
        `}
`;

export const PickPofolMenu = styled.div<{ currentMyPage: string }>`
  ${(props) =>
    props.currentMyPage === 'pickPofol'
      ? css`
          box-shadow: inset 14px 0 0 0 white;
        `
      : css`
          box-shadow: inset 14px 0 0 0 #fbc9c9;
        `}
`;

export const MyPortfolioMenu = styled.div<{ currentMyPage: string }>`
  ${(props) =>
    props.currentMyPage === 'myPortfolio'
      ? css`
          box-shadow: inset 14px 0 0 0 white;
        `
      : css`
          box-shadow: inset 14px 0 0 0 #fbc9c9;
        `}
`;
