package parsers

import (
	"datapod-for-react-go-json/qtools/qcli"
	"datapod-for-react-go-json/qtools/qfil"
	"datapod-for-react-go-json/qtools/qstr"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

type Topic struct {
	Suuid     string  `json:"suuid"`
	Title     string  `json:"title"`
	Url       string  `json:"url"`
	Rating    float64 `json:"rating"`
	Timestamp string  `json:"timestamp"`
}

func ParseTopics() {
	qcli.Message("parsing topics.txt into topics.json...", "success")
	lines := qfil.GetLinesFromFile("../../../data/topics.txt")

	var topics []Topic
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}
		parts := strings.Split(line, ";")
		if len(parts) < 3 {
			continue
		}
		title := strings.TrimSpace(parts[0])
		url := strings.TrimSpace(parts[1])
		ratingStr := strings.TrimSpace(parts[2])
		timestamp := ""
		if len(parts) >= 4 {
			timestamp = strings.TrimSpace(parts[3])
		}

		var rating float64
		fmt.Sscanf(ratingStr, "%f", &rating)

		topics = append(topics, Topic{
			Suuid:     qstr.GenerateShortUUID(),
			Title:     title,
			Url:       url,
			Rating:    rating,
			Timestamp: timestamp,
		})
	}

	jsonData, err := json.MarshalIndent(topics, "", "\t")
	if err != nil {
		qcli.Message(fmt.Sprintf("Error marshaling JSON: %v\n", err), "error")
		return
	}

	err = os.WriteFile("../../../parseddata/topics.json", jsonData, 0644)
	if err != nil {
		qcli.Message(fmt.Sprintf("Error writing JSON file: %v\n", err), "error")
		return
	}

	qcli.Message("successfully updated topics.json", "success")
}
