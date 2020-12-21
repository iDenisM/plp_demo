export const textSearchKeyDown = (value: string) => {
  return {
    type: 'SEARCHING',
    payload: value
  }
}