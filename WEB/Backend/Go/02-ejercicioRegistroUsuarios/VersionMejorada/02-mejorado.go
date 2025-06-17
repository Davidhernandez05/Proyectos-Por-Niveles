package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type datosUsuarios struct {
	id     int
	nombre string
	correo string
}

func main() {
	solicitarUsuarios()
}

func solicitarUsuarios() {
	var ID int = 0
	var ListaUsuarios []datosUsuarios

	for {
		nombre := leerInput("Ingresa el nombre del usuario (o escribe 'fin' para terminar): ")
		if strings.ToLower(nombre) == "fin" {
			break
		}

		correo := leerInput("Ingresa el correo electrónico: ")

		ID++
		ListaUsuarios = append(ListaUsuarios, datosUsuarios{
			id:     ID,
			nombre: nombre,
			correo: correo,
		})
	}

	leerUsuarios(ListaUsuarios)
}

// leerInput solicita al usuario una entrada por teclado y la devuelve como string limpio.
func leerInput(prompt string) string {
	fmt.Print(prompt)
	scanner := bufio.NewScanner(os.Stdin) // Crea un nuevo lector de texto (scanner) que va a leer desde la entrada estándar del sistema (os.Stdin), es decir, desde el teclado.
	scanner.Scan() // Espera a que el usuario escriba algo y presione Enter.
	text := strings.TrimSpace(scanner.Text()) // Guarda lo que el usuario ingreso y elimina los espacios en blanco del comiezo y del final con strings.TrimSpace
	return text
}	

func leerUsuarios(listaUsuarios []datosUsuarios) {
	fmt.Println("\nUsuarios Registrados:")
	if len(listaUsuarios) == 0 {
		fmt.Println("No se registró ningún usuario.")
		return
	}

	for _, persona := range listaUsuarios {
		fmt.Printf("ID: %d | Nombre: %s | Correo: %s\n", persona.id, persona.nombre, persona.correo)
	}
}