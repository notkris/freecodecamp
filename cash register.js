/*

change is the cash given subtracted by price
cashTotal is the amount of cash in drawer multiplied by its value as cents

if change is greater than cash in drawer value, return insufficient funds and empty array
if change is strictly equal to cash in drawer value, return closed and array of cash in drawer denominations
in all other cases return the outstanding amount of change to be given in their respective denominations

in the case where there is insufficient funds still, return insufficient funds and empty array
otherwise decrement as needed to return open status and denominations of change needed to be given to the customer

*/

function checkCashRegister(price, cash, cid) {
	let change = cash * 100 - price * 100;
	let cashTotal = 0;

	for (let element of cid) {
		cashTotal += element[1] * 100;
	}

	if (change > cashTotal) {
		return {status: "INSUFFICIENT_FUNDS", change: []};
	} else if (change === cashTotal) {
		return {status: "CLOSED", change: cid};
	}	else {
		let openChange = [];
		cid = cid.reverse();	
		let cashConv = {"ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1};

		for (let element of cid) {
			let holder = [element[0], 0];
			element[1] = element[1] * 100;
			while (change >= cashConv[element[0]] && element[1] > 0) {
				change -= cashConv[element[0]];
				element[1] -= cashConv[element[0]];
				holder[1] += cashConv[element[0]] / 100;
			}
			if (holder[1] > 0) {
				openChange.push(holder);
			}
		}
		if (change > 0) {
			return {status: "INSUFFICIENT_FUNDS", change: []};
		}
		return {status: "OPEN", change: openChange};
	}
};
