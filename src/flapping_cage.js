class FlappingCage {
	constructor() {
		this.api = "http://www.flappingcage.com/FC"
		this.headers = {
			"user-agent": "libcurl-agent/1.0"
		}
	}

	async rankDb(statistics, values) {
		const body = Object.fromEntries(zip(statistics, values))
		const response = await fetch(
			`${this.api}/rankdb.php`, {
				method: "POST",
				body: JSON.stringify(body),
				headers: this.headers
			})
		return response.text()
	}

	async insertScore(statistics, values) {
		const body = Object.fromEntries(zip(statistics, values))
		const response = await fetch(
			`${this.api}/ins_sc.php`, {
				method: "POST",
				body: JSON.stringify(body),
				headers: this.headers
			})
		return response.text()
	}

	async getYestWin() {
		const response = await fetch(
			`${this.api}/yest_win.php`, {
				method: "GET",
				headers: this.headers
			})
		return response.text()
	}
}

module.exports = {FlappingCage}
