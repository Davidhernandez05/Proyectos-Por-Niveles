package coleccionlibros

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type ColeccionLibros struct {
	ID int `json:"id"`
	Tittle string `json:"tittle"`
	Author string `json:"author"`
	Pages int `json:"pages"`
}

var Idautoincrement = 0

var Libros = []ColeccionLibros{
	{ID: 1, Tittle: "Mr Mercedes", Author: "Stephen King", Pages: 420},
	{ID: 2, Tittle: "Misery", Author: "Stephen King", Pages: 420},
	{ID: 3, Tittle: "IT", Author: "Stephen King", Pages: 420},
}

//Listas todos los libros que se encuentran en nuestra lista:
func ListarLibros(r *gin.Engine) {
	r.GET("/libros", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"Libros Registrado en el sistema: ": Libros})
	})
}

// Agregar un libro mediante JSON.
func AgregarLibros(r *gin.Engine)  {
	r.POST("/libro", func(c *gin.Context) {
		var libroNuevo ColeccionLibros

		if err := c.BindJSON(&libroNuevo); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Error al decodificar el Json."})
			return
		}
		if libroNuevo.Tittle == "" || libroNuevo.Author == ""{
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Error al ingresar los datos en JSON."})
			return
		}
		
		Idautoincrement++
		libroNuevo.ID = Idautoincrement

		Libros = append(Libros, libroNuevo)
		c.JSON(http.StatusOK, gin.H{"Libro agregado exitosamente: ": libroNuevo})

	})
}

// Buscar un libro por el ID.
func BuscarLibro(r *gin.Engine)  {
	r.GET("/libro/:id", func(c *gin.Context) {
		num := c.Param("id")
		numero, err := strconv.Atoi(num) // conveierte un string a int

		if err != nil {
			c.JSON(http.StatusBadRequest, "Error en el ID.")
			return
		}else {
			for _, libro := range Libros {
			if numero == libro.ID {
				c.JSON(http.StatusOK, gin.H{"Libro:" : libro})
			}
		}
		}
	})
}

// Modificar un libro por el ID.
func ActualizarLibro(r *gin.Engine)  {
	r.PUT("/libro/:id", func(c *gin.Context) {
		num := c.Param("id")
		numero, err := strconv.Atoi(num)
		

		if err != nil {
			c.JSON(http.StatusBadGateway, gin.H{"Error": "Id no valido."})
			return
		}else {
			var datosActualizados ColeccionLibros

			if err := c.BindJSON(&datosActualizados); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"Error": "Error en el JSON."})
				return
			}
			if datosActualizados.Tittle == "" || datosActualizados.Author == "" {
				c.JSON(http.StatusBadRequest, gin.H{"Error": "Los datos ingresados no son validos."})
				return
			}
			for i, libro := range Libros {
				if numero == libro.ID {
					Libros[i].Tittle = datosActualizados.Tittle
					Libros[i].Author = datosActualizados.Author
					Libros[i].Pages = datosActualizados.Pages
					
					
					c.JSON(http.StatusOK, gin.H{"Datos actualizados correctamente: ": libro})
				}
			}
		}
		
	})
}

// Eliminar un libro segun el ID.
func EliminarLibro(r *gin.Engine) {
	r.DELETE("/libro/:id", func(c *gin.Context) {
		num := c.Param("id")
		numero, err := strconv.Atoi(num)
		var nuevaListaLibros []ColeccionLibros
		
		
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Error en el ID."})
			return
		}

		for _, libro := range Libros {
			if numero != libro.ID {
				
				nuevaListaLibros = append(nuevaListaLibros, libro)
			}else {
				c.JSON(http.StatusOK, gin.H{"Se elimino correctamente el libro con el id: ": libro.ID})
			}
		}
		Libros = nuevaListaLibros	
	})
}