import Mon1 from '../mons/1.png';
import Mon2 from '../mons/2.png';
import Mon5 from '../mons/5.png';

const inventory = {
  items: [],
  addMonToInventory: (name, image) => {
      console.log("adding mon to inventory");
      inventory.items = [...inventory.items, { name, image }];
  }
}
export default inventory;