import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Card, {CardContent, CardActions} from 'material-ui/Card'
import FavoriteIcon from 'material-ui-icons/Favorite'

const propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
}

const enhancer = injectSheet(styles)

const CardComponent = ({children, sheet, ...props}) => // eslint-disable-line no-unused-vars
  <Card {...props}>
    <CardContent>
      {children}
    </CardContent>
  </Card>

CardComponent.propTypes = propTypes

export default enhancer(CardComponent)
