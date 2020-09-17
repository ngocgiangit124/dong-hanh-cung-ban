import styles from '../styles/Container.module.css'
export function Container(props) {
    return (
        <div className="md:container md:pl-10 md:pr-10 mx-auto">
            <div className={`mt-8 md:grid md:grid-cols-3`}>
                {props.children}
            </div>
        </div >
    )
}