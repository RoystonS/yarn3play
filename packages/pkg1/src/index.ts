export interface MyType {
  value: number;
}

export function getValue(): MyType {
  return {
    value: 42,
  };
}
