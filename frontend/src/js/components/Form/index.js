import React from 'react'
import {Input, ButtonInput, Grid, Col, Row, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

handler(e){
 const id = window.pathname.split('/');
  e.preventDefault()
  axios.post('/api/branch/{'+ id + '}', {
  document.getElementById('Provider')
  document.getElementById('bg-nested-dropdown')
  document.getElementById('Food')
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
}

  export default (props) => {
    return (
      <Grid>
        <Row>
        <form onSubmit={handler}>
          <Input type="text" label="Provider" id="Provider" placeholder="Enter text" />
          <Input type="email" label="Contact Email Address" placeholder="Enter email" />
          <Input type="phoneNumber" label="Contact Landline" placeholder="Enter Landline"/>
          <Input type="phoneNumber" label="Contact Mobile" placeholder="Enter Landline"/>
            <ButtonGroup label="Gender">
               <Input type="radio" label="Male"  />
                 <Input type="radio" label="Female" />
                 <Input type="radio" label="Other" />
               <DropdownButton title="Beds" id="bg-nested-dropdown">
                 <MenuItem eventKey="1">0</MenuItem>
                 <MenuItem eventKey="2">0-5</MenuItem>
                 <MenuItem eventKey="3">5-10</MenuItem>
                 <MenuItem eventKey="4">15-10</MenuItem>
                 <MenuItem eventKey="5">20+</MenuItem>
               </DropdownButton>
             </ButtonGroup>
          <Input type="Serving food" label="Select" id="Food" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </Input>
          <Input type="file" label="Image" help="[Optional]" />
          <Input type="select" label="Multiple Select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
          </Input>
          <Input type="textarea" label="Text Area" placeholder="textarea" />
          <ButtonInput value="Button Input" />
          <ButtonInput type="reset" value="Reset Button" />
          <ButtonInput type="submit" value="Submit Button" />
        </form>
        </Row>
      </Grid>
  );
}
