package models

type Libro struct {
	ID             uint   `gorm:"primaryKey"`
	Titulo         string `json:"titulo" binding:"required"`
	AñoPublicacion int    `json:"aniopublicacion" binding:"required"`
	AutorID        uint   `json:"autorid" binding:"required"` // Llave Foreanea
	Autor          Autor  `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
