import ErrorIntl, { Errors } from './error';
// import { ErrorType } from '../ErrorSet';

class IntlMsg {
  intl: any;
  context: any;
  errorIntl: ErrorIntl;

  constructor(intl: any, context = '') {
    this.intl = intl;
    this.context = context;
    this.errorIntl = new ErrorIntl(intl, context);
  }

  msgId(id: string, context = this.context) {
    return context ? `${context}.${id}` : id;
  }

  msg(id: string, context = this.context) {
    const intlId = this.msgId(id, context);
    return this.intl.formatMessage({
      id: intlId,
      defaultMessage: intlId,
    });
  }

  errorMsg(error: Errors, context = this.context) {
    return this.errorIntl.msg(error, context);
  }

  errorCtx(error: Errors) {
    return this.errorIntl.global(error);
  }

  msgCtx(id: string) {
    const intlId = this.msgId(id, '');
    return this.intl.formatMessage({
      id: intlId,
      defaultMessage: intlId,
    });
  }
}

export default IntlMsg;
