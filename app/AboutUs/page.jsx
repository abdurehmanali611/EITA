import React from 'react'
import {useTranslations} from 'next-intl'

export default function page() {
  const t = useTranslations("AboutUs")
  return (
    <div 
    className='flex flex-col gap-10'>
      <div 
      style={{backgroundImage: `url(${'/assets/background.jpg'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%'}}
      className='flex flex-col gap-10 text-center h-[500px] justify-center'>
        <h3 className='font-serif text-3xl font-semibold'>{t("Welcome to the Islamic Teaching Organization")}</h3>
        <h4 className='font-mono text-2xl'>{t("Fostering Knowledge and Understanding")}</h4>
      </div>
      <section className='flex flex-col gap-10 items-center w-[70%] self-center'>
        <h3 className='font-serif text-xl font-semibold'>{t("Who we are:")}</h3>
        <p className='font-mono text-lg'>
          {t("The Ethiopian Islamic Teaching Association is a dedicated organization committed to fostering Islamic knowledge, values, and community development in Ethiopia Our association serves as a beacon of education, spiritual growth, and social welfare for all members of the Muslim community By promoting authentic Islamic teachings and principles, EITA aims to nurture a more informed, united, and compassionate society")}
        </p>
      </section>
      <section className='flex flex-col gap-10 items-center w-[70%] self-center'>
        <h3 className='font-serif text-xl font-semibold'>{t("Our Mission")}</h3>
        <p className='font-mono text-lg'>
        {t("To provide comprehensive Islamic education, promote moral and ethical values, and empower communities through knowledge, guidance, and social support The EITA strives to create an environment where every individual can access high-quality Islamic learning resources and spiritual development opportunities")}
        </p>
      </section>
      <section className='flex flex-col gap-10 items-center w-[70%] self-center'>
        <h3 className='font-serif text-xl font-semibold'>{t("Our Vision")}</h3>
        <p className='font-mono text-lg'>
        {t("To be a leading Islamic teaching institution in Ethiopia, recognized for its excellence in education, spiritual guidance, and community service We envision a future where Islamic teachings inspire compassion, unity, and progress for the betterment of individuals and society as a whole")}
        </p>
      </section>
      <section className='flex flex-col gap-10 items-center w-[70%] self-center'>
        <h2 className='font-serif text-xl font-semibold'>{t("Our Core Values")}</h2>
        <ul className='flex flex-col gap-5'>
          <li className='font-mono text-lg'><strong>{t("Knowledge and Learning")}</strong>{t(": We are committed to the continuous pursuit of knowledge and education, guided by the teachings of the Qur'an and Sunnah")}</li>
          <li className='font-mono text-lg'><strong>{t("Integrity and Honesty")}</strong>{t(": We uphold the highest standards of integrity and transparency in all our activities and interactions")}</li>
          <li className='font-mono text-lg'><strong>{t("Compassion and Service")}</strong>{t(": We prioritize compassion and service to others, aiming to uplift and support those in need within our communities")}</li>
          <li className='font-mono text-lg'><strong>{t("Unity and Brotherhood")}</strong>{t(": We promote unity, cooperation, and mutual respect, fostering a sense of brotherhood among all members of the community")}</li>
          <li className='font-mono text-lg'><strong>{t("Spiritual Excellence")}</strong>{t(": We emphasize the importance of spiritual development and encourage adherence to Islamic principles in daily life")}</li>
          <li className='font-mono text-lg'><strong>{t("Empowerment and Inclusivity")}</strong>{t(": We strive to empower individuals of all ages and backgrounds to actively participate in community development and educational initiatives")}</li>
        </ul>
      </section>
      <p className="text-center w-[70%] self-center font-mono text-xl">
        {t("Through these guiding principles, EITA aims to cultivate an environment of learning, spirituality, and social responsibility, contributing to a harmonious and just society")}
      </p>
    </div>
  )
}
