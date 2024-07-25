import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'

const {searchParams, setSearchParams} = useSearchParams();
const lat = searchParams.get("lat");
const lng = searchParams.get("lng");

function Map() {
    return (
        <div className={styles.mapContainer}>
            
        </div>
    )
}

export default Map
