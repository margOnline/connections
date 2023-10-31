export const isOneAway = ({ words }) => {
  const categoryIds = words.map((word) => word.categoryId);
  const counter = categoryIds.reduce((acc, id) => {
    acc[id] = acc[id] + 1 || 1;
    return acc;
  }, {});
  return Object.values(counter).includes(3);
};
