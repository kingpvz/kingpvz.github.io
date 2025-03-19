data = ""
lines = []
newdata = "<table border=\"1\">\n"

with open("stranka.html", "r") as f:
    for i in f.readlines():
        data+=i

data = data.replace("<table border=\"1\">", "$$XY:<default>").replace(" ", "</td><td>").replace("$$XY:<default>", "<table border=\"1\">")
for i in data.split():
    if i.startswith("<tr>"):
        lines.append(i.strip("<tr>").strip("</tr>").strip("<td>").strip("</td>").split("</td><td>"))

lines.sort(key=lambda x: x[2])

counter = 0
for i in lines:
    counter+=1
    i.pop(0)
    newdata+=f"<tr><td>{counter}</td><td>"+"</td><td>".join(i)+"</td></tr>"

with open("strankanew.html", "w") as f:
    f.write(newdata)
