const db = require("../data/dbConfig");

module.exports = {
  add,
  del,
  find,
  findBy,
  findById,
  findProfile,
  findLocation,
  findCartById,
  findInventoryById,
};

function find() {
  return db("user").select("id", "username", "password");
}

function findBy(filter) {
  return db("user").where(filter);
}

async function add(user) {
  const id = await db("user").insert(user);
  return id[0];
}

async function del(id) {
  const userCount = await db("user").where("id", id).del();
  return userCount;
}

function findById(id) {
  return db("user").where({ id }).first();
}

async function findProfile(id) {
  const profiles = await db("user_profile");
  try {
    const profile = profiles.filter((u) => u.user_id == id)[0];

    return { ...profile, is_grower: profile.is_grower };
  } catch {
    return {};
  }
}

async function findLocation(id) {
  const location = await db("location");

  return location.filter((u) => u.user_id == id)[0];
}

async function findCartById(id) {
  const userCart = await db("user_cart");
  const cartItems = await db("cart_item");
  const inventoryItems = await db("inventory_item");
  const userCartItems = userCart.map((uc) => {
    let items = [];
    inventoryItems.map((ii) => {
      cartItems.map((ci) => {
        if (
          uc.user_id == id &&
          uc.cart_item_id == ci.id &&
          ci.inventory_item_id == ii.id
        ) {
          items.push({ ...ii, quantity: ci.quantity });
        }
      });
    });
    return items;
  });

  return userCartItems.flat();
}

async function findInventoryById(id) {
  const userInventory = await db("user_inventory");
  const inventoryItems = await db("inventory_item");
  const userInventoryItems = userInventory.map((ui) => {
    let items = [];
    inventoryItems.map((ii) => {
      if (ui.user_id == id && ui.inventory_item_id == ii.id) {
        items.push(ii);
      }
    });
    return items;
  });

  return userInventoryItems.flat();
}
