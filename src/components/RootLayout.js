import React from 'react'
import {Outlet} from 'react-router-dom'
import AppbarV2 from './AppbarV2'
export default function RootLayout() {
  return (
  <>
  <AppbarV2/>
  <Outlet/>
  </>
  )
}
