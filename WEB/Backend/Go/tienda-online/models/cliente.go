package models

type Cliente struct {
	ID 			uint 			`gorm:"primaryKey"`
	Nombre 	string 		`json:"nombre"`
	Email 	string 		`json:"email"`
	Pedidos []Pedido 	`gorm:"foreignKey:ClienteID;constraint:OnDelete:CASCADE;"`
}