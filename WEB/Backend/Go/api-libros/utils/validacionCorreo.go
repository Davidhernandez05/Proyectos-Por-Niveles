package utils

import "strings"

func ValidarCorreo(correo string) bool {
	var caracter string = "@"

	if strings.Contains(strings.ToLower(correo), caracter) {
		return true
	}else {
		return false
	}
}