import styles from './HelloWorld.module.css';

function HelloWorld({nome, email}) {
    return(
        <div className={styles.color}>
            <h1>Nome: {nome}, E-mail: {email}</h1>
        </div>
    )
}

export default HelloWorld;