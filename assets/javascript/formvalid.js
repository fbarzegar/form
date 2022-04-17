FormValidation.formValidation(
    document.getElementById('registrationForm'),
    {
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: 'The username is required',
                    },
                    stringLength: {
                        message: 'The name must be more than 6 characters long',
                        min: 6,                        
                    },
                },
            },
        },
    },
);
