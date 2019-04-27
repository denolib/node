export function isBoolean(value: unknown) {
  return typeof value === "boolean" || value instanceof Boolean;
}

export function isNull(value: unknown) {
  return value === null;
}

export function isNullOrUndefined(value: unknown) {
  return value === null || value === undefined;
}

export function isNumber(value: unknown) {
  return typeof value === "number" || value instanceof Number;
}

export function isString(value: unknown) {
  return typeof value === "string" || value instanceof String;
}

export function isSymbol(value: unknown) {
  return typeof value === "symbol";
}

export function isUndefined(value: unknown) {
  return value === undefined;
}

export function isObject(value: unknown) {
  return value !== null && typeof value === "object";
}

export function isError(e: unknown) {
  return e instanceof Error;
}

export function isFunction(value: unknown) {
  return typeof value === "function";
}
