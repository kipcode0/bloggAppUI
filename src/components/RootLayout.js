import React from 'react'
import {Outlet} from 'react-router-dom'
import AppbarV2 from './AppbarV2'
import AppbarV3 from './AppbarV3'
export default function RootLayout() {
  return (
  <>
  <AppbarV3/>
  <Outlet/>
  </>
  )
}
