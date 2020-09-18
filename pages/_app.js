
import '../styles/index.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Provider } from 'react-redux';
import { useStore } from '../store/store'
function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>

    )
}
export default MyApp
