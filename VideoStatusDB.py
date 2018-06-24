#! /usr/bin/env python

import sqlite3

class VideoStatusDB(object):
	def __init__(self,filename):
		self.filename = filename
	
	def get_db_conn(self):
		"""return a new connection to the database"""
		return sqlite3.connect(self.filename)
	
	def run_query_fetchall(self, query, fields=[]):
		"""runs a query and returns the result of fetchall()"""
		with self.get_db_conn() as conn:
			cur = conn.cursor()
			cur.execute(query, fields)
			data = cur.fetchall()
		return data
	
	def test_method(self,par):
		"""return test data"""
		return self.run_query_fetchall("select * from stocks where trans=?;",[par])
