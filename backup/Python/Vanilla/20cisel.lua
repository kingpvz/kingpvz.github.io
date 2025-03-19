a = {}
for i=1, 20, 1 do
    table.insert(a, io.read())
end

c = {}
for i,j in pairs(a) do
    if c[j] then
        c[j] = c[j] + 1
    else
        c[j] = 1
    end
end

for i,j in pairs(c) do
    if c[i] == 1 then
        print(i)
    end
end