import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import basicSelect from 'localData/basicSelect.json';
import { ComponentType, TagType } from 'types/document';
import { ICanvasData } from 'types/canvas';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 유저의 문서들 불러오기
export const getUserPortfolio = async (userId: string) => {
  const response = await serverApi.get(`/api/v1/member/${userId}/docs`);
  try {
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};

// 문서 정보 가져오기
export const getPortfolio = async (docId: string) => {
  const parsedDocID = parseInt(docId, 10);
  if (parsedDocID === 1001) {
    return basicSelect.data[0].result;
  }
  if (parsedDocID === 1002) {
    return basicSelect.data[1].result;
  }
  if (parsedDocID === 1003) {
    return basicSelect.data[2].result;
  }
  if (parsedDocID === 1004) {
    return basicSelect.data[3].result;
  }
  if (parsedDocID === 1005) {
    return basicSelect.data[4].result;
  }
  console.log(docId);
  const response = await serverApi.get(`/api/v1/doc/${docId}`);
  console.log(response);
  try {
    console.log('response', response.data.result);
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};

// 전체 문서 불러오기
export const getAllPortfolio = async () => {
  const response = await serverApi.get('/api/v1/home/docs/all');
  try {
    return response.data.result;
  } catch (error) {
    return console.error(error);
  }
};

// 인기 문서 불러오기
export const getMostLikePortfolio = async () => {
  const response = await serverApi.get('/api/v1/home/docs/mostLike');
  console.log(response);
  try {
    console.log('response', response.data.result);
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};

// 학과별 문서 불러오기
export const getMajorPortfolio = async (memberId: string) => {
  const response = await serverApi.get('/api/v1/home/docs/major', { params: { memberId } });
  console.log(response);
  try {
    console.log('response', response.data.result);
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};

// 문서 검색
export const getSearchPortfolio = async (searchText: string) => {
  // console.log(searchText);
  if (searchText === '전통 양식') {
    return basicSelect.data[0].result;
  }
  if (searchText === '픽토그램 양식') {
    return basicSelect.data[1].result;
  }
  if (searchText === '기본 양식') {
    return basicSelect.data[2].result;
  }
  const response = await serverApi.get(`/api/v1/doc/search?where=${searchText}`);

  try {
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};

// 문서 만들기
export const createPortfolio = async (
  memberId: number,
  title: string,
  components: ICanvasData[],
  tags: TagType[],
  visibleCheck: boolean,
  docUrl: string,
) => {
  const componentArray: ComponentType[] = [];
  components.map((component) => {
    console.log(component);

    // 테이블 생성 과정
    const stringToObject = () => {
      const arr = component.chartContent?.split(',');
      const content = new Array(0);
      for (let i = 0; i < 6; i += 1) {
        for (let j = 0; j < 6; j += 1) {
          content.push({ row: i, column: j, content: arr![i * 6 + j] });
        }
      }
      return content;
    };

    switch (component.type) {
      case 'TEXT':
        componentArray.push({
          type: 'text',
          x: component.position!.left,
          y: component.position!.top,
          width: component.dimension!.width.replace('px', ''),
          height: component.dimension!.height.replace('px', ''),
          textContent: component.content,
        });
        break;

      case 'CHART':
        componentArray.push({
          type: 'table',
          x: component.position!.left,
          y: component.position!.top,
          width: component.dimension!.width.replace('px', ''),
          height: component.dimension!.height.replace('px', ''),
          tableContents: stringToObject(),
          tableCol: component.chart!.col,
          tableRow: component.chart!.row,
        });
        break;

      case 'IMAGE':
        componentArray.push({
          type: 'image',
          x: component.position!.left,
          y: component.position!.top,
          width: component.dimension!.width.replace('px', ''),
          height: component.dimension!.height.replace('px', ''),
          imgUrl: component.content,
        });
        break;

      case 'IMOGE':
        componentArray.push({
          type: 'icon',
          x: component.position!.left,
          y: component.position!.top,
          width: component.dimension!.width.replace('px', ''),
          height: component.dimension!.height.replace('px', ''),
          iconUrl: component.content,
        });
        break;
      default:
        break;
    }
    try {
      return console.log(component);
    } catch (error: any) {
      return console.log('convert component error');
    }
  });

  const response: any = await serverApi
    .post('/api/v1/doc/edit', {
      memberId,
      components: componentArray,
      title,
      docUrl,
      tags,
      visibility: visibleCheck === true ? 'public' : 'private',
      major: JSON.parse(localStorage.getItem('readme_userInfo')!).major,
    })
    .catch(() => console.log(memberId));
  try {
    console.log('tags:', tags);
    console.log(response.data.tags);
    const successMessage = JSON.stringify(response.data.message);
    const docId = JSON.stringify(response.data.result.docId);
    console.log(JSON.stringify(response.data.result));
    ToastSuccess(`${successMessage}  문서번호: ${docId}`);
    return docId;
  } catch (error: any) {
    const errorMessage = JSON.stringify(error.response.data.errorMessage);
    ToastError(errorMessage);
    return console.log(errorMessage);
  }
};

// 문서 삭제
export const deletePortfolio = async (docId: number) => {
  const response: any = await serverApi
    .post(`/api/v1/doc/delete/${docId}`, {
      docId,
    })
    .catch(() => console.log(docId));
  try {
    const successMessage = JSON.stringify(response.data.message);
    ToastSuccess(successMessage);
    return docId;
  } catch (error: any) {
    const errorMessage = JSON.stringify(error.response.data.errorMessage);
    return ToastError(errorMessage);
  }
};
