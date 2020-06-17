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
  const { enhancement, durability } = item;

  if (enhancement < 15) {
    return { ...item, durability: durability - 5 };
  } else if (enhancement <= 16) {
    return { ...item, durability: durability - 10 };
  } else if (enhancement > 16) {
    return { ...item, enhancement: enhancement - 1 };
  } else {
    return { ...item };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
