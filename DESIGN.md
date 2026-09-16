---
name: 남귀현 경력 포트폴리오
description: CRM과 프로모션 실행을 운영 구조로 연결하는 편집형 사례집
colors:
  paper: "#f7f6f2"
  ink: "#202a34"
  navy: "#183b50"
  green: "#236958"
  muted: "#626966"
  line: "#d4d9d3"
  wash: "#e8eee8"
typography:
  display:
    fontFamily: "Pretendard, 'Malgun Gothic', sans-serif"
    fontSize: "clamp(38px, 4.45vw, 64px)"
    fontWeight: 650
    lineHeight: 1.24
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Pretendard, 'Malgun Gothic', sans-serif"
    fontSize: "34px"
    fontWeight: 600
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Pretendard, 'Malgun Gothic', sans-serif"
    fontSize: "25px"
    fontWeight: 600
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Pretendard, 'Malgun Gothic', sans-serif"
    fontSize: "16px"
    lineHeight: 1.9
  label:
    fontFamily: "Pretendard, 'Malgun Gothic', sans-serif"
    fontSize: "12px"
rounded:
  switch: "30px"
  switch-button: "24px"
spacing:
  compact: "12px"
  regular: "24px"
  generous: "32px"
components:
  switch-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.switch-button}"
    padding: "9px 17px"
  switch-button-selected:
    backgroundColor: "{colors.navy}"
    textColor: "white"
    rounded: "{rounded.switch-button}"
    padding: "9px 17px"
  result-panel:
    backgroundColor: "{colors.navy}"
    textColor: "#f6f8f4"
    padding: "36px 40px"
  note:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    padding: "24px 28px"
---

# Design System: 남귀현 경력 포트폴리오

## Overview

**Creative North Star: "편집형 운영 사례집"**

기존 기획안의 종이색·차콜·딥네이비와 넓은 여백을 유지한다. CRM 전후 비교와 업무 흐름을 중심으로, 큰 제목과 수평 프로젝트 목록이 읽는 순서를 만든다. 이 문서는 최초 방향 문서를 실제 정적 HTML/CSS 구현에 맞춰 구체화한 기록이다.

**Key Characteristics:**
- 한국어를 중심으로 한 읽기 쉬운 편집 구성
- 효율과 매출 규모를 함께 보여 주는 전후 비교
- 평평한 면과 가는 구분선
- 실제 증빙을 우선하고 개념도에는 성격을 명시

## Colors

종이색 바탕에 차콜 본문, 딥네이비 비교 영역과 청록 강조를 사용한다. 실제 값은 위 토큰을 기준으로 한다.

### Primary
- **딥네이비:** 핵심 성과 비교 영역과 선택된 지원 관점의 배경.

### Secondary
- **청록:** 제목의 핵심 문구, 프로젝트 성과, 키보드 초점 표시.

### Neutral
- **종이색:** 전체 페이지 바탕.
- **차콜:** 제목과 본문.
- **차분한 회색:** 설명, 분류, 출처.
- **경계 회색:** 목록과 섹션을 구분하는 선.
- **옅은 회녹색:** 운영 흐름, 표 머리글, 설명 상자.

## Typography

Pretendard를 사용하고 로딩되지 않으면 Malgun Gothic과 시스템 sans-serif로 대체한다. 제목과 본문에는 한국어 단어 단위 줄바꿈을 적용한다. 전후 지표와 표의 숫자는 고정 폭 숫자로 정렬한다.

홈의 큰 제목은 display 토큰, 섹션 제목은 headline, 프로젝트 제목은 title 토큰을 따른다. 상세 제목은 반응형 크기(clamp(34px, 4.2vw, 58px)), 두께 600, 행간 1.3이다. 상세 본문은 body 토큰, 홈 설명은 행간 1.85와 최대 폭 650px을 사용한다. 작은 출처는 12px이며 좁은 화면에서는 11px이다.

## Layout

최대 콘텐츠 폭은 1200px이며 기본 좌우 여백은 각각 44px이다. 850px 이하에서 24px, 520px 이하에서 20px으로 줄인다. 홈 섹션의 위아래 여백은 90px이며 좁은 화면에서 56px이다.

성과 영역은 설명과 비교표의 두 열(1:1.6), 소개는 두 열(1:1.7)이다. 둘 다 850px 이하에서 한 열로 바뀐다. 프로젝트 목록은 분류·설명·성과·화살표로 구성하고 작은 화면에서는 분류와 설명, 성과를 수직으로 쌓는다.

상세 페이지는 190px 목차와 본문 사이에 70px 간격을 둔다. 목차는 상단 28px에 고정되다가 850px 이하에서 일반 흐름의 가로 목록이 된다. 운영 흐름은 기본 네 열, 520px 이하 두 열이다. 표는 내용이 넓으면 표 영역 안에서 가로 스크롤한다.

## Elevation & Depth

그림자를 사용하지 않는다. 네이비와 옅은 회녹색의 평평한 면, 1px 구분선으로 정보 묶음을 구별한다. 프로젝트에 포인터를 올리면 연한 바탕과 청록 글자로 상태를 드러낸다.

## Shapes

콘텐츠 패널과 목록은 직각이다. 지원 관점 전환만 둥근 외곽과 알약 모양 버튼을 쓴다. 화살표는 채움 없는 선형 SVG이다.

## Components

### 지원 관점 전환

CRM·마케팅과 운영 시스템의 두 버튼으로 구성한다. 선택 상태는 네이비 바탕과 흰 글자, 비선택 상태는 투명 바탕과 회색 글자다. aria-pressed로 상태를 표시한다. 관점에 따라 소개와 프로젝트 순서를 변경하며 수치와 사실은 유지한다. URL의 view 매개변수로 관점을 공유한다.

### 프로젝트 목록

수평 구분선과 넓은 여백을 가진 전체 행 링크다. 제목, 짧은 설명, 결과와 한계를 함께 배치한다. 배경과 글자색 전환은 0.2초다.

### 성과 비교와 운영 흐름

비교표는 이전과 이후를 같은 행에 놓고 주요 숫자를 크게 표현한다. 광고비와 매출 변화도 함께 배치한다. 출처와 검증 상태는 패널 바로 아래에 둔다. 실제 관리자 화면이 없을 때는 HTML 흐름도를 개념도로 명시한다. 추후 증빙 이미지는 캡션과 함께 추가한다.

### 탐색과 접근성

상단에는 이름과 프로젝트·소개 링크를 둔다. 본문 바로가기 링크는 키보드 초점 시 보인다. 모든 키보드 초점은 청록 3px 외곽선과 5px 간격으로 표시한다. 도입 애니메이션은 0.7초 동안 투명도와 10px 수직 이동을 사용한다. 모션 축소 설정에서는 애니메이션·전환·부드러운 스크롤을 끈다. 인쇄 시 탐색과 조작 버튼을 숨긴다.

## Do's and Don'ts

### Do:
- **Do** 한국어 문구와 단어 단위 줄바꿈을 사용한다.
- **Do** 전후 수치와 출처, 비교의 한계를 가까이 배치한다.
- **Do** 프로젝트별 상세 주소와 모바일 한 열 읽기 흐름을 유지한다.

### Don't:
- **Don't** 출처와 기간이 없는 수치를 독립 검증값처럼 표현한다.
- **Don't** 실제 화면이 아닌 개념도를 실제 증빙처럼 표시한다.
- **Don't** 기존 평면 구성에 장식용 그림자나 AI 이미지를 추가한다.
