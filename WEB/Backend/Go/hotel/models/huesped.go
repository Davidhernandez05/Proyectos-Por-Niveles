package models

type Huesped struct {
	ID					uint				`gorm:"primaryKey"`
	Nombre			string			`json:"nombre"`
	Email				string			`json:"email" gorm:"unique"`
	Telefono		string			`json:"telefono"`
	Reservas		[]Reserva		`gorm:"foreignKey:HuespedID"`
}