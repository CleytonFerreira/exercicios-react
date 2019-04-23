// retornar múltiplos elementos

import React from "react"


//solução 1: mais usada

export default props =>
    <div>
        <h1>Parte 01</h1>
        <h1>Parte 02</h1>
    </div> 
    


/* solução 2: com React.Fragment
export default props =>
    <React.Fragment>
        <h1>Parte 01-B</h1>
        <h1>Parte 02-B</h1>
    </React.Fragment>   
     */

// //solução 3: colocando os elementos em um array
// export default props => [
//     <h1>Parte 01-C</h1>,
//     <h1>Parte 02-C</h1>
// ]     