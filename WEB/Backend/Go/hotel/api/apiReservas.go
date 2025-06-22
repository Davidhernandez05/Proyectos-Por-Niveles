package api

import (
	"log"
	"net/http"

	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/models"
	"github.com/gin-gonic/gin"
)

func ListarTodasLasReservar(r *gin.Engine) {
	r.GET("/reservas", func(c *gin.Context) {
		var reservas []models.Reserva
		result := db.DB.Find(&reservas)

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