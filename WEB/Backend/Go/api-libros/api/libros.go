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

func ListarLibros(r *gin.Engine)  {
	var listaLibros []models.Libro
	r.GET("/libros", func(c *gin.Context) {
		db.DB.Preload("Autor").Find(&listaLibros)
		c.JSON(http.StatusOK, gin.H{"Libros ": listaLibros})
	})
}

func AgregarLibro(r *gin.Engine)  {
	r.POST("/libro", func(c *gin.Context) {

		var nuevoLibro models.Libro

		if err := c.BindJSON(&nuevoLibro); err != nil {
			fmt.Println("Error al hacer BindJSON:", err)
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Json no válido", "Detalles": err.Error()})
			return
		}
		if nuevoLibro.Titulo == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Datos ingresados no validos."})
			return
		}

		db.DB.Preload("Autor").Create(&nuevoLibro)
		c.JSON(http.StatusOK, gin.H{"Se agrego el Libro": nuevoLibro.Titulo})

	})
}

func EliminarLibro(r *gin.Engine) {
	r.DELETE("/libro/:id", func(c *gin.Context) {
		var parametro = c.Param("id")
		id := utils.RetornarID(parametro)


		db.DB.Delete(&models.Libro{}, id)
		var mensajeEliminacion = fmt.Sprintf("Se elimino correctamente el id: %d", id)
		c.JSON(http.StatusOK, gin.H{"correcto": mensajeEliminacion})

	})
}

func ConsultarLibro(r *gin.Engine)  {
	r.GET("/libro/:id", func(c *gin.Context) {
		var libro models.Libro
		id := utils.RetornarID(c.Param("id"))

		if err := db.DB.Preload("Autor").First(&libro, id).Error; err != nil {
			//No se encontro el libro
			if errors.Is(err, gorm.ErrRecordNotFound) { // gorm -> "No se encontró ningún registro que coincida con la consulta".
				c.JSON(http.StatusBadRequest, gin.H{"Error": "Libro no encontrado."})
				return
			}
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Error al buscar el libro."})
			return
		}

		c.JSON(http.StatusOK, libro)

	})
}

func ActualizarLibro(r *gin.Engine)  {
	r.PUT("/libro/:id", func(c *gin.Context) {
		var libros models.Libro
		id := utils.RetornarID(c.Param("id"))

		// Manejo de error si no se encuentra el ID en la BD
		if err := db.DB.First(&libros, id).Error; err != nil{ // First nos permite buscar un valor y dejar en modificacion por asi decirlo.
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Usuario no encontrado."})
			return
		}

		// Datos que se van a actualizar:
		var libroActualizado models.ActualizarLibro

		if err := c.BindJSON(&libroActualizado); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Json no valido"})
			return
		}

		// actualizar campos
		libros.Titulo = libroActualizado.Titulo
		libros.AñoPublicacion = libroActualizado.AñoPublicacion

		// Manejo de error si no se puede actualizar el libro en la BD
		if err := db.DB.Save(&libros).Error; err != nil { //Save Nos permite guardar los cambios que se le hicieron al elemento.
			c.JSON(http.StatusBadRequest, gin.H{"Error": "No se puede actualizar el libro."})
			return
		}

		c.JSON(http.StatusOK, libros)

	})
}