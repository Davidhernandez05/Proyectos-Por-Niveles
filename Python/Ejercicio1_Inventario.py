def agregardatos(Nombre, Cantidad, Precio):
    inventario['Nombre del Producto'] = Nombre
    inventario['Cantidad del Producto'] = Cantidad
    inventario['Precio del producto'] = Precio
    print(f"Se agrego el producto {Nombre}, correctamente")

listainventario = []
inventario = {}

ciclo = True


while ciclo == True:
    print("Menu de opciones:")
    print("1. Agregar producto.")
    print("2. Mostrar Inventario.")
    print("3. Buscar Producto.")
    print("4. Eliminar Producto.")
    print("5. Salir.")

    opcion = int(input("Elige una Opción: "))

    if opcion == 1:
        print("Elejiste Agregar un producto al inventario.")
        Nombre1 = input("Ingresa el nombre del producto: ")
        Cantidad1 = int(input("Ingresa la cantidad de este producto: "))
        Precio1 = float(input("Ingresa el precio del producto: "))
        agregardatos(Nombre1, Cantidad1, Precio1)
        print("--"*22)

    elif opcion == 2:
        print(inventario)
        for i in inventario:
            print(i)

    elif opcion == 3:
        print("Elejiste buscar un producto en el inventario.")
        Buscar = input("Ingresa el Producto que quieres buscar en el inventario: ")
        buscar1 = print(Buscar.upper() in inventario)
        if buscar1 == True:            
            buscar1
        else:
            print("El producto no existe en el inventario.")

    elif opcion == 4:
        print("Elejiste eliminar un producto del inventario.")

    elif opcion == 5:
        print("Elejiste salir del app.")
        ciclo = False

    else:
        print("Opción no valida.")
        ciclo = True