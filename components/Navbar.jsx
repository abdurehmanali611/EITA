"use client";
import setLanguageValue from '@/actions/set-languages-action';
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const t = useTranslations("Navbar")

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
                <h3 className='font-serif text-xl font-medium'>{t("Ethiopian Islamic Teaching Association")}</h3>
            <div>
            <ul className='flex gap-10'>
                   <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/'>{t("Home")}</Link>
                    </li>
                    <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/AboutUs'>{t("About Us")}</Link>
                    </li>
                    <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/Courses'>{t("Courses")}</Link>
                    </li>
                    <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/Resources'>{t("Resources")}</Link>
                    </li>
                    <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/Services'>{t("Services")}</Link>
                    </li>
                </ul>
                <ul className='flex justify-end items-center gap-10'>
                    <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/University'>{t("University")}</Link>
                    </li>
                    <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/Contacts'>{t("Contact Us")}</Link>
                    </li>
                    <li className='text-lg font-serif'>
                        <Link 
                        className='underline text-blue-600 hover:text-purple-400'
                        href='/Admin'>{t("Admin")}</Link>
                    </li>
                     <li>
                        <select onChange={(e) => setLanguageValue(e.target.value)}>
                            <option value='en'>{t("English")}</option>
                            <option value='ar'>{t("Arabic")}</option>
                            <option value='am'>{t("Amharic")}</option>
                        </select>
                     </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar