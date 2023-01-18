export const errorCheck = (value, type) => {
    switch (type) {
        case "texto":
            if (!/[a-z]/gi.test(value)) {
                return "*Formato no válido, por favor use caracteres";
            } else {
                return "";
            }

        case "telefono":
            if (!/(?=.*?[0-9])/.test(value)) {
                return "Formato incorrecto, solo números";
            } else {
                return "";
            }


        case "documento":
            if (
                !/^[0-9]{8,8}[A-Za-z]$/gi.test(
                    value
                ) /*&& /["!@#$%^&*()+=-\\\';,./{}|\":<>?]/gi.test(value)*/
            ) {
                return "*Por favor, introduzca su número y letra del documento";
            } else {
                return "";
            }

        default:
            console.log("Algunos errores no se han tenido en cuenta");

            break;
    }
};
