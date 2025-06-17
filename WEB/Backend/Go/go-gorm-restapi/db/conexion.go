package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DSN = "host=localhost user=postgres password=David1010 dbname=apigorm port=5432"
var DB *gorm.DB

func DBconexion() {
	var err error
	DB, err = gorm.Open(postgres.Open(DSN), &gorm.Config{})

	if err != nil {
		log.Fatal("Error en la conexión con la Base de Datos.")
	}else {
		log.Println("DB Conectada.")
	}
}