package main

import (
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/api"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/models"
	"github.com/gin-gonic/gin"
)

func main() {
	db.Conexion()
	db.DB.AutoMigrate(&models.Cliente{}, &models.Pedido{}, &models.Producto{})

	r := gin.Default()

	//Cliente:
	api.ListarClientes(r)
	api.AgregarCliente(r)

	//Producto:
	api.AgregarProducto(r)
	api.ListarProductos(r)
	api.EliminarProducto(r)

	//pedidos
	api.ListarPedidos(r)
	api.AgregarPedido(r)
	api.BuscarPedido(r)
	api.EliminarPedido(r)

	r.Run(":8080")
}