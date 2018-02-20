import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';
import IconButton from '../../../components/iconButton';
import './styles.scss';

class PictureInput extends Component {
  static propTypes = {
    uploadToFirebase: PropTypes.func.isRequired,
    transitionToLoading: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      file: null,
      errorMessage: null,
    };
  }

  // Wrapped async function because of react hot loader bug :(
  onFormSubmit = event => (async () => {
    event.preventDefault();

    await this.props.uploadToFirebase(this.state.file);
  })().then(() => {
    this.props.transitionToLoading();
  });;

  onFormChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  render() {
    return (
      <form className="picture-form" onSubmit={this.onFormSubmit}>
        <Row>
          <input className="form-input" type="file" onChange={this.onFormChange} />
        </Row>
        {
          this.state.file !== null ?
            <IconButton>
              Is it a taco?
            </IconButton>
          :
          null
        }
      </form>
    );
  }
}

export default PictureInput;
