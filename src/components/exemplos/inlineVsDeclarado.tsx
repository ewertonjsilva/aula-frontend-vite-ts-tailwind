// import type { ChangeEvent } from 'react';

// O TS já sabe o tipo do 'e' sozinho, basta passar o mouse por cima
{/* <input onChange={(e) => console.log(e.target.value)} /> */}


// Aqui você precisa definir o tipo explicitamente
// const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { ... }

{/* <input onChange={handleInputChange} /> */}

// O TS entende o tipo do 'e' e te dá autocompletar
// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log(e.target.value); // O TS sabe que 'value' é uma string!
// }
