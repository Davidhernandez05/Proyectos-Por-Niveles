package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)



var DNS = "host=localhost user=postgres password=David1010 dbname=hotel port=5432"
var DB *gorm.DB

func Conexion() {
	var err error

	DB, err = gorm.Open(postgres.Open(DNS), &gorm.Config{})

	if err != nil {
		log.Fatal("Error en la conexión a la Base de Datos.", err)
	}else {
		log.Println("Coneción realizada exitosamente.")
	}
}