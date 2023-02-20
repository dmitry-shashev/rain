import React from 'react'
import { Page } from '../interfaces/page'
import { MoneyHelper } from '@rain/core'
import { SomeTestComponent } from '@rain/components'
import { Button } from '@mui/material'

const AboutPage: Page = () => {
  return (
    <div>
      <div>Some about page</div>
      <br />
      <SomeTestComponent name="Tester" />
      <div>Money helper - {MoneyHelper.format(12.3)}</div>
      <br />
      <Button variant="contained">Some Button</Button>
    </div>
  )
}

export default AboutPage
