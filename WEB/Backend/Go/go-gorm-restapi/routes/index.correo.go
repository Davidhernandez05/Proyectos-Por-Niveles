package routes

import (
	"strings"
)

func ValidacionCorreo(correo string) bool {
	validacionCorreo := false
	var valor string = "@"

	if strings.Contains(strings.ToLower(correo), valor) {
		validacionCorreo = true
	}else {
		validacionCorreo = false
	}

	return validacionCorreo
}