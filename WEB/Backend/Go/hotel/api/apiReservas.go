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

func ListarTodasLasReservar(r *gin.Engine) {
	r.GET("/reservas", func(c *gin.Context) {
		var reservas []models.Reserva
		result := db.DB.Preload("Huesped").Preload("Habitacion").Find(&reservas)

		if result.Error != nil {
			log.Println("No es posible listar todas las reservas error: ", result.Error)
			return
		}

		if result.RowsAffected == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"Alerta": "No se encontraron reservas en el sistema."})
			return
		}

		c.JSON(http.StatusOK, gin.H{"Reservas": reservas})
	})
}

func AgregarReservaNueva(r *gin.Engine) {
	r.POST("/reserva", func(c *gin.Context) {
		var nuevaReserva models.Reserva

		if err := c.BindJSON(&nuevaReserva); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Error en el archivo JSON"})
			return
		}

		result := db.DB.Create(&nuevaReserva)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "No fue posible crear la reservación."})
			return
		}

		c.JSON(http.StatusOK, gin.H{"Se creo la reservacion exitosamente": nuevaReserva})
	})

}

func EliminarReservacion(r *gin.Engine)  {
	r.DELETE("/reserva/:id", func(c *gin.Context) {
		var reservaciones models.Reserva
		id := utils.TransformarID(c.Param("id"))
		var mensaje string
		result := db.DB.Delete(reservaciones, id)

		if result.Error != nil {
			c.JSON(http.StatusBadRequest, "No es posible eliminar el id.")
			return
		}

		if result.RowsAffected == 0 {
			mensaje = fmt.Sprintf("No se encontro ningun dato con el id: %d.", id)
			c.JSON(http.StatusBadRequest, gin.H{"Error": mensaje})
			return
		}

		mensaje = fmt.Sprintf("Se elimino correctamente el id: %d.", id)
		c.JSON(http.StatusOK, gin.H{"Exitoso": mensaje})
	})
}