import Mon1 from '../mons/1.png';
import Mon2 from '../mons/2.png';
import Mon5 from '../mons/5.png';

const inventory = {
  items: [
    { name: 'Mon1', image: Mon1 },
    { name: 'Mon2', image: Mon2 },
    { name: 'Mon3', image: Mon5 },
  ],
  addMonToInventory: (name, image) => {
      console.log("adding mon to inventory");
      inventory.items = [...inventory.items, { name, image }];
  }
}
export default inventory;