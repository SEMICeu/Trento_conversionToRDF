from rdflib.graph import Graph
from urllib.request import urlopen
import glob
import simplejson as json
listfiles = (glob.glob("./downloads/*.rdf"))
print(listfiles)
g = Graph()
for filename in listfiles:
	g.parse(file=open(filename, "r", encoding='utf-8'), format="application/rdf+xml", publicID="http://www.provincia.tn.it/", encoding='utf-8')
	print(len(g))

context_jsonld =  "https://raw.githubusercontent.com/catalogue-of-services-isa/CPSV-AP/master/releases/2.2.1/CPSV-AP_v2.2.1.jsonld"
jsonldfile = 'output.jsonld'
g.serialize(destination=jsonldfile, format='json-ld', context=context_jsonld, indent=4, auto_compact=True,encoding='utf-8')
