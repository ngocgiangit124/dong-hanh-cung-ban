import styles from '../styles/Container.module.css'
export function Container(props) {
    return (
        <div className="container pl-10 pr-10 mx-auto">
            {props.children}
        </div>
    )
}