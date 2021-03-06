const router = require("express").Router();

const Users = require("../users/usersModel");

router.get("/", async (req, res) => {
  const users = await Users.find();
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  let user = await Users.findById(id);
  const profile = await Users.findProfile(id);
  const location = await Users.findLocation(id);
  res.status(200).json({
    ...user,
    profile: profile ? profile : {},
    location: location ? location : {},
  });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Users.findById(id);
  await Users.del(id);
  res
    .status(200)
    .json({ message: `User with the ID of ${user.id} has been removed` });
});

router.get("/:id/cart", async (req, res) => {
  const id = req.params.id;
  const user = await Users.findById(id);
  const cart = await Users.findCartById(id);
  res.status(200).json({ userId: user.id, cart: cart });
});

router.get("/:id/inventory", async (req, res) => {
  const id = req.params.id;
  const user = await Users.findById(id);
  const profile = await Users.findProfile(id);

  if (profile.is_grower) {
    const inventory = await Users.findInventoryById(id);
    res.status(200).json({ userId: user.id, inventory: inventory });
  } else {
    res.status(400).json({ errorMessage: "You must be a registered grower" });
  }
});
module.exports = router;
