const mock = [
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png',
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png',
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png',
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png',
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png',
    name: 'metapod',
    url: 'https://pokeapi.co/api/v2/pokemon/11/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png',
    name: 'butterfree',
    url: 'https://pokeapi.co/api/v2/pokemon/12/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png',
    name: 'weedle',
    url: 'https://pokeapi.co/api/v2/pokemon/13/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png',
    name: 'kakuna',
    url: 'https://pokeapi.co/api/v2/pokemon/14/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png',
    name: 'beedrill',
    url: 'https://pokeapi.co/api/v2/pokemon/15/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png',
    name: 'pidgey',
    url: 'https://pokeapi.co/api/v2/pokemon/16/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png',
    name: 'pidgeotto',
    url: 'https://pokeapi.co/api/v2/pokemon/17/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png',
    name: 'pidgeot',
    url: 'https://pokeapi.co/api/v2/pokemon/18/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png',
    name: 'rattata',
    url: 'https://pokeapi.co/api/v2/pokemon/19/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png',
    name: 'raticate',
    url: 'https://pokeapi.co/api/v2/pokemon/20/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png',
    name: 'spearow',
    url: 'https://pokeapi.co/api/v2/pokemon/21/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png',
    name: 'fearow',
    url: 'https://pokeapi.co/api/v2/pokemon/22/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png',
    name: 'ekans',
    url: 'https://pokeapi.co/api/v2/pokemon/23/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png',
    name: 'arbok',
    url: 'https://pokeapi.co/api/v2/pokemon/24/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png',
    name: 'raichu',
    url: 'https://pokeapi.co/api/v2/pokemon/26/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png',
    name: 'sandshrew',
    url: 'https://pokeapi.co/api/v2/pokemon/27/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png',
    name: 'sandslash',
    url: 'https://pokeapi.co/api/v2/pokemon/28/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png',
    name: 'nidoran-f',
    url: 'https://pokeapi.co/api/v2/pokemon/29/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
    name: 'nidorina',
    url: 'https://pokeapi.co/api/v2/pokemon/30/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png',
    name: 'nidoqueen',
    url: 'https://pokeapi.co/api/v2/pokemon/31/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png',
    name: 'nidoran-m',
    url: 'https://pokeapi.co/api/v2/pokemon/32/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png',
    name: 'nidorino',
    url: 'https://pokeapi.co/api/v2/pokemon/33/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png',
    name: 'nidoking',
    url: 'https://pokeapi.co/api/v2/pokemon/34/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png',
    name: 'clefairy',
    url: 'https://pokeapi.co/api/v2/pokemon/35/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png',
    name: 'clefable',
    url: 'https://pokeapi.co/api/v2/pokemon/36/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png',
    name: 'vulpix',
    url: 'https://pokeapi.co/api/v2/pokemon/37/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png',
    name: 'ninetales',
    url: 'https://pokeapi.co/api/v2/pokemon/38/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png',
    name: 'jigglypuff',
    url: 'https://pokeapi.co/api/v2/pokemon/39/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png',
    name: 'wigglytuff',
    url: 'https://pokeapi.co/api/v2/pokemon/40/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png',
    name: 'zubat',
    url: 'https://pokeapi.co/api/v2/pokemon/41/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png',
    name: 'golbat',
    url: 'https://pokeapi.co/api/v2/pokemon/42/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png',
    name: 'oddish',
    url: 'https://pokeapi.co/api/v2/pokemon/43/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png',
    name: 'gloom',
    url: 'https://pokeapi.co/api/v2/pokemon/44/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png',
    name: 'vileplume',
    url: 'https://pokeapi.co/api/v2/pokemon/45/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png',
    name: 'paras',
    url: 'https://pokeapi.co/api/v2/pokemon/46/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png',
    name: 'parasect',
    url: 'https://pokeapi.co/api/v2/pokemon/47/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png',
    name: 'venonat',
    url: 'https://pokeapi.co/api/v2/pokemon/48/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png',
    name: 'venomoth',
    url: 'https://pokeapi.co/api/v2/pokemon/49/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png',
    name: 'diglett',
    url: 'https://pokeapi.co/api/v2/pokemon/50/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/51.png',
    name: 'dugtrio',
    url: 'https://pokeapi.co/api/v2/pokemon/51/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png',
    name: 'meowth',
    url: 'https://pokeapi.co/api/v2/pokemon/52/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png',
    name: 'persian',
    url: 'https://pokeapi.co/api/v2/pokemon/53/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png',
    name: 'psyduck',
    url: 'https://pokeapi.co/api/v2/pokemon/54/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png',
    name: 'golduck',
    url: 'https://pokeapi.co/api/v2/pokemon/55/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png',
    name: 'mankey',
    url: 'https://pokeapi.co/api/v2/pokemon/56/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png',
    name: 'primeape',
    url: 'https://pokeapi.co/api/v2/pokemon/57/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png',
    name: 'growlithe',
    url: 'https://pokeapi.co/api/v2/pokemon/58/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png',
    name: 'arcanine',
    url: 'https://pokeapi.co/api/v2/pokemon/59/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png',
    name: 'poliwag',
    url: 'https://pokeapi.co/api/v2/pokemon/60/'
  }
];  

export default mock;