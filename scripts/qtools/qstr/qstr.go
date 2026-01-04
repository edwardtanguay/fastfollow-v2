package qstr

import (
	"crypto/rand"
	"math/big"
)

/*
Return a random suuid (short uuid = 6 characters)

suuid := GenerateShortUUID()

returns e.g. "q35HZa"
*/
func GenerateShortUUID() string {
	const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	const length = 6
	bytes := make([]byte, length)
	for i := 0; i < length; i++ {
		randomByte, err := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		if err != nil {
			panic(err)
		}
		bytes[i] = charset[randomByte.Int64()]
	}
	return string(bytes)
}
