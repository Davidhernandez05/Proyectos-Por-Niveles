package api

import (
	"log"
	"net/http"

	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/models"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/utils"
	"github.com/gin-gonic/gin"
)

func ListarProductos(r *gin.Engine)  {
	r.GET("/productos", func(c *gin.Context) {
		var productos []models.Producto

		result := db.DB.Find(&productos)

		if result.Error != nil {
			log.Print("Se genero un error al validar la Base de Datos: ", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			c.JSON(http.StatusOK, gin.H{"Alerta": "No se encontro ningun producto."})
			return
		}

		c.JSON(http.StatusOK, gin.H{"Lista de Productos": productos})
	})
}

func AgregarProducto(r *gin.Engine)  {
	r.POST("/producto", func(c *gin.Context) {
		var nuevoProducto models.Producto

		if err := c.BindJSON(&nuevoProducto); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Error en el Json."})
			return
		}
		if nuevoProducto.Nombre == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Datos ingresados no validos."})
			return
		}

		db.DB.Create(&nuevoProducto)
		c.JSON(http.StatusOK, gin.H{"Se creo el producto correctamente ": nuevoProducto})
	})
}

func EliminarProducto(r *gin.Engine)  {
	r.DELETE("/producto/:id", func(c *gin.Context) {
		var productos models.Producto
		id := utils.TransformarId(c.Param("id"))
		result := db.DB.Delete(productos, id) // Validamos si existe el ID.

		if result.Error != nil {
			log.Println("No es posible eliminar el elemento", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			c.JSON(http.StatusOK, gin.H{"Alerta": "No se encontro ningun elemento con ese ID"})
			return
		}

		db.DB.Delete(&productos, id) // Eliminar el ID.
		c.JSON(http.StatusOK, gin.H{"Se elimino correctamente el ID": id})
	})
}