#! /usr/bin/env python

from WebHost import WebHost
from VideoInterface import VideoInterface
from VideoStatusDB import VideoStatusDB

def startVideoInterface(port,db_fname):
	host = WebHost(port)
	db = VideoStatusDB(db_fname)
	VideoInterface(host, db)
	try:
		host.start_service()
	except KeyboardInterrupt:
		host.stop_service()

if __name__=="__main__":
	db_fname='test.db'
	startVideoInterface(8080,db_fname)
