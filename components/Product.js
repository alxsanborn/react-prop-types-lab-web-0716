const React = require('react');

class Product extends React.Component {
  render () {
    return (
      <div>
      <h2>{this.props.name}</h2>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName) {
     if (props[propName] === undefined) {
         return new Error('undefined');
       }
     else if (isNaN(props[propName])) {
       return new Error('not a number');
     }
     else if (props[propName] < 80 || props[propName] > 300) {
       return new Error('range must be between 80 and 300');
     }
   }

   }

module.exports = Product;
