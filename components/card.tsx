import styles from "../styles/Home.module.css";

export default function Card( props: any ) {
    // deconstruct props
    const { colour, name, description, linksList } = props;
    return (
        <div className={styles.card} >
        <h2>
            <span style= {{ color: colour }} >{name}</span>&rarr;
        </h2>
        <p>{description}</p>
        <ul >
            {Object.keys(linksList).map((key) => (
                <li className = {styles.link} key={key}>
                    <a href={linksList[key]}>{key}</a>
                </li>
            ))}
        </ul>
        </div>
    );
    
}