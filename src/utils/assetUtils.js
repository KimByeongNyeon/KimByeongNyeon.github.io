/**
 * GitHub Pages 배포환경에서 에셋 경로를 올바르게 구성하는 유틸리티 함수
 * @param {string} path - 에셋의 상대 경로 (예: 'assets/image.jpg')
 * @returns {string} 환경에 맞게 조정된 경로
 */
export const getAssetPath = (path) => {
  // 경로가 이미 절대 경로인 경우
  if (path.startsWith("/")) {
    return import.meta.env.BASE_URL + path.substring(1);
  }

  // ./assets/로 시작하는 경우
  if (path.startsWith("./assets/")) {
    return import.meta.env.BASE_URL + path.substring(2);
  }

  // assets/로 시작하는 경우
  if (path.startsWith("assets/")) {
    return import.meta.env.BASE_URL + path;
  }

  // 그 외의 경우
  return import.meta.env.BASE_URL + path;
};
