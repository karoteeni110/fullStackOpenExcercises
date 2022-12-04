const Content = ({content, oneResult}) => {
    return oneResult 
        ? (
            <div>
                <h2>{content[0].name}</h2>
                <p>capital {content[0].capital[0]}</p>
                <p>area {content[0].area}</p>
                <h3>languages:</h3>
                <ul>
                    {content[0].languages.map(lang => <li>lang</li>)}
                </ul>
            </div>
        )
        : <div>{content.map(str => <p key={str}>{str}</p>)}</div>

}

export default Content