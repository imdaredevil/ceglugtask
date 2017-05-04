#file reading and writing

file1 = open('test.txt')
for line in file1:
    print line    
file2 = open('test2.txt','w')
line2 = "sampleXDXDXDXDXDDXDXXDXDXDXD\n"
file2.write(line2)

