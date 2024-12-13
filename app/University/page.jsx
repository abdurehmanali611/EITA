import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("University")

  return (
    <div>
      {t("University page")}
    </div>
  )
}
