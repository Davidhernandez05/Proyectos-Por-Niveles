package utils

import "strings"

func ValidacionCorreo(correo string) bool {
	var caracter string = "@"

	if strings.Contains(strings.ToLower(correo), caracter) {
		// Si tiene @
		return true
	}else {
		// No tiene @
		return false
	}
}