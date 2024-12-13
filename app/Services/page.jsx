import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("Services")

  return (
    <div>
      {t("service page")}
    </div>
  )
}
