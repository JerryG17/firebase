$('#sign-in').click((e) => {
    console.log('click')
    auth.signInWithPopup(provider).then((result) => {
        console.log('Inicio de sesión exitoso');
    }).catch((error) => {
        console.log(error, 'error');
    });
});

/*salir*/
$('#sign-out').click((e) => {
    auth.signOut().then(() => {
        console.log('se cerro la sesión');
    }).catch((error) => {
        console.log(error, 'error');
    });
});

var signedIn = (user) => {
    console.log(user);
    $('#f-nombre').val(user.displayName);
    $('#sign-out, .card-body').show();
    $('#sign-in').hide();
}

var signedOut = () =>{
    $('sign-out, .card').hide();
    $('sign-in').show();
}