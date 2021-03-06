const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        id:1,
        description:'Pagar fatura do cartão.',
        done:true
    },
    {
        id:2,
        description:'Reunião com a equipe.',
        done:false
    },
    {
        id:3,
        description:'Consulta médica.',
        done:false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED': 
            return {...state, description: action.payload}
        default:
            return state
    }
}