import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Location() {
  return (
    <>
    <Outlet />
    <div>지역별 페이지입니다.</div>
    </>
  )
}
