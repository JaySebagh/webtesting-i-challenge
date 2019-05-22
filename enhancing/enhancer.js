module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20) {
  } else {
    item.enhancement = item.enhancement + 1
  }
  return { ...item };
}

function fail(item) {
  // avoid negative number if enhancement < 15 and durability < 5
  if(item.enhancement < 15 && item.durability < 5) {
    item.durability = 0
    // if item enhancement is < 15, durability -5
  } else if (item.enhancement < 15) {
    item.durability = item.durability - 5
  } else if(item.enhancement === 15 || item.enhancement === 16) {
    item.durability = item.durability - 10
  } else if(item.enhancement > 16) {
    item.enhancement = item.enhancement - 1
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
