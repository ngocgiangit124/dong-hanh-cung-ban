import styles from '../styles/Container.module.css'
export function Container(props) {
    return (
        <div className="md:container md:pl-10 md:pr-10 mx-auto">
            {props.children}
        </div>
    )
}