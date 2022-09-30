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
  position: absolute;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  width: 13%;
  height: 100%;
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
  position: relative;
  width: 100%;
  min-width: 960px;
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

export const MyRecruitmentMenu = styled.div<{ currentMyPage: string }>`
  ${(props) =>
    props.currentMyPage === 'myRecruitment'
      ? css`
          box-shadow: inset 14px 0 0 0 white;
        `
      : css`
          box-shadow: inset 14px 0 0 0 #fbc9c9;
        `}
`;
