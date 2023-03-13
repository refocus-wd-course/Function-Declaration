/* 
    todo : Create a point-of-sale system
    todo : create a script that will process all the delivered items and add them to the current stores inventory
    todo : define the store inventory array
*/

/* Define the Store Inventory Array */
const store_inventory = [
  {
    item: "Shampoo",
    quantity: 1,
    price_$: 3,
  },
  {
    item: "Soap",
    quantity: 0,
    price_$: 2,
  },
  {
    item: "Toothpaste",
    quantity: 2,
    price_$: 3,
  },
];

/* Define the Delivered Items Array */
const new_deliveries = [
  {
    item: "Shampoo",
    quantity: 5,
    price_$: 4,
    inventory_index: 0,
  },
  {
    item: "Soap",
    quantity: 10,
    price_$: 2,
    inventory_index: 1,
  },
  {
    item: "Tootpaste",
    quantity: 10,
    price_$: 3,
    inventory_index: 2,
  },
];
/* function to process each delivery item */
const processDeliveries = function (items_obj) {
  store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
  store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
};
/* Process All Delivered Items */
new_deliveries.forEach(processDeliveries);

/* function to slice the first 3 letters and transform to lowercase */
const productSummary = (items_obj) => {
  const item_id = items_obj.item.slice(0, 3).toLowerCase();
  var remarks = "Good";
  if (items_obj.quantity < 10) {
    remarks = "Item stock is low";
  }
  var message = `itemID: ${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks: `;
  return message.concat(remarks);
};
const report_summary = store_inventory.map(productSummary);

// console.log(`Delivered items have been added to the inventory.`);
// console.log(`New inventory summary:`);
// console.log(store_inventory);
console.log(report_summary);
