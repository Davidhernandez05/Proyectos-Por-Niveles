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
	r.GET("/reservaciones", func(c *gin.Context) {
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
	r.POST("/reservacion", func(c *gin.Context) {
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
	r.DELETE("/reservacion/:id", func(c *gin.Context) {
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

func BuscarReservacion(r *gin.Engine)  {
	r.GET("/reservacion/:id", func(c *gin.Context) {
		var reservaciones models.Reserva
		id := utils.TransformarID(c.Param("id"))
		var mensaje string

		result := db.DB.Preload("Huesped").Preload("Habitacion").First(&reservaciones, id)

		if result.RowsAffected == 0 {
			mensaje = fmt.Sprintf("No se encontro ninguna reservacion con el id: %d", id)
			c.JSON(http.StatusBadRequest, mensaje)
			return
		}

		if result.Error != nil {
			mensaje = fmt.Sprint("Se genero un error al buscar la reservacion: ", result.Error)
			c.JSON(http.StatusBadRequest, mensaje)
			return
		}

		mensaje = fmt.Sprintf("Se encontro la siguiente reservacion con el id: %d", id)
		c.JSON(http.StatusOK, gin.H{mensaje : reservaciones})
	})
}

func ModificarReservacion(r *gin.Engine) {
	r.PUT("/reservacion/:id", func(c *gin.Context) {
		var reservaciones models.Reserva
		var reservacionModificada models.Reserva
		var mensaje string
		id := utils.TransformarID(c.Param("id"))

		result := db.DB.Preload("Huesped").Preload("Habitacion").First(&reservaciones, id)

		if result.Error != nil {
			mensaje = fmt.Sprint("Se genero un error al buscar el id indicado: ", result.Error)
			c.JSON(http.StatusBadRequest, mensaje)
			return
		}

		if result.RowsAffected == 0 {
			mensaje = fmt.Sprint("No es encontro ninguna reservacion con el codigo: ", id)
			c.JSON(http.StatusBadRequest, mensaje)
			return
		}

		if err := c.BindJSON(&reservacionModificada); err != nil {
			c.JSON(http.StatusBadRequest, "Error en el archivo JSON.")
		}

		reservaciones.FechaIngreso = reservacionModificada.FechaIngreso
		reservaciones.FechaSalida = reservacionModificada.FechaSalida
		reservaciones.PrecioTotal = reservacionModificada.PrecioTotal
		reservaciones.HabitacionID = reservacionModificada.HabitacionID
		reservaciones.Disponibilidad = reservacionModificada.Disponibilidad

		guardarCambios := db.DB.Save(&reservaciones)

		if guardarCambios.Error != nil {
			mensaje = fmt.Sprint("Se genero un error al guardar los cambios: ", guardarCambios.Error)
			c.JSON(http.StatusBadRequest, mensaje)
			return
		}

		c.JSON(http.StatusOK, reservaciones)
	})
}