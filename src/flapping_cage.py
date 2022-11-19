import requests

class FlappingCage:
	def __init__(self) -> None:
		self.api = "http://www.flappingcage.com/FC"
		self.headers = {
			"user-agent": "libcurl-agent/1.0"
		}

	def rank_db(
			self,
			statistics: list,
			values: list) -> str:
		data = dict(zip(statistics, values))
		return requests.post(
			f"{self.api}/rankdb.php",
			data=data,
			headers=self.headers).text

	def insert_score(
			self,
			statistics: list,
			values: list) -> str:
		data = dict(zip(statistics, values))
		return requests.post(
			f"{self.api}/ins_sc.php",
			data=data,
			headers=self.headers).text

	def get_yest_win(self) -> str:
		return requests.get(
			f"{self.api}/yest_win.php",
			headers=self.headers).text
