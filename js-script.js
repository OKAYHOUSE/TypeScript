"use strict";
	exports.__esModule = true;
	//array

    //1. TALLEST MOUNTAIN
	var mountains = [
	    {
	        name: "Kilimanjaro",
	        height: 19341
	    },
	    {
	        name: "Everest",
	        height: 29029
	    },
	    {
	        name: "Denali",
	        height: 20310
	    }
	];
	//functions
	//function functionName(parameters):returnType{ }
	function findNameOfTallestMountain(mountains) {
	    var tallestMountain = mountains[0];
	    mountains.forEach(function (m) {
	        if (m.height > tallestMountain.height) {
	            tallestMountain = m;
	        }
	    });
	    return tallestMountain.name;
	}
	var tallest = findNameOfTallestMountain(mountains);
	console.log(tallest);

    //2. PRODUCTS
	var products = [
	    {
	        name: "Cufflinks",
	        price: 15.99
	    },
	    {
	        name: "Bowtie",
	        price: 29.99
	    },
	    {
	        name: "Cravat",
	        price: 100.99
	    },
	    {
	        name: "Skinny Tie",
	        price: 35.99
	    },
	    {
	        name: "Dress Shirt",
	        price: 5000
	    },
	];
	function calcAverageProductPrice(productArray) {
	    var averagePrice = 0;
	    // sums all prices
	    productArray.forEach(function (product) {
	        averagePrice += product.price;
	    });
	    // divides by the amount of prices to get avg
	    averagePrice = averagePrice / productArray.length;
	    // round to 2 decimals
	    averagePrice = Math.round(averagePrice * 100) / 100;
	    return averagePrice;
	}
	var average = calcAverageProductPrice(products);
	console.log(average);

    //3. INVENTORY
	var inventory = [
	    {
	        product: { name: "motor", price: 10.00 },
	        quantity: 10
	    },
	    {
	        product: { name: "sensor", price: 12.50 },
	        quantity: 4
	    },
	    {
	        product: { name: "LED", price: 1.00 },
	        quantity: 20
	    }
	];
	function calcInventoryValue(inventory) {
	    var totalValue = 0;
	    inventory.forEach(function (item) {
	        totalValue += item.product.price * item.quantity;
	    });
	    return totalValue;
	}
	var totalValue = calcInventoryValue(inventory);
	console.log(totalValue);
