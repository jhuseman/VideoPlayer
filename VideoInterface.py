#! /usr/bin/env python

from WebHost import WebInterface
from datetime import datetime
import json

class VideoInterface(WebInterface):
	def __init__(self,host,vidstat_db):
		self.host = host
		self.vidstat_db = vidstat_db
		self.connect('/server_time/','GET_SERVER_TIME','GET')
		self.connect('/test/:par','GET_TEST','GET')
		self.connect('/test/','POST_TEST','POST')
	
	def GET_SERVER_TIME(self):
		"""
		return time on the server
		javascript date parsing: JSON.stringify(new Date(document.body.innerHTML))
		example result: "2018-06-15T07:06:07.570Z"
		"""
		return datetime.utcnow().isoformat()+'Z'

	def GET_TEST(self, par):
		"""return test query"""
		return json.dumps(self.vidstat_db.test_method(par), indent=4)

	def POST_TEST(self):
		"""return test query"""
		return json.dumps(self.vidstat_db.test_method("BUY"), indent=4)