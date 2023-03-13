<h1 style="text-align: center;">Function Declaration💻🖥️</h1>

# Introduction

<p> Hello students 👋 In this repository we will check if your assignment passed the requirement. </p>

## Requirements:

1. You need to pass first the HA2 and HA3 of Lesson 5.
2. You will redeclare all of the existing functions in the script using a function expression and arrow functions.

## Steps:

### 1. First we need to open the previous assignment which is the HA3 <i>"Point-of-Sale System: String Methods"</i> file named "point_of_sale_system".

### 2. Comment all the `console.log()` commands that you currently have in your script. Keep the rest of the script uncommented.

### 3. Go to the line where the function named "processDeliveries" is located on your script. We will convert this into a function expression.

<p>To do that, we will create a constant variable and name it "processDeliveries" and set the function expression to this variable.</p>

```javascript
...
const processDeliveries = function(items_obj) {
  store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
  store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
};
...
```

### 4. We will check this one first, let's uncomment some `console.log()` functions listed below:

```javascript
console.log("Delivered items have been added to the inventory.");
console.log("New inventory summary:");
console.log(store_inventory);
```

### 5. When we run this code, the result should be like this:

```txt
Delivered items have been added to the inventory.
New inventory summary:
[
  { item: 'Shampoo', quantity: 6, 'price_$': 4 },
  { item: 'Soap', quantity: 10, 'price_$': 2 },
  { item: 'Toothpaste', quantity: 12, 'price_$': 3 }
]
```

### 6. Now then when everything is running perfectly, let's continue on the next function. Let's comment all of the `console.log()` functions again first.

### 7. Find where the "productSummary" function on your script is located and we will convert this into an arrow function.

<p>To do that, we will create a constant variable and name it "productSummary" and set the arrow expression to this variable.</p>

```javascript
...
const productSummary = (items_obj) => {
  const item_id = items_obj.item.slice(0, 3).toLowerCase();
  var remarks = "Good";
  if (items_obj.quantity < 10) {
    remarks = "Item stock is low";
  }
  var message = `itemID: ${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks: `;
  return message.concat(remarks);
};
...
```

### 8. We will check the previosly updated function, let's uncomment a `console.log()` function below:

```javascript
console.log(report_summary);
```

### 9. When we run this code, the result should be like this:

```txt
[
  'itemID: sha | Shampoo | stocks left: 6 | Remarks: Item stock is low',
  'itemID: soa | Soap | stocks left: 10 | Remarks: Good',
  'itemID: too | Toothpaste | stocks left: 12 | Remarks: Good'
]
```

---

# The End

<p> Don't worry if some of your approach is not the same on this repository, it doesn't mean that it is wrong. This is just a guide for you on how to make it. </p>
Happy Coding! 🧑‍💻👩‍💻
