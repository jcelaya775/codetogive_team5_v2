import sys
import json
import scipy  # sample ML library

# read input json obj
obj = json.loads(sys.argv[1])

# make some computations on input (do ML algorithm here)
obj["math"] += 9
obj["name"] = "NoT Alfred"

# output that will be read from node.js
print(str(obj))
