package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Album struct {
	ID     int    `json:"id"`
	Title  string `json:"title"`
	Artist string `json:"artist"`
	Year   int    `json:"year"`
}

var albums = []Album{
	{ID: 1, Title: "Familia", Artist: "Camila Cabello", Year: 2022},
	{ID: 2, Title: "21", Artist: "Adele", Year: 2011},
	{ID: 3, Title: "The Eminem Show", Artist: "Eminem", Year: 2022},
}

func Hola(router *gin.Engine) {
	router.GET("/albums", getAlbums)
}

func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}
