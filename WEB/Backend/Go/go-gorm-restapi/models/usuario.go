package models

type Usuario struct {
	ID uint `gorm:"primaryKey"`
	Nombre string `json:"nombre" binding:"required"`
	Email string `json:"email" binding:"required"`
}