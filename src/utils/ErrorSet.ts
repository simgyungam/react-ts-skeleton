import { Map, Set } from 'immutable';

export type ErrorType = Map<string, string>;

class ErrorSet {
  errors: Set<ErrorType>;

  static createEmpty(): ErrorSet {
    return new ErrorSet();
  }

  constructor(errors = Set()) {
    this.errors = errors;
  }

  add(code: string, target: string, args = {}): ErrorSet {
    let errors = this.errors;
    const error = this.errors.find((e: ErrorType) => e.get('target') === target);
    if (error) {
      errors = errors.remove(error);
    }
    return new ErrorSet(errors.add(Map({ code, target, ...args })));
  }

  has(target: string): boolean {
    return this.errors.some(e => e.get('target') === target);
  }

  remove(target: string): ErrorSet {
    const error = this.errors.find((e: ErrorType) => e.get('target') === target);
    if (error) {
      return new ErrorSet(this.errors.remove(error));
    }
    return this;
  }

  get(target: string): ErrorType | undefined {
    return this.errors.find((e: ErrorType) => e.get('target') === target);
  }

  getCode(target: string): string | undefined {
    const error = this.get(target);
    if (error) {
      return error.get('code');
    }
    return undefined;
  }

  getArg(target: string, arg: string): string | undefined {
    const error = this.get(target);
    if (error) {
      return error.get(arg);
    }
    return undefined;
  }

  isEmpty(): boolean {
    return this.errors.isEmpty();
  }
}

export default ErrorSet;
