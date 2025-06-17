package models

import "time"

type Reserva struct {
	ID							uint					`gorm:"primaryKey"`
	HuespedID				uint
	HabitacionID		uint
	FechaIngreso		time.Time			`json:"fechaIngreso"`
	FechaSalida			time.Time			`json:"fechaSalida"`
	PrecioTotal			float64
	Disponibilidad	bool					`json:"disponibilidad"`
}