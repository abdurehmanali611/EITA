import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("Contacts")

  return (
    <div>
      {t("contacts page")}
    </div>
  )
}
