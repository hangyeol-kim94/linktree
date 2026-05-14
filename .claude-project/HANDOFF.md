---
project: linktree
repo: https://github.com/hangyeol-kim94/linktree
branch: main
last_commit: 566bc4d
date: 2026-05-14
author: hangyeol.kim@dmate.kr
---

## Session Digest

정적 Linktree HTML 프로토타입을 Next.js 15 / TypeScript 프로덕션 앱으로 전환. `@next/third-parties`로 GTM을 주입하고 링크 버튼 클릭마다 `link_click` dataLayer 이벤트를 발생시키도록 구성. 빌드 통과, TypeScript 클린. GitHub에 푸시 완료. Vercel 배포는 아직 미완.

## Progress

### 완료
- [x] Next.js 15.3.2 + React 19 + TypeScript 프로젝트 구성
- [x] `layout.tsx` — GTM 주입 (`NEXT_PUBLIC_GTM_ID` 환경변수 존재 시)
- [x] `src/data/links.ts` — 링크 데이터 단일 진실 출처 (TypeScript)
- [x] `LinkButton.tsx` — 클릭 시 `sendGTMEvent` 호출 (link_click)
- [x] CSS Modules로 원본 디자인 보존
- [x] `.env.local.example` 및 `.gitignore` 구성
- [x] GitHub 푸시 (`hangyeol-kim94/linktree`, main, 566bc4d)
- [x] `npm run build` 및 `tsc --noEmit` 통과

### 미완
- [ ] GTM 컨테이너 생성 및 실제 Container ID 발급
- [ ] Vercel 환경변수에 `NEXT_PUBLIC_GTM_ID` 설정
- [ ] GTM 내부: GA4 Configuration 태그 + `link_click` 트리거/이벤트 태그 설정
- [ ] `src/data/links.ts` 플레이스홀더 `#` URL 교체 (포트폴리오, 블로그, LinkedIn, Notion)
- [ ] Vercel 배포
- [ ] GA4 DebugView에서 이벤트 수신 확인

## Next Steps (우선순위순)

1. **GTM 컨테이너 생성** — tagmanager.google.com에서 Web 컨테이너 생성 후 `GTM-XXXXXXX` ID 복사
2. **GA4 연결** — GTM 내부에 GA4 Configuration 태그 추가 (트리거: All Pages)
3. **link_click 태그 설정** — GA4 Event 태그, 이벤트명 `link_click`, 트리거: 맞춤 이벤트 `link_click`. dataLayer 변수 매핑: `link_id`, `link_name`, `link_url`, `link_position`
4. **Vercel 배포** — `hangyeol-kim94/linktree` 임포트 후 환경변수 `NEXT_PUBLIC_GTM_ID` 설정
5. **실제 URL 입력** — `src/data/links.ts`의 `#` URL 교체
6. **트래킹 검증** — GTM Preview + GA4 DebugView에서 `link_click` 이벤트 확인
7. **index.html 정리** — Vercel 배포 확인 후 구 HTML 프로토타입 삭제 가능

## Blockers

- `NEXT_PUBLIC_GTM_ID` 미설정 → GTM 스크립트 미주입, GA4 트래킹 비활성
- Vercel 미연결 → 라이브 URL 없음

## Watch Out

- `NEXT_PUBLIC_GTM_ID`는 Vercel 환경변수에 설정해야 함 (`.env.local`은 gitignore되어 프로덕션에 미반영)
- GTM 조건부 렌더링: 변수 없으면 에러 없이 조용히 트래킹 비활성화됨
- `url: '#'` 상태에서 클릭 시 `link_url: "#"` 으로 GA4에 기록됨 — 라이브 전 교체 필수
- `index.html`은 Next.js 빌드와 무관한 구 프로토타입 (데드 코드)

## Files Touched

| 파일 | 역할 |
|---|---|
| `src/app/layout.tsx` | GTM 주입 |
| `src/app/page.tsx` | 메인 페이지 |
| `src/app/globals.css` | 글로벌 스타일 |
| `src/app/page.module.css` | 페이지 레이아웃 |
| `src/components/LinkButton.tsx` | 클릭 이벤트 + GTM |
| `src/components/LinkButton.module.css` | 버튼 스타일 |
| `src/data/links.ts` | 링크/프로필 데이터 |
| `package.json` | 의존성 |
| `.env.local.example` | 환경변수 문서화 |
| `CLAUDE.md` | 프로젝트 가이드 |
