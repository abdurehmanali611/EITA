import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("Resources")

  return (
    <div>
      {t("Resources page")}
    </div>
  )
}
