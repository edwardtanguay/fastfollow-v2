package qcli

import (
	"fmt"
)

// Message stampa un messaggio CLI con indicatori emoji
//
// Parametri:
//   - line: Il messaggio da visualizzare
//   - kind: Il tipo di messaggio (info, error, success, warning, doing, ball, star)
func Message(line string, kind ...string) {
	actualKind := "info"
	if len(kind) > 0 {
		actualKind = kind[0]
	}

	var prefix string
	switch actualKind {
	case "success":
		prefix = "✅ "
	case "error":
		prefix = "❌ "
	case "warning":
		prefix = "⚠️  "
	case "doing":
		prefix = "⏳ "
	case "ball":
		prefix = "🟠 "
	case "star":
		prefix = "⭐ "
	default:
		prefix = "ℹ️  "
	}

	fmt.Printf("%s%s\n", prefix, line)
}
