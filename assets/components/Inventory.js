const inventory = {
  items: [],
  addMonToInventory: (name, image) => {
      inventory.items = [...inventory.items, { name, image }];
  }
}
export default inventory;