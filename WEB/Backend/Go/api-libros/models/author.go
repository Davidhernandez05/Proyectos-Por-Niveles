package models

type Autor struct {
	ID 			uint 			`gorm:"primaryKey"`
	Nombre 	string 		`json:"nombre"`
	Email 	string 		`json:"email" gorm:"uniqueIndex"`
	Libros 	[]Libro 	`gorm:"foreignkey:AutorID"`
}