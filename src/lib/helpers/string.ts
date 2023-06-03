export const limitText = (
  text: string,
  limitAmount: number = 15,
  withSpace: boolean = false
) => {
  return text.length <= limitAmount
    ? text
    : text.substring(0, limitAmount) + `${withSpace ? " ..." : "..."}`;
};
