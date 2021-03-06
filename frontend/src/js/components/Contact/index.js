import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  margin: '4em auto'
}
const repoLink = 'https://github.com/foundersandcoders'

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <h3>Get in touch with us!</h3>
          <a href={repoLink} target='_blank'></a>
        </Col>
      </Row>
    </Grid>
  )
}
