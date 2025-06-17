package gestionusuarios

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

type EstructuraUsuario struct{
	ID int `json:"id"`
	Nombre string `json:"nombre" binding:"required"`
	Email string `json:"email" binding:"required"`
	Edad int `json:"edad"`
	Activo bool `json:"activo"`
}

var Usuario []EstructuraUsuario

var IdAutoIncrement int = 0
var ValidacionCorreo string = "@"

func ListarUsuarios(r *gin.Engine)  {
	r.GET("/users", func(c *gin.Context) {
		if len(Usuario) == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"Alerta: " : "No se encontro ningun usuario creado en el sistema."})
			return
		}
		c.JSON(http.StatusOK, gin.H{"Usuarios existentes en el sistema: " : Usuario})
	})
}

func AgregarUsuario(r *gin.Engine)  {
	r.POST("/user", func(c *gin.Context) {
		var nuevoUsuario EstructuraUsuario

		if err := c.BindJSON(&nuevoUsuario); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error: ": "Error en la estructura JSON."})
			return
		}
		if nuevoUsuario.Email == "" || nuevoUsuario.Nombre == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error:": "Los datos ingresados no estan completos."})
			return
		}
		
		correo := false
		 // Verificamos si el correo tiene @
		if strings.Contains(strings.ToLower(nuevoUsuario.Email), ValidacionCorreo) {
				correo = true
			}
		
		// Validamos la edad del usuario para que sea mayor o igual a 18
		if correo {
			if nuevoUsuario.Edad < 18 {
				c.JSON(http.StatusConflict, gin.H{"Error: ": "El usuario no puede ser menor de edad."})
				return
			}
			IdAutoIncrement++
			nuevoUsuario.ID = IdAutoIncrement
			Usuario = append(Usuario, nuevoUsuario)
			c.JSON(http.StatusCreated, gin.H{"Correcto" : "El usuario se creo exitosamente."})
			 
		}else{
			c.JSON(http.StatusBadRequest, gin.H{"Error: ": "Correo no valido"})
		}

	})
}

func BuscarUsuario(r *gin.Engine) {
	r.GET("/user/:id", func(c *gin.Context) {
		existencia := false
		parametro := c.Param("id") //Recibimos el id mediante un parametro.
		idBuscar, err := strconv.Atoi(parametro) //Se transforma el parametro a numero

		// Verificamos que el id sea valido.
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error:" : "El ID no es valido."})
			return
		}

		// Buscamos el id entre la lista de usuarios.
		for _, user := range Usuario {
			//Validamos que el id concuerde.
			if user.ID == idBuscar {
				c.JSON(http.StatusOK, gin.H{"Se encontro el siguiente usuario: ": user})
				existencia = true
				break
			}
		}
		// Si no se encuentra el id generamos el siguiente error. 
		if !existencia {
			c.JSON(http.StatusBadRequest, gin.H{"Error: ": "No se encontro ningun usuario con ese ID"})
			return
		}
	})
}

func ActualizarUsuario(r *gin.Engine)  {
	r.PUT("/user/:id", func(c *gin.Context) {
		existencia := false
		numero := c.Param("id")
		idBuscar, err := strconv.Atoi(numero)

		var nuevosDatos EstructuraUsuario
		correo := false

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error: ": "El ID no es valido."})
		}

		if er := c.BindJSON(&nuevosDatos); er != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error: ": "Datos no validos."})
			return
		}
		if nuevosDatos.Nombre == "" || nuevosDatos.Email == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error: ": "Datos no validos."})
			return
		}

		// Validamos que el correo cuente con un @
		if strings.Contains(strings.ToLower(nuevosDatos.Email), ValidacionCorreo) {
			correo = true
		}
		
		if !correo {
			c.JSON(http.StatusBadRequest, gin.H{"Error: ": "Correo no valido"})
		}else {
			// Validamos la edad del funcionario.
			if nuevosDatos.Edad < 18 {
				c.JSON(http.StatusConflict, gin.H{"Error: ": "El usuario no puede ser menor de edad."})
				return
			}else {
					for i, user := range Usuario {
					if idBuscar == user.ID {
						existencia = true
						// Modificamos los datos del usuario.
						Usuario[i].Nombre = nuevosDatos.Nombre
						Usuario[i].Edad = nuevosDatos.Edad
						Usuario[i].Activo = nuevosDatos.Activo
						Usuario[i].Email = nuevosDatos.Email
						
						c.JSON(http.StatusOK, gin.H{"Exitoso: ": "Se actualizaron los datos correctamente."})
						break
					}
				}
				if !existencia {
					c.JSON(http.StatusBadRequest, gin.H{"Error: ": "No se encontro ningun usuario con ese ID"})
					return
				}
			}	
		}
	})
}

func EliminarUsuario(r *gin.Engine)  {
	r.DELETE("/user/:id", func(ctx *gin.Context) {
		parametro := ctx.Param("id")
		var nuevaListaUsuarios []EstructuraUsuario
		eliminacion := false

		id, err := strconv.Atoi(parametro)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"Error": "Error en los datos."})
		}
		// Recorremos todos los usuarios.
		for _, user := range Usuario {
			// Validamos que usuario concierda con el id.
			if id == user.ID {
				eliminacion = true
			}else {
				// Agregamos los datos a una nueva lista de usuarios.
				nuevaListaUsuarios = append(nuevaListaUsuarios, user)
			}
		}

		if eliminacion {
			mensaje := fmt.Sprintf("Se elimino correctamente el ID: %v.", id)
			ctx.JSON(http.StatusOK, gin.H{"Correcto: ": mensaje})
		}else {
			mensajeError := fmt.Sprintf("No es posible eliminar el ID: %v debido a que no se encontro.", id)
			ctx.JSON(http.StatusBadRequest, gin.H{"Error: ": mensajeError})
		}

		Usuario = nuevaListaUsuarios
	})
}