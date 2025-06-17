# Servidor Basico en GO.

```go
package main

import (
	"github.com/gin-gonic/gin"
)

func main()  {

	//r := gin.New()
	r:= gin.Default()

	r.GET("/", func(c *gin.Context) { // "/" -> Ruta.
		//c.String(200, "Hello word!.") //200 -> Codigo de estado / "" -> mensaje que encuentra en la raiz.

		// Esto nos retorna un JSON: nos sirve mucho para las APIs.
		c.JSON(200, gin.H{
			"message": "Hola mundo!",
		})

	})

	r.Run(":8080")
}

```
