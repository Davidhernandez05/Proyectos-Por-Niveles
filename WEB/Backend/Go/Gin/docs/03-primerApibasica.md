```go
package main

import (
	"gin/routes" // <-- Importa un poquete local.

	"github.com/gin-gonic/gin"
)

func main()  {

	//r := gin.New()
	r := gin.Default()

	routes.Hola(r)
	//routes.SetupRoutes(r) // // <-- la función empieza en mayúscula (exportada)
	r.Run("localhost:8080")

}
```
