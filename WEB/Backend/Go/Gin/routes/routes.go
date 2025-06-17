package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Usuario struct {
	Nombre string `json:"nombre"`
	Email string `json:"email"`
}

var Usuarios []Usuario

func SetupRoutes(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hola mundo, primer routes.")
	})

	r.GET("/saludo/:nombre", func(c *gin.Context) {
		nombre := c.Param("nombre")

		c.String(200, "Hola bienvenido: %s", nombre)
	})

	r.POST("/usuarios", func(c *gin.Context) {
		var nuevoUsuario Usuario

		if err := c.BindJSON(&nuevoUsuario); err != nil {
			c.JSON(http.StatusBadRequest, gin.H {"Error": "Error al decodificar Json."})
			return
		}
		if nuevoUsuario.Nombre == "" || nuevoUsuario.Email == "" {
			c.JSON(http.StatusBadRequest, gin.H {"Error": "Nombre y correo electronico son campos requeridos."})
		}

		Usuarios = append(Usuarios, nuevoUsuario)

		c.JSON(http.StatusOK, gin.H {"Mensaje": "Usuario registrado.", "datos": Usuarios})
	})
}