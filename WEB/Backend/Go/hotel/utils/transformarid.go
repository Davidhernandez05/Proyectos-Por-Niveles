package utils

import (
	"log"
	"strconv"
)

func TransformarID(parametro string) int {
	
	var id int
	var err error
	
	id, err = strconv.Atoi(parametro)

	if err != nil {
		log.Println("El id Ingresado no es valido.")
	}
	return id
}