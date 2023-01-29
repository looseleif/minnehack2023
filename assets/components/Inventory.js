const inventory = {
  items: [],
  addMonToInventory: (name, image) => {
      console.log("adding mon to inventory");
      inventory.items = [...inventory.items, { name, image }];
  }
}
export default inventory;