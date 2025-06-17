package api

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/models"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/utils"
	"github.com/gin-gonic/gin"
)

func ListarPedidos(r *gin.Engine)  {
	r.GET("/pedidos", func(c *gin.Context) {
		var pedidos []models.Pedido

		result := db.DB.Preload("Cliente").Preload("Productos").Find(&pedidos)
		if result.Error != nil {
			log.Println("Se genero un error: ", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			c.JSON(http.StatusOK, gin.H{"Alerta": "No se encontro ningun pedido en la Base de Datos."})
			return
		}
		
		c.JSON(http.StatusOK, gin.H{"Pedidos": pedidos})
	})
}

func AgregarPedido(r *gin.Engine) {
	r.POST("/pedido", func(c *gin.Context) {
		var agregarPedido models.Pedido

		if err := c.BindJSON(&agregarPedido); err != nil {
			log.Println("JSON no valido.", err)
			return
		}
		if err := db.DB.Create(&agregarPedido).Error; err != nil {
			log.Println("Error al guardar en la Base de datos.")
			c.JSON(http.StatusInternalServerError, gin.H{"Error": "No se pudo guardar el pedido."})
			return
		}
		
		c.JSON(http.StatusOK, gin.H{"Mensaje": "Se agrego el pedido", "Pedido": agregarPedido})	
	})
}

func BuscarPedido(r *gin.Engine) {
	r.GET("/pedido/:id", func(c *gin.Context) {
		
		var pedidos models.Pedido
		id := utils.TransformarId(c.Param("id"))

		result := db.DB.Preload("Productos").Preload("Cliente").First(&pedidos, id)
		if result.Error != nil {
			log.Println("Se genero el siguiente error: ", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			mensaje := fmt.Sprintf("El id: %d no es valido.", id)
			c.JSON(http.StatusOK, gin.H{"Alerta": mensaje})
			return
		}

		var totalPrecio float64

		for _, producto := range pedidos.Productos {
			totalPrecio += float64(producto.Precio)
		}
		
		c.JSON(http.StatusOK, gin.H{
			"Cliente": pedidos.Cliente.Nombre,
			"Pedido": pedidos.Productos,
			"total_Productos": totalPrecio,
		})

	})
}

func EliminarPedido(r *gin.Engine) {
	r.DELETE("/pedido/:id", func(c *gin.Context) {
		var pedidoEliminar models.Pedido
		id := utils.TransformarId(c.Param("id"))
		result := db.DB.Delete(pedidoEliminar, id)

		if result.Error != nil {
			log.Fatal("Error al eliminar el ID indicado.")
			return
		}
		
		db.DB.Delete(&pedidoEliminar, id)
		mensaje := fmt.Sprintf("Se elimino correctamente el ID: %d", id)
		c.JSON(http.StatusOK, gin.H{"Correcto": mensaje})
	})
}