import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Card, {CardContent, CardActions} from 'material-ui/Card'
import FavoriteIcon from 'material-ui-icons/Favorite'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  classes: PropTypes.object.isRequired
}

const styles = {
}

const enhancer = injectSheet(styles)

const CardComponent = ({children, ...props}) =>
  <Card {...props}>
    <CardContent>
      {children}
    </CardContent>
  </Card>

CardComponent.propTypes = propTypes

export default enhancer(CardComponent)
