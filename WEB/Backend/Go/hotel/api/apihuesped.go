package api

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/models"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/utils"
	"github.com/gin-gonic/gin"
)

func ListarTodosLosHuespedes(r *gin.Engine) {
	r.GET("/huespedes", func(c *gin.Context) {
		var huespedes []models.Huesped

		result := db.DB.Preload("Reservas").Find(&huespedes)

		if result.Error != nil {
			log.Println("Error", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"Alerta": "No se encontraron huespedes en la Base de Datos."})
			return
		}
		c.JSON(http.StatusOK, gin.H{"Clientes": huespedes})
	})
}

func AgregarHusped(r *gin.Engine)  {
	r.POST("/huesped", func(c *gin.Context) {
		var nuevoHusped models.Huesped

		if err := c.BindJSON(&nuevoHusped); err != nil {
			log.Println("Error en el Json", err)
			return
		}
		if nuevoHusped.Nombre == "" || nuevoHusped.Email == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Datos ingresados no validos."})
			return
		}

		db.DB.Create(&nuevoHusped)
		c.JSON(http.StatusOK, gin.H{"Se creo el Husped exitosamente": nuevoHusped})
	})
}

func BuscarHuespedID(r *gin.Engine)  {
	r.GET("/huesped/:id", func(c *gin.Context) {
		var huspedes models.Huesped
		id := utils.TransformarID(c.Param("id"))

		resutl := db.DB.Preload("Reservas").First(&huspedes, id)
		if resutl.Error != nil {
			log.Println("Error al buscar al huesped.", resutl.Error)
			return
		}
		if resutl.RowsAffected == 0 {
			mensaje := fmt.Sprintf("No se encontro ningun husped con el ID: %d", id)
			c.JSON(http.StatusBadRequest, gin.H{"Alerta": mensaje})
			return
		}

		c.JSON(http.StatusOK, gin.H{"Huesped": huspedes})

	})
}

func EliminarHuesped(r *gin.Engine)  {
	r.DELETE("/huesped/:id", func(c *gin.Context) {
		var huespedes models.Huesped
		id := utils.TransformarID(c.Param("id"))
		var mensaje string

		result := db.DB.Delete(&huespedes, id)

		if result.Error != nil {
			log.Println("Error al eliminar el huesped", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			mensaje = fmt.Sprintf("No se encontro ningun huesped con el id: %d", id)
			c.JSON(http.StatusBadRequest, gin.H{"Alerta": mensaje})
			return
		}
		mensaje = fmt.Sprintf("Se elimino el huesped con el id: %d.", id)
		c.JSON(http.StatusOK, gin.H{"Exitoso": mensaje})
	})
}

func ActualizarHusped(r *gin.Engine)  {
	r.PUT("/huesped/:id", func(c *gin.Context) {
		
		var huespedes models.Huesped
		var actualizarHuesped models.Huesped
		
		id := utils.TransformarID(c.Param("id"))
		var mensaje string

		result := db.DB.Preload("Reservas").First(&huespedes, id)
		
		if result.Error != nil {
			log.Println("Error al eliminar el huesped", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			mensaje = fmt.Sprintf("No se encontro ningun huesped con el id: %d", id)
			c.JSON(http.StatusBadRequest, gin.H{"Alerta": mensaje})
			return
		}

		if err := c.BindJSON(&actualizarHuesped); err != nil {
			log.Println("Json no valido: ", err)
			return
		}

		huespedes.Nombre = actualizarHuesped.Nombre
		huespedes.Email = actualizarHuesped.Email
		huespedes.Telefono = actualizarHuesped.Telefono

		save := db.DB.Preload("Reservas").Save(&huespedes)

		if save.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "No se puede actualizar el libro."})
			return
		}

		c.JSON(http.StatusOK, huespedes)
	})
}