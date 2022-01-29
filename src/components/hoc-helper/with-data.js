import React from "react"
import ErrorMessage from "../error-message"
import Spinner from "../spinner"

const withData = (Veiw) => {
  return class extends React.Component {

    state = {
      data: null,
      error: false,
      loading: true
    }

    componentDidUpdate(prevProps) {
      if(this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false
      })

      this.props.getData()
      .then((data) => {
        this.setState({
          data,
          loading: false
        })
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true
        })
      })
    }

    render(){
      const { data, loading, error} = this.state;

      if (loading) {
        return <Spinner />
      }
      if(error) {
        return <ErrorMessage />
      }

      return <Veiw { ...this.props } data={data}/>
    }
  }
}

export default withData;