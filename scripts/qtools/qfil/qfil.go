package qfil

import (
	"os"
	"strings"
)

/*
Get all lines from a file as a slice of strings

lines := getLinesFromFile("../../notes.txt")

- use relative path
*/
func GetLinesFromFile(fileName string) []string {
	byteContents, err := os.ReadFile(fileName)
	if err != nil {
		panic(err)
	}
	contents := string(byteContents)
	lines := strings.Split(contents, "\n")
	for i, line := range lines {
		lines[i] = strings.TrimSpace(line)
	}
	return lines
}
