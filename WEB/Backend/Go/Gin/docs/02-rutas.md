```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main()  {

	//r := gin.New()
	r:= gin.Default()

	// Ruta Basica.
	r.GET("/", func(c *gin.Context) { // "/" -> Ruta.

		c.String(http.StatusOK, "Hola mundo")
	})

	// Ruta mas compleja:
	r.GET("/saludo/:nombre", func (c *gin.Context)  {

		nombre := c.Param("nombre") //Captura un parametro.
		c.String(http.StatusOK, "Hola, %s!", nombre)
	})

	r.Run("localhost:8080")
```
