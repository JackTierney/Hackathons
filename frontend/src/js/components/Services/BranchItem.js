import React from 'react'
import {Col, Grid, Row} from 'react-bootstrap'

const style = {
  div1: {
    borderBottom: '1px solid white',
    width: '95%'
  },
  li: {
    listStyleType: 'none'
  },
  div2: {
    border: '1.5px solid white',
    width: '90%'
  }
}

export default (props) => {
    console.log("in branchitem", props)
      return (
        <li style={style.li}>
          <div style={style.div1}>
            <h3>{props.info.branch_name}</h3>
            <Grid>
              <Row>
                <div style={style.div2}>
                  <Col md={6}>
                    <h4>Address</h4>
                    <p>{props.info.address}</p>
                    <p>{props.info.address + ", " + props.info.postcode}</p>
                  </Col>
                  <Col md={6}>
                    <h4>Opening Hours</h4>
                    <p>{props.info.opening_hours}</p>
                  </Col>
                </div>
              </Row>
            </Grid>
            <h4>Contact</h4>
            <p>{props.info.address}</p>
            <p>{props.info.phone}</p>
            <p>{props.info.email}</p>
            <h4>Services</h4>
            <p>{props.info.serving_food ? "Currently serving food" : "Not currently serving food" }</p>
            <p>Classes: {props.info.beds}</p>
          </div>
        </li>
      )
}
