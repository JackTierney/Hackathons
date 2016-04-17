import React from 'react'
import {Input, ButtonInput, Grid, Col, Row, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

console.log(document.getElementById('Provider').value, document.getElementById('Beds').value,
document.getElementById('Food').value, "wowowoooooooooooooooo")

export default (props) => {
  const handler = (e) => {
    console.log('EVENT', e)
    e.preventDefault()
    const id = window.location.pathname.split('/');
    axios.post('/api/branch/'(id[0]),
    {
      provider: document.getElementById('Provider').value,
      beds: document.getElementById('Beds').value,
      document.getElementById('Food').value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  return (
    <Grid>
      <Row>
        <form onSubmit={handler}>
          <Input type="text" label="Provider" id="Provider" placeholder="Enter text" />
          <Input type="email" label="Contact Email Address" placeholder="Enter email" />
          <Input type="phoneNumber" label="Contact Landline" placeholder="Enter Landline"/>
          <Input type="phoneNumber" label="Contact Mobile" placeholder="Enter Landline"/>
          <Input type="text" label="Are you serving food?" id ="Food" placeholder="Yes/No"/>
          <Input type="number" label="Please enter number of beds" id ="Beds" placeholder="0-100"/>
          <ButtonGroup label="Gender">
            <Input type="radio" label="Male"  />
            <Input type="radio" label="Female" />
            <Input type="radio" label="Other" />
          </ButtonGroup>
          <Input type="file" label="Image" help="[Optional]" />
          <Input type="textarea" label="Text Area" placeholder="textarea" />
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
