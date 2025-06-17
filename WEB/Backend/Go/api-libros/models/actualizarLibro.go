package models

type ActualizarLibro struct {
	Titulo 					string 	`json:"titulo" binding:"required"`
	AñoPublicacion 	int    	`json:"aniopublicacion" binding:"required"`
}