package main

import (
	"github.com/Davidhernandez05/api-libros/api"
	"github.com/Davidhernandez05/api-libros/db"
	"github.com/Davidhernandez05/api-libros/models"
	"github.com/gin-gonic/gin"
)

func main() {
	db.Conexion() //Generamos la conexión con la Base de Datos.
	db.DB.AutoMigrate(&models.Autor{}, &models.Libro{})	
	
	r := gin.Default()
	
	//Autores:
	api.ListarAutores(r)
	api.AgregarAutor(r)
	api.EliminarAutor(r)
	api.ConsultarAutor(r)

	//Libros:
	api.ListarLibros(r)
	api.AgregarLibro(r)
	api.EliminarLibro(r)
	api.ConsultarLibro(r)
	api.ActualizarLibro(r)

	r.Run(":8080")
}