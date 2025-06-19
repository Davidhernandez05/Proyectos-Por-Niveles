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


func ListarHabitaciones(r *gin.Engine)  {
	r.GET("/habitaciones", func(c *gin.Context) {
		var habitaciones []models.Habitacion
		result := db.DB.Preload("Reservas").Find(&habitaciones)

		if result.Error != nil {
			log.Println("No es posible validar las habitaciones error: ", result.Error)
			return
		}
		if result.RowsAffected == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"Alerta": "No hay habitaciones en la Base de Datos."})
			return
		}
		
		c.JSON(http.StatusOK, gin.H{"Correcto": habitaciones})
	})
}

func AgregarHabitacion(r *gin.Engine) {
	r.POST("/habitacion", func(c *gin.Context) {
		var nuevaHabitacion models.Habitacion

		if err := c.BindJSON(&nuevaHabitacion); err != nil {
			log.Print("Error en archivo JSON", err)
			return
		}
		if nuevaHabitacion.Tipo == "" {
			log.Println("Tienes que agregar el tipo de habitación.")
			return
		}

		db.DB.Preload("Reservas").Create(&nuevaHabitacion)
		c.JSON(http.StatusOK, gin.H{"Se agrego la habitación correctamente": nuevaHabitacion})
	})
}

func EliminarHabitaciones(r *gin.Engine)  {
	r.DELETE("/habitacion/:id", func(c *gin.Context) {
		var habitaciones models.Habitacion
		id := utils.TransformarID(c.Param("id"))
		var mensaje string

		result := db.DB.Delete(habitaciones, id)
		if result.Error != nil {
			log.Println("Error al eliminar el id: ", id)
			return
		}
		if result.RowsAffected == 0 {
			mensaje = fmt.Sprintf("No se encontro ninguna habitacion: %d", id)
			c.JSON(http.StatusBadRequest, gin.H{"Error": mensaje})
			return
		}

		mensaje = fmt.Sprintf("Se elimino correctamente la habitacion: %d", id)
		c.JSON(http.StatusOK, gin.H{"Correcto": mensaje})
	})
}