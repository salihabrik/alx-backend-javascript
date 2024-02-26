export default function getBudgetObject(income, gdp, capita) {
  // Use shorthand property names to create the object
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
