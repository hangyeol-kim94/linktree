---
name: linktree-data-and-stack
description: 링크트리 프로젝트 스택 및 데이터 위치
metadata:
  type: project
---

Next.js 15 App Router + TypeScript + CSS Modules. 링크 데이터는 `src/data/links.ts`에만 존재 — 모든 링크 추가/수정/삭제는 여기서 처리. GitHub: https://github.com/hangyeol-kim94/linktree

**Why:** 컴포넌트 전역 검색 없이 링크 데이터 위치를 바로 알 수 있음.
**How to apply:** 링크 추가/수정 요청 시 `src/data/links.ts`로 바로 이동. `iconVariant` 값이 버튼 색상을 결정.
