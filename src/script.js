let aboutMe = '';

$(document).ready(() => {
    $(document).on('keydown', startCollect);
});


let startCollect = (e) => {
    if (e.key == 'z') {
        console.log('start collect');
        $(document).off('keydown', startCollect);
        $(document).on('keydown', collectSymbol);
    }
}

let collectSymbol = (e) => {
    if (e.key == ' ' || e.key == 'Escape') {
        stopCollect();
    } else {
        aboutMe += e.key;
        console.log(aboutMe);
        if (aboutMe == 'jevo') {
            $('#exampleModal').modal({
                show : true
            });
        }
    }
}

let stopCollect = () => {
    console.log('stop');
    aboutMe = '';
    $(document).off('keydown', collectSymbol);
    $(document).on('keydown', startCollect);
}