import React from 'react'
import {Input, ButtonInput, Grid, Col, Row, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

  // handleChange() {
  //   // This could also be done using ReactLink:
  //   // http://facebook.github.io/react/docs/two-way-binding-helpers.html
  //   this.setState({
  //     value: this.refs.input.getValue()
  //   });
  // },

  export default (props) => {
    return (
      <Grid>
        <Row>
        <form>
          <Input type="text" label="Provider" placeholder="Enter text" />
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
          <Input type="select" label="Select" placeholder="select">
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

// ReactDOM.render(<ExampleInput />, mountNode);
