import { Map } from 'immutable';
import { isString } from 'lodash';
import ErrorSet from '../ErrorSet';

// type Errors = ErrorSet | { code?: string };
export interface Errors extends ErrorSet {
  code?: string;
}

class ErrorIntl {
  intl: any;
  context: any;

  constructor(intl: any, context: any) {
    this.intl = intl;
    this.context = context;
  }

  msgId(error: Errors, context = this.context): string | null {
    if (!error) {
      return null;
    }

    let code;

    if (isString(error)) {
      code = error;
    } else if (Map.isMap(error)) {
      code = error.get('code');
    } else {
      code = error.code;
    }
    if (!code) {
      return null;
    }

    let key;
    if (context !== '') {
      key = `${context}.E.${code}`;
    } else {
      key = `E.${code}`;
    }
    return key;
  } 

  msg(error: Errors, context = this.context) {
    const id = this.msgId(error, context);
    if (!id) {
      return null;
    }

    return this.intl.formatMessage({
      id,
      defaultMessage: id,
    });
  }

  global(error: Errors) {
    const id = this.msgId(error, '');
    if (!id) {
      return null;
    }

    return this.intl.formatMessage({
      id,
      defaultMessage: id,
    });
  }
}

export default ErrorIntl;
