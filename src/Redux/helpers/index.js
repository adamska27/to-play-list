import swal from 'sweetalert'

export const alertAddGame = (game, gameAlreadyAdded, status) => {
    if (status === 'success') {
        swal({
        title: "Bien joué",
        text: `${game.name} a bien été ajouté`,
        icon: "success"
        })
    } 
    else if (status === 'error') {
        swal({
            title: "Oups !",
            text: `${gameAlreadyAdded.name} fait déjà parti de votre to play list`,
            icon: "error"
        })

    }
}