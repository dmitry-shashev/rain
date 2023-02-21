import React from 'react'
import { Page } from '../interfaces/page'
import { Button, TextField } from '@mui/material'

const LoginPage: Page = () => {
  return (
    <div>
      <form action="">
        <div className="mb10">
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </div>
        <Button fullWidth type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
