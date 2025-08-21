/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;

function calculateRentalCost(days) {
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  const total = days * DAILY_RATE - discount;

  return total;
}

module.exports = calculateRentalCost;
