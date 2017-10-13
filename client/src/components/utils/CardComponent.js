import React from 'react'
import injectSheet from 'react-jss'
import Card, {CardContent} from 'material-ui/Card'

const styles = {

}

const enhancer = injectSheet(styles)

const CardComponent = ({children, ...props}) =>
  <Card {...props}>
    <CardContent>
      {children}
    </CardContent>
  </Card>

export default enhancer(CardComponent)
