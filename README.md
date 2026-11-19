# 남귀현 경력 포트폴리오

남귀현의 한국어 정적 포트폴리오입니다. 홈은 v15를 바탕으로 구성한 15장 HTML 포트폴리오입니다.

## 실행
Node.js 22 이상에서 별도 패키지 설치 없이 실행합니다.

```sh
npm run build
npm run check
npm start
```

미리보기: http://127.0.0.1:4173

## 수정
- `content/home.html`에서 포트폴리오 본문과 슬라이드 배치를 수정합니다. 슬라이드 이미지는 `site/assets/deck/`에 둡니다.
- `site/assets/deck-reader.css`에서 화면 폭에 따른 사례 배치와 인쇄 레이아웃을 관리합니다.
- 기존 상세 페이지의 내용은 `content/projects.mjs` 또는 `scripts/build.mjs`에서 수정합니다.

수정 후 `npm run build`로 정적 HTML을 갱신합니다. 기존 상세 주소와 홈 주소도 계속 사용할 수 있습니다.

## 배포
GitHub 저장소의 Pages 소스를 GitHub Actions로 설정합니다. main 브랜치에 푸시하면 `.github/workflows/pages.yml`이 빌드와 링크 검사 후 `site/`만 배포합니다.

## 콘텐츠 상태
대표 작업에서 사용한 지표는 사례마다 집계 기준을 적었습니다. 메타 사례의 실제 소재는 썸네일로 볼 수 있습니다.

원본 DOCX와 추출 메모는 공개 저장소에 포함하지 않습니다. 본문의 내부 URL, 고객정보, 계약 금액, 원가와 인증정보는 배포하지 않습니다.

## 검증
`npm run check`는 로컬 링크, 자산, 앵커, 중복 ID와 한국어 설정을 검사합니다.
