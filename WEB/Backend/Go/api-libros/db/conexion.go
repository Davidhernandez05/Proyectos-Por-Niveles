package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)


var DNS = "host=localhost user=postgres password=David1010 dbname=apigorm port=5432"
var DB *gorm.DB

func Conexion() {
	var err error

	DB, err = gorm.Open(postgres.Open(DNS), &gorm.Config{})
	if err != nil {
		log.Fatal("Error en la conexión con la Base de Datos.")
	}else {
		log.Println("Conexión realizada exitosamente.")
	}

}