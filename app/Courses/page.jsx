import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("Courses")

  return (
    <div>
      {t("Courses page")}
    </div>
  )
}
