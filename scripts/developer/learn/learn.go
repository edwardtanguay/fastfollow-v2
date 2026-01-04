package learn

import (
	"datapod-for-react-go-json/qtools/qdev"
	"datapod-for-react-go-json/developer/patternbuilder"
)

func Ex001() {
	frameworks := map[string]string{
		"svelte":  "Svelte",
		"angular": "Angular",
		"solid":   "SolidJS",
	}
	frameworks["react"] = "React"
	frameworks["nextjs"] = "Next.js"
	frameworks["vue"] = "Vue.js"
	qdev.DisplayStringStringMap(frameworks)
	delete(frameworks, "solid")
	qdev.DisplayStringStringMap(frameworks)
}

func Ex002() {
	patternbuilder.Start()
}
