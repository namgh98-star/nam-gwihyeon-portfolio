# 남귀현 경력 포트폴리오

한국어 정적 HTML 포트폴리오. 행동 기반 CRM 자동화, CRM 성과관리, 프로모션 PM과 운영 시스템, PPL Workbench 사례를 담았습니다.

## 실행
Node.js 22 이상에서 별도 패키지 설치 없이 실행합니다.

```sh
npm run build
npm run check
npm start
```

미리보기: http://127.0.0.1:4173

## 수정
- `scripts/build.mjs`: 홈과 사례 콘텐츠, 공통 HTML 생성.
- `site/assets/style.css`: 디자인과 반응형·인쇄 스타일.
- `site/assets/app.js`: 지원 관점 전환.
- `PLAN.md`: 기획과 제작 범위.
- `EVIDENCE.md`: 출처와 보완할 원본 자료.

수정 후 `npm run build`로 정적 HTML을 갱신합니다. 홈페이지에 `?view=ops`를 붙이면 운영 시스템 관점으로 열립니다. JavaScript를 끈 경우에도 기본 콘텐츠와 상세 페이지를 읽을 수 있습니다.

## 배포
GitHub 저장소의 Pages 소스를 GitHub Actions로 설정합니다. main 브랜치에 푸시하면 `.github/workflows/pages.yml`이 빌드와 링크 검사 후 `site/`만 배포합니다.

## 콘텐츠 상태
문서의 수치를 유지하되 비교 기간과 관리자 원본이 확인되지 않았음을 표시했습니다. 실제 관리자 캡처, 공개 연락처, 재직 기간은 미제공 상태입니다. PDF 요약본은 아직 제작하지 않았으며 가짜 다운로드 링크를 제공하지 않습니다. 인쇄 버튼은 브라우저 인쇄 기능입니다.

원본 DOCX와 추출 메모는 공개 저장소에 포함하지 않습니다. 본문의 내부 URL, 고객정보, 계약 금액, 원가와 인증정보는 배포하지 않습니다.

## 검증
`npm run check`는 로컬 링크·자산·앵커·중복 ID·한국어 설정을 검사합니다. 실제 브라우저에서 PC와 모바일 레이아웃, 관점 전환, 상세 탐색을 별도로 확인합니다.
