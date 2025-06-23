package models


type Habitacion struct {
	ID						uint			`gorm:"primaryKey"`
	Numero				int64			`json:"numero" gorm:"unique"`
	Tipo					string		`json:"tipo"`
	PrecioNoche		float64		`json:"precio"`
	Reservas			[]Reserva	`gorm:"foreignKey:HabitacionID"`
}