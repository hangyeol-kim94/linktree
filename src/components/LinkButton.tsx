'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import type { LinkItem } from '@/data/links'
import styles from './LinkButton.module.css'

interface Props extends LinkItem {
  position: number
}

export default function LinkButton({ id, title, description, url, icon, iconVariant, position }: Props) {
  const handleClick = () => {
    sendGTMEvent({
      event: 'link_click',
      link_id: id,
      link_name: title,
      link_url: url,
      link_position: position,
    })
  }

  return (
    <a
      href={url}
      className={styles.btn}
      target={url.startsWith('mailto:') ? undefined : '_blank'}
      rel={url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      onClick={handleClick}
    >
      <div className={`${styles.icon} ${styles[iconVariant]}`}>{icon}</div>
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.desc}>{description}</span>
      </div>
    </a>
  )
}
