package main

import (
	"fmt"
)

func main()  {
	solitarUsuario()
}

type datosUsuarios struct {
	id int
	nombre string
	correo string
}

func solitarUsuario() {
	var ID int = 0
	var nombre string
	var correo string
	var ListaUsuarios []datosUsuarios

	for true {
		
		fmt.Print("Ingresa nombre del usuario (o fin para terminar): ")
		fmt.Scan(&nombre)

		if nombre != "fin" {
			ID ++
			fmt.Print("Inresa el correo electronico: ")
			fmt.Scan(&correo)
		
			ListaUsuarios = append(ListaUsuarios, guardarUsuario(ID,nombre, correo))
		}else {
			break
		}
	}
	leerUsuarios(ListaUsuarios)
}

func guardarUsuario(userId int, name string, email string) datosUsuarios {

	return datosUsuarios{id: userId, nombre: name, correo: email}
	
}

func leerUsuarios(listaUsuarios []datosUsuarios)  {
	fmt.Println("Usuarios Registrados: ")
	for _, persona := range listaUsuarios {
		fmt.Println("ID: ", persona.id, "| Nombre: ", persona.nombre, "| Correo Electronico: ", persona.correo)
	}
}