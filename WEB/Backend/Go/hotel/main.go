package main

import (
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/api"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/hotel/models"
	"github.com/gin-gonic/gin"
)

func main()  {

	db.Conexion()
	db.DB.AutoMigrate(&models.Habitacion{}, &models.Huesped{}, &models.Reserva{})

	r := gin.Default()

	// Huespedes:
	api.ListarTodosLosHuespedes(r)
	api.AgregarHusped(r)
	api.BuscarHuespedID(r)
	api.EliminarHuesped(r)
	api.ActualizarHusped(r)

	// Habitaciones:
	api.ListarHabitaciones(r)

	r.Run(":8080")
}