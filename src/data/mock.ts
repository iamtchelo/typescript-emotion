const mock = [
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    name: 'metapod',
    url: 'https://pokeapi.co/api/v2/pokemon/11/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    name: 'butterfree',
    url: 'https://pokeapi.co/api/v2/pokemon/12/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    name: 'weedle',
    url: 'https://pokeapi.co/api/v2/pokemon/13/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    name: 'kakuna',
    url: 'https://pokeapi.co/api/v2/pokemon/14/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    name: 'beedrill',
    url: 'https://pokeapi.co/api/v2/pokemon/15/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    name: 'pidgey',
    url: 'https://pokeapi.co/api/v2/pokemon/16/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    name: 'pidgeotto',
    url: 'https://pokeapi.co/api/v2/pokemon/17/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    name: 'pidgeot',
    url: 'https://pokeapi.co/api/v2/pokemon/18/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    name: 'rattata',
    url: 'https://pokeapi.co/api/v2/pokemon/19/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    name: 'raticate',
    url: 'https://pokeapi.co/api/v2/pokemon/20/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    name: 'spearow',
    url: 'https://pokeapi.co/api/v2/pokemon/21/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    name: 'fearow',
    url: 'https://pokeapi.co/api/v2/pokemon/22/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    name: 'ekans',
    url: 'https://pokeapi.co/api/v2/pokemon/23/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    name: 'arbok',
    url: 'https://pokeapi.co/api/v2/pokemon/24/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    name: 'raichu',
    url: 'https://pokeapi.co/api/v2/pokemon/26/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    name: 'sandshrew',
    url: 'https://pokeapi.co/api/v2/pokemon/27/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    name: 'sandslash',
    url: 'https://pokeapi.co/api/v2/pokemon/28/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    name: 'nidoran-f',
    url: 'https://pokeapi.co/api/v2/pokemon/29/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    name: 'nidorina',
    url: 'https://pokeapi.co/api/v2/pokemon/30/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    name: 'nidoqueen',
    url: 'https://pokeapi.co/api/v2/pokemon/31/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    name: 'nidoran-m',
    url: 'https://pokeapi.co/api/v2/pokemon/32/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    name: 'nidorino',
    url: 'https://pokeapi.co/api/v2/pokemon/33/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    name: 'nidoking',
    url: 'https://pokeapi.co/api/v2/pokemon/34/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    name: 'clefairy',
    url: 'https://pokeapi.co/api/v2/pokemon/35/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    name: 'clefable',
    url: 'https://pokeapi.co/api/v2/pokemon/36/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    name: 'vulpix',
    url: 'https://pokeapi.co/api/v2/pokemon/37/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    name: 'ninetales',
    url: 'https://pokeapi.co/api/v2/pokemon/38/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    name: 'jigglypuff',
    url: 'https://pokeapi.co/api/v2/pokemon/39/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    name: 'wigglytuff',
    url: 'https://pokeapi.co/api/v2/pokemon/40/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
    name: 'zubat',
    url: 'https://pokeapi.co/api/v2/pokemon/41/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    name: 'golbat',
    url: 'https://pokeapi.co/api/v2/pokemon/42/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    name: 'oddish',
    url: 'https://pokeapi.co/api/v2/pokemon/43/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    name: 'gloom',
    url: 'https://pokeapi.co/api/v2/pokemon/44/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    name: 'vileplume',
    url: 'https://pokeapi.co/api/v2/pokemon/45/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    name: 'paras',
    url: 'https://pokeapi.co/api/v2/pokemon/46/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    name: 'parasect',
    url: 'https://pokeapi.co/api/v2/pokemon/47/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    name: 'venonat',
    url: 'https://pokeapi.co/api/v2/pokemon/48/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    name: 'venomoth',
    url: 'https://pokeapi.co/api/v2/pokemon/49/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    name: 'diglett',
    url: 'https://pokeapi.co/api/v2/pokemon/50/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    name: 'dugtrio',
    url: 'https://pokeapi.co/api/v2/pokemon/51/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    name: 'meowth',
    url: 'https://pokeapi.co/api/v2/pokemon/52/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    name: 'persian',
    url: 'https://pokeapi.co/api/v2/pokemon/53/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    name: 'psyduck',
    url: 'https://pokeapi.co/api/v2/pokemon/54/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    name: 'golduck',
    url: 'https://pokeapi.co/api/v2/pokemon/55/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    name: 'mankey',
    url: 'https://pokeapi.co/api/v2/pokemon/56/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    name: 'primeape',
    url: 'https://pokeapi.co/api/v2/pokemon/57/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    name: 'growlithe',
    url: 'https://pokeapi.co/api/v2/pokemon/58/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    name: 'arcanine',
    url: 'https://pokeapi.co/api/v2/pokemon/59/'
  },
  {
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    name: 'poliwag',
    url: 'https://pokeapi.co/api/v2/pokemon/60/'
  }
];  

export default mock;