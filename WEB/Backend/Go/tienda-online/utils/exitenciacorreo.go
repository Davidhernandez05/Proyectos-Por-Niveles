package utils

import (
	"errors"
	"log"

	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/db"
	"github.com/Davidhernandez05/Proyectos-Por-Niveles/tree/main/WEB/Backend/Go/tienda-online/models"
	"gorm.io/gorm"
)

// Devuelve true si el correo YA existe, false si NO existe
func ExistenciaCorreo(correo string) bool {
	var clientes models.Cliente

	err := db.DB.Where("email = ?", correo).First(&clientes).Error

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// El correo no existe.
			return false
		}

		log.Println("Error al Buscar el Correo: ", err)
		return false
	}

	// Si no hubo error, significa que encontró un cliente con ese correo
	return true
}