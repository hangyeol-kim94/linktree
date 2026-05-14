---
name: linktree-gtm-integration
description: GTM/GA4 연동 구조 및 이벤트 스키마
metadata:
  type: project
---

GTM은 `@next/third-parties`의 `GoogleTagManager`로 `layout.tsx`에 주입. `NEXT_PUBLIC_GTM_ID` 환경변수 없으면 에러 없이 조용히 미주입. 버튼 클릭 이벤트:

```ts
sendGTMEvent({ event: 'link_click', link_id, link_name, link_url, link_position })
```

Vercel 배포 시 프로젝트 환경변수에 `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` 설정 필수.

GTM 내부 설정: dataLayer 변수(link_id, link_name, link_url, link_position) + 맞춤 이벤트 트리거(`link_click`) + GA4 이벤트 태그.

**Why:** 이벤트 스키마와 환경변수 이름을 매 세션마다 재추론하지 않기 위해.
**How to apply:** 새 이벤트 추가나 애널리틱스 디버깅 시 위 스키마 기준. 배포 시 Vercel 환경변수 확인.
