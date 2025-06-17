package models

import "time"

type Pedido struct{
	ID					uint				`gorm:"primaryKey"`
	Fecha				time.Time		`json:"fecha"`
	ClienteID		uint				`json:"clienteid"`
	Cliente			Cliente			`gorm:"foreignKey:ClienteID"`
	Productos		[]Producto	`gorm:"many2many:pedido_productos"`//Crea una nueva tabla union con el nombre: pedido_productos dado que es una relacion de muchos a muchos

}