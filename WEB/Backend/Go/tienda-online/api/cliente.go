package api

import (
	"log"
	"net/http"

	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/models"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/utils"
	"github.com/gin-gonic/gin"
)

func ListarClientes(r *gin.Engine)  {

	r.GET("/clientes", func(c *gin.Context) {
		var totalClientes []models.Cliente

		result := db.DB.Find(&totalClientes)
		
		if result.Error != nil { // Valida si en la consulta se genero algun error.
			log.Print("Error al consultar la Base de Datos:", result.Error)
			return
		}
		if result.RowsAffected == 0 { // Cienta las filas en la cosulta para saber cuantos datos trajo la consulta.
			c.JSON(http.StatusOK, gin.H{"Alerta": "No se encontraron registros en la BD"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"Clientes": totalClientes})
	})
}

func AgregarCliente(r *gin.Engine) {
	r.POST("/cliente", func(c *gin.Context) {
		var nuevoCliente models.Cliente

		if err := c.BindJSON(&nuevoCliente); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Error en el Json."})
			return
		}
		if nuevoCliente.Nombre == "" || nuevoCliente.Email == "" {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "Datos ingresados no validos."})
			return
		}

		if !utils.ValidacionCorreo(nuevoCliente.Email) {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "El correo ingresado no es valido."})
			return
		}

		if utils.ExistenciaCorreo(nuevoCliente.Email) {
			c.JSON(http.StatusBadRequest, gin.H{"Error": "El correo ingresado ya existe en la BD."})
			return
		}

		db.DB.Create(&nuevoCliente)
		c.JSON(http.StatusOK, gin.H{"Se creo el cliente correctamente": nuevoCliente})
	})
}
