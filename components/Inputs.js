import { createElement as $, Component as $$ } from 'react';
import { connect } from 'react-redux';

class Input extends $$ {
  componentDidMount() {
    this.input.focus();
  }

  render(){
    const { placeholder, onSubmit } = this.props;
    return (
      $('form', {
        action:'javascript:',
        onSubmit: () => onSubmit(this.input)
      },
        $('input', {
          ref: node => this.input = node,
          placeholder
        }))
    )
  }
}

const mapDispatchToMsgInputProps = dispatch => {
  return {
    placeholder: 'Type your heart out!',
    onSubmit: input => {
      dispatch({
        type: 'WS_SEND',
        data: {
          type: 'NEW_MESSAGE',
          message: input.value
        }
      });
      input.value = '';
    }
  };
}

const mapDispatchToUsernameInputProps = dispatch => {
  return {
    placeholder: 'What would you like to be feared by?',
    onSubmit: input => {
      dispatch({
        type: 'WS_SEND',
        data: {
          type: 'SET_USERNAME',
          username: input.value
        }
      });
      input.value = '';
    }
  };
}

const MsgInput = connect(null, mapDispatchToMsgInputProps)(Input);
const UsernameInput = connect(null, mapDispatchToUsernameInputProps)(Input);

export { MsgInput, UsernameInput };
