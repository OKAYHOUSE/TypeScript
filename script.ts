export{}
	interface Mountain {
	    name: string;
	    height: number;
	    
	}
	let mountains: Mountain[] = [
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

	function findNameOfTallestMountain(mountains: Mountain[]): string{
	    let tallestMountain = mountains[0]; 
	
	    mountains.forEach(m => {
	        if (m.height > tallestMountain.height) {
	            tallestMountain = m;
	        }
	    });
	    return tallestMountain.name;
	}
	let tallest:Mountain["name"] = findNameOfTallestMountain(mountains);
	console.log(tallest);
	

	interface Product{
	    name: string
	    price: number
	}
	let products: Product[] = [
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
	

	function calcAverageProductPrice(productArray: Product[]): number {
	    let averagePrice: number = 0;
	    // sums all prices
	    productArray.forEach(product => { 
	        averagePrice += product.price
	    });
	    // divides by the amount of prices to get avg
	    averagePrice = averagePrice / productArray.length; 
	    // round to 2 decimals
	    averagePrice = Math.round(averagePrice * 100) / 100;  
	    return averagePrice;
	}
	
	let average: number = calcAverageProductPrice(products);
	console.log(average);
	

	interface Inventory{
	    product: Product
	    quantity: number
	}
	let inventory: Inventory[] = [
	    {
	        product: {name: "motor", price: 10.00}, 
	        quantity: 10
	    },
	    {
	        product: {name: "sensor", price: 12.50}, 
	        quantity: 4
	    },
	    {
	        product: {name: "LED", price: 1.00}, 
	        quantity: 20
	    }
	];
	

	function calcInventoryValue(inventory: Inventory[]): number{
	    let totalValue: number = 0;
	

	    inventory.forEach(item => {
	        totalValue += item.product.price * item.quantity;
	    });
	

	    return totalValue;
	}
	
	let totalValue: number = calcInventoryValue(inventory);
	console.log(totalValue);