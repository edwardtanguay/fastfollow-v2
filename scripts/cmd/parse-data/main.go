package main

import (
	"datapod-for-react-go-json/qtools/qcli"
	"datapod-for-react-go-json/qtools/qfil"
	"datapod-for-react-go-json/qtools/qstr"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

type Flashcard struct {
	Suuid    string `json:"suuid"`
	Category string `json:"category"`
	Front    string `json:"front"`
	Back     string `json:"back"`
}

func main() {
	qcli.Message("parsing flashcards.txt into flashcards.json...", "success")
	lines := qfil.GetLinesFromFile("../../../data/flashcards.txt")

	var flashcards []Flashcard
	for i := 0; i < len(lines); i += 4 {
		if i+3 > len(lines) {
			break
		}
		category := strings.TrimSpace(lines[i])
		front := strings.TrimSpace(lines[i+1])
		back := strings.TrimSpace(lines[i+2])

		flashcards = append(flashcards, Flashcard{
			Suuid:    qstr.GenerateShortUUID(),
			Category: category,
			Front:    front,
			Back:     back,
		})
	}

	jsonData, err := json.MarshalIndent(flashcards, "", "\t")
	if err != nil {

		qcli.Message(fmt.Sprintf("Error marshaling JSON: %v\n", err), "error")
		return
	}

	err = os.WriteFile("../../../parseddata/flashcards.json", jsonData, 0644)
	if err != nil {
		qcli.Message(fmt.Sprintf("Error writing JSON file: %v\n", err), "error")
		return
	}

	qcli.Message("successfully updated flashcards.json", "success")
}
