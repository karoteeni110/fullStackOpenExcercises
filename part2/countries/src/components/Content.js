const Content = ({content}) => {
    console.log(content);
    return ( 
        <div>{content.map(str => <p key={str}>{str}</p>)}</div>
    )
}

export default Content