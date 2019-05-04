import React from 'react'

function MethodMixin (Component) {
  return class Method extends Component {
    componentDidMount () {
      console.log("Component mounted")
    }
  }
}

export default MethodMixin;
