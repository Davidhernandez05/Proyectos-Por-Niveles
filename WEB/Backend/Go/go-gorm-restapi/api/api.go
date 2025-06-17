package api

import (
	"net/http"
	"strconv"

	"github.com/Davidhernandez05/go-gorm-restapi/db"
	"github.com/Davidhernandez05/go-gorm-restapi/models"
	"github.com/Davidhernandez05/go-gorm-restapi/routes"
	"github.com/gin-gonic/gin"
)

var UsuarioCrear []models.Usuario

func ListarUsuarios(r *gin.Engine)  {
	r.GET("/users", func(c *gin.Context) {
		db.DB.Find(&UsuarioCrear) // find funciona para listar los datos de la DB
		c.JSON(http.StatusAccepted, gin.H{"Usuarios": UsuarioCrear})
	})
}

func AgregarUsuario(r *gin.Engine)  {
	r.POST("/user", func(c *gin.Context) {
		var nuevoUsuario models.Usuario
		if err := c.BindJSON(&nuevoUsuario); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Datos en Json no validos."})
			return
		}
		if nuevoUsuario.Nombre == "" || nuevoUsuario.Email == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Datos ingresados no validos."})
			return
		}
		correo := routes.ValidacionCorreo(nuevoUsuario.Email)

		if !correo {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "El correo ingresado no es valido."})
			return
		}
		db.DB.Create(&nuevoUsuario) //creamos el usuario a la DB Tenemos que poner el & para que solamente tome el valor actual y no todos los valores.
		c.JSON(http.StatusOK, gin.H{"Se creo el usuario": nuevoUsuario})	
		
	})
}

func EliminarUsuario(r *gin.Engine)  {
	r.DELETE("/user/:id", func(c *gin.Context) {
		parametro := c.Param("id")
		id, err := strconv.Atoi(parametro)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "El ID ingresado no es valido."})
		}

		db.DB.Delete(&models.Usuario{}, id) // Eliminamos el valor que concuerde con el id ingresado por parametro.
		c.JSON(http.StatusBadRequest, gin.H{"Mensaje": "Se elimino correctamente el ID."})
	})
}