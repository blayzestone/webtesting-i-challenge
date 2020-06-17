module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const maxEnhancementValue = 20;
  const newEnhancementValue = item.enhancement + 1;

  return item.enhancement < maxEnhancementValue
    ? { ...item, enhancement: newEnhancementValue }
    : item;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
