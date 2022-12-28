(function () {
    'use strict'

    bsCustomFileInput.init()

    // Buscar todos os formulários aos quais queremos aplicar estilos personalizados de validação de Bootstrap
    const forms = document.querySelectorAll('.validated-form')

    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

