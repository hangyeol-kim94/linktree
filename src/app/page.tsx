import LinkButton from '@/components/LinkButton'
import { profile, links } from '@/data/links'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>{profile.avatar}</div>
      <p className={styles.name}>{profile.name}</p>
      <p className={styles.bio}>{profile.bio}</p>

      <div className={styles.links}>
        {links.map((link, index) => (
          <LinkButton key={link.id} {...link} position={index + 1} />
        ))}
      </div>

      <p className={styles.footer}>© 2026 {profile.name}</p>
    </div>
  )
}
