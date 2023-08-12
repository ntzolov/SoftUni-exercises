function echoType(parameter) {
    console.log(typeof(parameter));
    if (typeof(parameter) === 'number' || typeof(parameter) === 'string') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType(55)