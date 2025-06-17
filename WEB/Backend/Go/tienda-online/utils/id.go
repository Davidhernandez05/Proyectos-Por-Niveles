package utils

import (
	"fmt"
	"strconv"
)

func TransformarId(parametro string) int {
	var id int 
	var err error

	id, err = strconv.Atoi(parametro)

	if err != nil {
		fmt.Print("Error en el ID: No valido.")
	}

	return id
}