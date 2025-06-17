package main

import (
	"fmt"
)

func main()  {
	aregarNombre()
}

func aregarNombre() {
	var Nombre string
	var ListaNombres []string

	for true { // Creamos un bucle infinito.
		fmt.Print("Ingresa un nombre (o fin para terminar): ") //Pedimos por terminal que se ingrese un dato
		fmt.Scanln(&Nombre) //Leemos el dato por pantalla y lo guardamos en la varible indicada.

		if Nombre != "fin" {
			ListaNombres = append(ListaNombres, Nombre) // Agregamos los datos en nuestra lista.
		} else {
			break
		}
	}

	leerDatos(ListaNombres)
}

func leerDatos(lista []string) {
	for i := 0; i < len(lista); i++ {
		fmt.Println("Ingresaste el nombre: ", lista[i])
	}
}