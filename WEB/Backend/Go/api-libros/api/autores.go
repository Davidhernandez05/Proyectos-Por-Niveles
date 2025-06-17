package api

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/Davidhernandez05/api-libros/db"
	"github.com/Davidhernandez05/api-libros/models"
	"github.com/Davidhernandez05/api-libros/utils"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)



func ListarAutores(r *gin.Engine)  {
	var autores []models.Autor
	r.GET("/autores", func(c *gin.Context) {
		db.DB.Preload("Libros").Find(&autores)
		c.JSON(http.StatusOK, gin.H{"Lista de Autores": autores})
	})
}

func AgregarAutor(r *gin.Engine)  {
	r.POST("/autor", func(c *gin.Context) {
		
		var nuevoautor models.Autor
		if err := c.BindJSON(&nuevoautor); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Json no valido"})
			return
		}
		if nuevoautor.Nombre == "" || nuevoautor.Email == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Datos ingresados no validos"})
			return
		}

		correo := utils.ValidarCorreo(nuevoautor.Email)

		if correo {
			db.DB.Create(&nuevoautor)
			c.JSON(http.StatusOK, gin.H{"Se agrego el usuario": nuevoautor})
			
		}else {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "El correo ingresado no es valido."})
		}
	})
}

func EliminarAutor(r *gin.Engine)  {
	r.DELETE("/autor/:id", func(c *gin.Context) {
		var parametro = c.Param("id")
		id := utils.RetornarID(parametro)

		db.DB.Delete(&models.Autor{}, id)
		var mensaje string = fmt.Sprintf("Se eimino correctamente el ID: %d", id)
		c.JSON(http.StatusOK, gin.H{"Correcto": mensaje})
	})
}

func ConsultarAutor(r *gin.Engine)  {
	r.GET("/autor/:id", func(c *gin.Context) {
		var autor models.Autor
		id := utils.RetornarID(c.Param("id"))

		if err := db.DB.First(&autor, id).Error; err != nil {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				c.JSON(http.StatusBadRequest, gin.H{"Error": "No se encontro ningun autor con ese ID."})
				return
			}
		}
		c.JSON(http.StatusOK, &autor)
	})
}