package utils

import (
	"fmt"
	"strconv"
)

func RetornarID(param string) int {
	
	var id int
	var err error

	id, err = strconv.Atoi(param)

	if err != nil {
		fmt.Print("Error en el id: no valido")
	}
	return id
}