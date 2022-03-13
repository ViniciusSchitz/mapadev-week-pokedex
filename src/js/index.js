/* 
quando clicar no pokemon da listagem temos q esconder o cartão do pokemon correspondente ao que foi selecionado

para isso vamos prcsar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com evento de clique feito pelo usuário na listagem de pokémons

- remover classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
- remover a classe ativa que marca o pokémpon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        //remover classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokémpon selecionado
        const pokemonNaAtivoListagem = document.querySelector('.ativo')
        pokemonNaAtivoListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})