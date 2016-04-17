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
      beds: document.getElementById('service').value,
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
          <Input type="text" className="textcolor"label="Provider" id="Provider" placeholder="Enter text" />
          <Input type="email" label="Contact Email Address" placeholder="Enter email" />
          <Input type="phoneNumber" label="Contact Landline" placeholder="Enter Landline"/>
          <Input type="phoneNumber" label="Contact Mobile" placeholder="Enter Landline"/>
              <Input type="select" label="Type of Service" id="service">
                <option value="Art">Art</option>
                <option value="Employability">Employability</option>
                <option value="Alcoholics Annonymous">Alcoholics Annonymous</option>
                <option value="Narcotics Annonymous">Narcotics Annonymous</option>
                <option value="Sex Annonymous">Sex Annonymous</option>
                <option value="Showers">Showers</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
              </Input>
          <Input type="textarea" label="Restrictions on who can attend" placeholder="Restrictions." />
          <Input type="text" label="Are you serving food?" id ="Food" placeholder="Yes/No"/>
            <Input type="select" label="Reoccuring Service" id="Day">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Fridayy</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </Input>
            <Input type="number" label="Please enter date" placeholder="DD/MM/YY"/>
            <Input type="number" label="Please enter time" placeholder="00:00"/>
            <Input type="select" label="Reoccuring Service" id="Reoccuring">
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </Input>
          <ButtonGroup label="Gender">
            <Input type="radio" label="Male"  />
            <Input type="radio" label="Female" />
            <Input type="radio" label="Other" />
          </ButtonGroup>
          <Input type="file" label="Image" help="[Optional]" />
          <ButtonInput type="submit" value="Submit Button" />
        </form>
      </Row>
    </Grid>
  )
}
