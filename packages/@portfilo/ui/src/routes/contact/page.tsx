import React from 'react'
import {
  Button,
  Container,
  Paper,
  Snackbar,
  TextField,
  Fade,
  Alert,
  Typography,
  Box,
  AlertColor
} from '@mui/material'
import SocialMediaButton from 'components/social-media-button/component'

export default function ContactPage () {
  const [open, setOpen] = React.useState(false)
  const [alert, setAlert] = React.useState<AlertColor>('success')
  const [alertMessage, setAlertMessage] = React.useState('')
  const [message, setMessage] = React.useState('')

  const MESSAGE_PLACEHOLDER = 'or feel free to send me a message'

  const handleSend = () => {
    setAlert('success')
    setAlertMessage(`Message has been sent, thank you!`)
    setOpen(true)
  }

  return(         
    <Fade in={true} timeout={1000}>     
      <Container className='contact' sx={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper sx={{padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'}}>
          <Box sx={{marginRight: 'auto'}}>
            <Typography variant='h6'>You can find me via these scoial medias: </Typography>
            <Box>
              <SocialMediaButton type='LinkedIn' />
              <SocialMediaButton type='Github' />
              <SocialMediaButton type='Facebook' />
              <SocialMediaButton type='Instagram' />
            </Box>
          </Box>
          <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <br />
            <TextField label={MESSAGE_PLACEHOLDER} value={message} onChange={(e)=>setMessage(e.target.value)} multiline rows={5} fullWidth />
            <br />
            <Button color='primary' variant='contained' disabled={!message} onClick={handleSend}>Send</Button>
          </Box>
        </Paper>
        <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={2000} open={open} onClose={() => setOpen(false)}>
          <Alert severity={alert}>{alertMessage}</Alert>  
        </Snackbar>
      </Container>
    </Fade>    
  )
}