"use client"
import { useTranslations } from 'next-intl'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default function page() {

  const t = useTranslations("Contacts")

  return (
    <div className = 'flex gap-80 p-6'>
      <MapContainer
      center={[9.005401, 38.763611]}
      zoom={13}
      style={{height: '400px', width: '400px', borderRadius: 20}}
      >
        <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker 
          position={[9.005401, 38.763611]}
          icon = {L.icon({
              iconUrl: '/assets/map.png',
              iconSize: [41, 41],
              iconAnchor: [20, 41],
              popupAnchor: [1, -34]
          })}
          >
              <Popup className='text-center font-serif'>
                {t("Ethiopian Islamic Teaching Association")}
              </Popup>
          </Marker>
      </MapContainer>
      <div className='flex flex-col gap-3'>
         <h4 className='text-center font-serif font-semibold text-xl'>{t("Reach Out to Us")}</h4>
         <h5 className='text-center font-mono text-lg'>{t("We value Your thoughts and questions")}</h5>
         <form className = 'flex flex-col gap-2'>
            <input 
            type="text" 
            placeholder={t("Your name")}
            className='bg-slate-200 rounded-lg p-3'
            />
            <input 
            type="email" 
            placeholder={t("Email")}
            className='bg-slate-200 p-3 rounded-lg'
            />
            <textarea 
            cols="20" 
            placeholder={t("message")}
            rows='7'
            className='bg-slate-200 p-3 rounded-lg'
            >
            </textarea>
            <input 
            type="submit" 
            value={t("Submit")}
            className='bg-green-400 py-2 rounded-lg self-center px-4'
            />
         </form>
      </div>
    </div>
  )
}
