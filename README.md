# flapping_cage.js
Mobile-API for [Flapping Cage](https://play.google.com/store/apps/details?id=net.havana24.flappingcage) mobile game

## Example
```JavaScript
async function main() {
	const { FlappingCage } = require("./flapping_cage.js")
	const flappingCage = new FlappingCage()
	const yestWin = await flappingCage.getYestWin()
	console.log(yestWin)
}

main()
```
