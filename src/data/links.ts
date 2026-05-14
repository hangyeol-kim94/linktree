export interface LinkItem {
  id: string
  title: string
  description: string
  url: string
  icon: string
  iconVariant: 'portfolio' | 'github' | 'blog' | 'linkedin' | 'notion' | 'email'
}

export const profile = {
  name: '김한결',
  bio: '개발자 · 디자이너 · 크리에이터\n새로운 것을 만드는 걸 좋아합니다 🚀',
  avatar: '👤',
}

export const links: LinkItem[] = [
  {
    id: 'portfolio',
    title: '포트폴리오',
    description: '제 작업물과 프로젝트를 확인해보세요',
    url: '#',
    icon: '🌐',
    iconVariant: 'portfolio',
  },
  {
    id: 'github',
    title: 'GitHub',
    description: '오픈소스 기여 및 개인 프로젝트',
    url: 'https://github.com/hangyeol-kim94',
    icon: '🐙',
    iconVariant: 'github',
  },
  {
    id: 'blog',
    title: '기술 블로그',
    description: '개발 경험과 인사이트를 공유합니다',
    url: '#',
    icon: '✍️',
    iconVariant: 'blog',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: '커리어 및 네트워킹',
    url: '#',
    icon: '💼',
    iconVariant: 'linkedin',
  },
  {
    id: 'notion',
    title: 'Notion 이력서',
    description: '경력 및 프로젝트 정리본',
    url: '#',
    icon: '📋',
    iconVariant: 'notion',
  },
  {
    id: 'email',
    title: '이메일 문의',
    description: 'hangyeol.kim@dmate.kr',
    url: 'mailto:hangyeol.kim@dmate.kr',
    icon: '✉️',
    iconVariant: 'email',
  },
]
