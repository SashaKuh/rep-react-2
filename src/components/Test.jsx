export const Test = ({onClick, good, nod, bad, total}) => {

    return(
        <>
            <button onClick={() => {onClick('good')}}>Good</button>
            <button onClick={() => {onClick('nod')}}>Nod</button>
            <button onClick={() => {onClick('bad')}}>Bad</button>
            
            {total === 0 ? <h3>Non</h3> : 
    <div>
        <h3>Good: {good}</h3>
        <h3>Nod: {nod}</h3>
        <h3>fk: {bad}</h3>
    </div>
}






            
        </>
    )
}
