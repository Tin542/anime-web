import { PUBLIC_PATH } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-navbar text-white">
        <div className="relative flex h-48 items-center justify-center font-bold">
          <div className="w-10/12 flex flex-row items-center justify-between">
            <div>
              <Link href={PUBLIC_PATH.HOME}>
                <h3>ANIME</h3>
              </Link>
            </div>
            <div className="flex flex-row justify-between items-center gap-14">
            </div>
            <div className="flex flex-row justify-between items-center">
            Copyright ©2024 All rights reserved | This template is made by tinnt
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer