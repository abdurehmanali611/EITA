import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("Admin")

  return (
    <div>
      {t("Admin Page")}
    </div>
  )
}
