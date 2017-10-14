import React from 'react'
import injectSheet from 'react-jss'
import Card, {CardContent, CardActions} from 'material-ui/Card'
import FavoriteIcon from 'material-ui-icons/Favorite'

const styles = {
  cardHeader: {
  },
  cardContent: {
  }
}

const enhancer = injectSheet(styles)

const CardComponent = ({children, ...props}) =>
  <Card {...props}>
    <CardContent>
      {children}
    </CardContent>
  </Card>

export default enhancer(CardComponent)
