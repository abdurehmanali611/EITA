import React from 'react'
import {useTranslations} from 'next-intl'

export default function page() {
  const t = useTranslations("AboutUs")
  return (
    <div>
      {t("About us page")}
    </div>
  )
}
