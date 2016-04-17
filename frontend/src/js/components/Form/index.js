import React from 'react'
import {
  Input,
  ButtonInput,
  Grid,
  Row,
  ButtonGroup,
} from 'react-bootstrap'
import axios from 'axios'

export default () => {
  const handler = (e) => {
    e.preventDefault()
    const id = window.location.pathname.split('/')
    axios.post('/api/branch/'+ id[2], {
      provider: document.getElementById('Provider').value,
      beds: document.getElementById('Beds').value + 0,
      servingFood: !! document.getElementById('Food').value
    })
    .then((response) => {
      console.log(response)
    })
    .catch((response) => {
      console.log(response)
    })
  }

  return (
    <Grid>
      <Row>
        <form onSubmit={handler}>
          <Input type='text' className='textcolor' label='Provider' id='Provider'
            placeholder='Enter text'
          />
          <Input type='email' label='Contact Email Address' placeholder='Enter email' />
          <Input type='phoneNumber' label='Contact Landline' placeholder='Enter Landline'/>
          <Input type='phoneNumber' label='Contact Mobile' placeholder='Enter Landline'/>
          <Input type='text' label='Are you serving food?' id='Food' placeholder='Yes/No'/>
          <Input type='number' label='Please enter number of beds' id='Beds' placeholder='0-100'/>
          <ButtonGroup label='Gender'>
            <Input type='radio' label='Male' />
            <Input type='radio' label='Female' />
            <Input type='radio' label='Other' />
          </ButtonGroup>
          <Input type='file' label='Image' help='[Optional]' />
          <Input type='textarea' label='Text Area' placeholder='textarea' />
          <ButtonInput type='submit' value='Submit Button' />
        </form>
      </Row>
    </Grid>
  )
}
