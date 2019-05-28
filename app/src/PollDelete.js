import { DeleteTrack } from './ManagePlaylist'

const test_playlist ='4FluUrsUEJIjJGHeONQf6u'                                                                                                 
const test_track = '1bnZy1vf6xF725yyLBFAcl'

const VoteToDelete = props => {
//será acrescentado mais um no contador de votos para excluir uma música específica   
//a função fara uma requisição a nossa api para receber os valores de votos para deletar a música e o número total de pessoas na sala
    const voto_delete = 20
    const voto_total = 30
    if ( voto_delete / voto_total >= 0.6) {
        console.log ('deletado')
    }
    else {
        console.log ('nao_deletado')
    }
       
    return null          
}


export { VoteToDelete }