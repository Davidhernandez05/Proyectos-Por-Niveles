package main

import (
	coleccionlibros "gin/coleccionLibros"
	gestionusuarios "gin/gestionUsuarios"

	"github.com/gin-gonic/gin"
)

func main()  {
	r := gin.Default()

	coleccionlibros.ListarLibros(r)
	coleccionlibros.AgregarLibros(r)
	coleccionlibros.BuscarLibro(r)
	coleccionlibros.ActualizarLibro(r)
	coleccionlibros.EliminarLibro(r)

	gestionusuarios.ListarUsuarios(r)
	gestionusuarios.AgregarUsuario(r)
	gestionusuarios.BuscarUsuario(r)
	gestionusuarios.ActualizarUsuario(r)
	gestionusuarios.EliminarUsuario(r)

	r.Run("localhost:8080")
	
}