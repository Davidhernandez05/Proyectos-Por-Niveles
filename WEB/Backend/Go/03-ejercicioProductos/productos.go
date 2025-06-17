package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type Product struct{
	id	int
	name string
	price float64
	inStock bool
}

var Productos []Product
var currentID int = 0

func main()  {
	
	for true {
		opc := options()

		if opc == 1 {
			addProduct()

		}else if opc == 2 {
			productlist()

		}else if opc == 3 {
			searchProduct()
			
		}	else if opc == 4 {
			updateProduct()

		}else if opc == 5 {
			newList := deleteProduct()
			Productos = newList

		}else if opc == 6{
			fmt.Println("\nFin del programa...")
			break
		}	
	}
}

func options() int {
	fmt.Println("\n--- MENÚ DE OPCIONES: ---")
	fmt.Println("1. Agregar producto")
	fmt.Println("2. Listar productos")
	fmt.Println("3. Buscar producto por ID")
	fmt.Println("4. Actualizar producto")
	fmt.Println("5. Eliminar producto")
	fmt.Println("6. Salir")
		
  reader := bufio.NewReader(os.Stdin)
	fmt.Print("Ingresa una opción: ")
	texto, _ := reader.ReadString('\n')
	texto = strings.TrimSpace(texto)

	numero, err := strconv.Atoi(texto) //Convertirmos el texto a numero y manejamos el posible error.
	if err != nil { // nil es como nulo o error en la conversion.
		fmt.Printf("\n--El valor no es valido.--\n")
		return options()
	}
  return numero
}

func addProduct(){
	var productName string
	var productPrice float64
	var stock bool
	currentID++ //Id unico.

	fmt.Print("\nAgregar Producto.")
	fmt.Print("Ingresa el nombre del producto: ")
	fmt.Scan(&productName)
	fmt.Print("Ingresa el precio del producto: ")
	fmt.Scanln(&productPrice)
	fmt.Print("Tenemos unidades disponibles (true / false): ")
	fmt.Scan(&stock)

	if stock != true {
		stock = false
	}

	Productos = append(Productos, Product{
		id: currentID ,
		name: productName,
		price: productPrice,
		inStock: stock,
	})	
}

func productlist() {
	fmt.Println("\n--- LISTA DE PRODUCTOS: ---")
	if len(Productos) == 0 {
		fmt.Print("No se encontraron productos.\n")
	}
	for _, producto := range Productos {
		fmt.Printf("| ID: %d | Nombre: %s | Precio: %f | En Stock: %t. \n", producto.id, producto.name, producto.price, producto.inStock)
	}
	fmt.Print("--- Fin. ---\n")
}

func idProduct() int {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Ingresa el ID que requieres: ")
	text, _ := reader.ReadString('\n')
	text = strings.TrimSpace(text)

	num, err := strconv.Atoi(text) //Convertirmos el texto a numero y manejamos el posible error.
	if err != nil { // nil es como nulo o error en la conversion.
		fmt.Printf("\n--El valor: %T, no es valido.--\n", err)
		return options()
	}
  return num
}

func searchProduct() {
	fmt.Println("\n-- Buscar Producto por ID --")
	search := idProduct()

	for _, producto := range Productos {
		if search == producto.id {
			fmt.Println("\nSe encontro el Producto: ")
			fmt.Printf("| ID: %d | Nombre: %s | Precio: %f | En Stock: %t. \n", producto.id, producto.name, producto.price, producto.inStock)
		}
	}
}

func deleteProduct() []Product {
	var nuevaLista []Product
	fmt.Println("\n-- Eliminar Producto por ID --")
	search := idProduct()

	for _, prodcuto := range Productos {
		if search != prodcuto.id{
			nuevaLista = append(nuevaLista, prodcuto)
		}
	}
	return nuevaLista
}

func updateProduct() {
	var productName string
	var productPrice float64
	var stock bool
	
	fmt.Println("\n-- Actualizar Producto por ID --")
	search := idProduct()

	for i, producto := range Productos {
		if search == producto.id {
			fmt.Printf("| ID: %d | Nombre: %s | Precio: %f | En Stock: %t. \n", producto.id, producto.name, producto.price, producto.inStock)

			fmt.Print("\nIngresa el nuevo nombre del producto: ")
			fmt.Scan(&productName)
			fmt.Print("Ingresa el nuevo precio del producto: ")
			fmt.Scanln(&productPrice)
			fmt.Print("Tenemos unidades disponibles (true / false): ")
			fmt.Scan(&stock)

			if stock != true {
				stock = false
			}

			Productos[i].name = productName //Cambiamos los valores de la lista en las posiciones indicadas.
			Productos[i].price = productPrice
			Productos[i].inStock = stock
			fmt.Println("Nuevos Datos: Para el producto con ID: ", producto.id)
			fmt.Printf("\n| ID: %d | Nombre: %s | Precio: %f | En Stock: %t. \n", producto.id, producto.name, producto.price, producto.inStock)
		}
	}
}