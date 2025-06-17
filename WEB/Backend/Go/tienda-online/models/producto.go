package models

type Producto struct{
	ID 			uint 			`gorm:"primaryKey"`
	Nombre 	string 		`json:"nombre"`
	Precio 	int 			`json:"precio"`
	Pedidos []Pedido	`gorm:"many2many:pedido_productos;constraint:OnDelete:CASCADE;"`
}