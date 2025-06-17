package main

import (
	"github.com/Davidhernandez05/go-gorm-restapi/api"
	"github.com/Davidhernandez05/go-gorm-restapi/db"
	"github.com/Davidhernandez05/go-gorm-restapi/models"
	"github.com/gin-gonic/gin"
)

func main() {
	db.DBconexion() // Inicializa la conexión con la DB
	db.DB.AutoMigrate(&models.Usuario{}) //Funciona para que el Json tome la estructura de datos de postgreSQL

	r := gin.Default()

	api.ListarUsuarios(r)
	api.AgregarUsuario(r)
	api.EliminarUsuario(r)

	r.Run(":8080")
}