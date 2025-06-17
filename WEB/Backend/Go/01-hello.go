// GO es un lenguaje de tipado fuerte.
package main

import (
	"container/list"
	"fmt"
	"reflect"
)

// Imprimir por consola un mensaje.
func main() {
	// Hola Mundo:
	fmt.Println("Hola, mundo en GO.")

	// Variables: var

	// Tipo de dato: texto
	var texto string = "Esto es una cadena de texto."
	fmt.Println(texto)

	// Tipo de dato: Entero
	var myint int
	myint = 22
	myint = myint + 2
	fmt.Println(myint)
	fmt.Println(myint - 1)

	fmt.Println(texto, myint)

	fmt.Println(reflect.TypeOf(myint)) //Imprimir el tipo de dato de una variable.

	// Tipo de dato: Decimal
	var myfloat float32 = 3.20
	fmt.Println(myfloat)

	fmt.Println("Resultado en decimal:", float32(myint) + myfloat)
	fmt.Println("Resultado en entero:", myint + int(myfloat))

	// Tipo de dato: Booleano
	var myBool bool
	myBool = true

	fmt.Println(myBool)

	// Varibales asignadas automaticamente: nos permite declarar e inicializar de una forma directa
	myString := "Soy una cadena de texto nueva."
	fmt.Println(myString)

	//Constantes:
	const numeroFijo int = 55
	fmt.Println("Soy una constante:", numeroFijo)

	// control de flujos:
	
	var num1 int = 29
	num2 := 19
	
	if num1 < num2 {
		fmt.Println(num1)
	} else if num1 == num2 {
		fmt.Println("Los numeros son iguales.")
	} else {
		fmt.Println(num2)
	}

	// Array

	var myArray [3]int
	myArray[0] = 10
	myArray[1] = 20
	myArray[2] = 30

	fmt.Println(myArray[1])

	// Map:
	myMap := make(map[string]int)
	myMap["brais"] = 36
	myMap["miguel"] = 38
	myMap["david"] = 26

	fmt.Println(myMap)
	fmt.Println(myMap["brais"])

	// Listas:
	myList := list.New()
	myList.PushBack("David")

	fmt.Println(myList.Back().Value)

	// Bucles:
	for i := 0; i < len(myArray); i++ {
		fmt.Println(myArray[i])
	}

	for key, value := range myMap {
		fmt.Println(key, value)
	}

	fmt.Println(suma(10, 10))

	// Estructuras: Serian como los obj en otros lenguajes.
	type MyStructure struct {
		name string
		age int
	}

	myStructure := MyStructure{"David", 28}
	fmt.Println(myStructure) 
}

// Funciones:

func suma(a int, b int) int {
	resultado := a + b
	return resultado
}
