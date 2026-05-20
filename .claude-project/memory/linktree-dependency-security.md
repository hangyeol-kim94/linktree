---
name: linktree-dependency-security
description: Next.js 최소 안전 버전 및 postcss 취약점 처리 방침
metadata:
  type: project
---

Next.js는 **15.5.18 이상** 유지 필수 (2026-05-20 기준 15.3.2 → 15.5.18 업데이트로 24개 critical 취약점 해소).

postcss moderate 취약점(3건)은 `npm audit fix --force` 사용 금지 — 해당 명령은 next를 9.3.3으로 다운그레이드하여 프로젝트를 파괴함. 현재 허용 잔존 취약점으로 방치.

**Why:** 매 세션마다 audit 결과를 재분석하거나 잘못된 fix 명령을 실행하는 실수를 방지.
**How to apply:** `npm audit` 실행 시 postcss 관련 moderate 항목은 무시. Next.js 업데이트는 minor/patch 범위 내에서만 진행. critical 항목이 다시 나타나면 Next.js 버전을 최신 패치 버전으로 올릴 것.
