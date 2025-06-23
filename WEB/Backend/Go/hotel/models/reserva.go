package models

import "time"

type Reserva struct {
	ID							uint					`gorm:"primaryKey"`
	HuespedID				uint					`json:"huespedid"`
	HabitacionID		uint					`json:"habitacionid"`
	FechaIngreso		time.Time			`json:"fechaIngreso"`
	FechaSalida			time.Time			`json:"fechaSalida"`
	PrecioTotal			float64
	Disponibilidad	bool					`json:"disponibilidad"`

	// Relaciones: relaciones inversas, así puedes hacer Preload("Huesped").Preload("Habitacion").
	Huesped 				Huesped				`gorm:"foreingKey:HuespedID"`
	Habitacion			Habitacion		`gorm:"foreingKey:HabitacionID"`
}