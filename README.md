# VideoPlayer

This project is still in the early stages of development, and is not yet at a "usable" state.  To see progress in full implementation, please see the "Issues" tab.

A video player capable of combining videos from multiple video streaming services into a single webpage.

Another feature is synchronous playback between multiple clients. 
This allows two people to easily watch a video together, by being in a shared viewing session.

To run the server, the only requirements are python and sqlite3. 
It can be easily started with the command:  
```bash
$ python main.py
```

Then, the webpage is hosted on the port 8080, and can be accessed with the URL http://localhost:8080/. 
With proper firewall and network settings, this can be made accessible from outside the network, on an internet-based URL.
