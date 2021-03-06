import React, {Component} from 'react';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValue,
      errors: {}
    };
  };

  onChange(name, value) {
    this
      .props
      .setInitialValue(name, value, this.state.errors);
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  }

  setError(name, error) {
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: error
      }
    });
  };

  getError(name) {
    return this.state.errors[name];
  }

  render() {

    const value = {
      formState: this.state.values,
      onChange: (name, value) => this.onChange(name, value),
      setError: (name, value) => this.setError(name, value),
      getError: name => this.getError(name)
    };

    return (
      <FormContext.Provider value={value}>
        {this.props.children}
      </FormContext.Provider>
    )
  };
}

export default FormContainer;