import React from 'react'
import {Input, ButtonInput, Grid, Col, Row, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

// console.log(document.getElementById('Provider').value, document.getElementById('Beds').value,
// document.getElementById('Food').value, "wowowoooooooooooooooo")

export default (props) => {
  const handler = (e) => {
    console.log('EVENT', e)
    e.preventDefault()
    const id = window.location.pathname.split('/');
    axios.post('/api/branch/'+ id[0],
    {
      provider: document.getElementById('Provider').value,
      service: document.getElementById('service').value,
      foods: document.getElementById('Food').value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  }

// const stylespan =
// {
//   .textcolor: {color:'#fff'}
//
// }

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


// <DropdownButton title="Beds" id="bg-nested-dropdown">
//   <MenuItem eventKey="1">0</MenuItem>
//   <MenuItem eventKey="2">0-5</MenuItem>
//   <MenuItem eventKey="3">5-10</MenuItem>
//   <MenuItem eventKey="4">15-10</MenuItem>
//   <MenuItem eventKey="5">20+</MenuItem>
// </DropdownButton>
// <Input type="Serving food" label="Select" id="Food" placeholder="select">
// </Input>
