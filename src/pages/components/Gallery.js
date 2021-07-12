import Aos from 'aos';
import {useState, useEffect} from 'react';
import firebase from '../../config/firebase';


function Gallery() {
    const [movements, setMovements]= useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        Aos.init({
            duration:2000
        })
    }, [])

    const ref = firebase.firestore().collection("movements");

    function getMovements(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setMovements(items);
            setLoading(false);
        })
    }
    useEffect(() => {
        getMovements();
    }, [])

    if (loading) {
        return <><div class="d-flex justify-content-center align-items-center m-5 p-5 spinner-border text-success" role="status">
            <span class="sr-only"></span>
        </div>
        <h1 className="text-success mx-5">Loading...</h1>
        </>
    }
    else
    return (
        <div className="bg-transparent">
            <h1 className="text-center bg-transparent pt-5 mt-5">Movements</h1>
            
            {
                movements.map((movement) => (
                    <div className="bg-transparent" key={movement.id}>
                        <div className="container-fluid m-2 p-2 " >
                           <div className="row bg-transparent">
                                <div data-aos="slide-right" className="d-flex align-items-center justify-content-center col-md-6 bg-transparent">
                                    <img src={movement.img} alt={movement.alt} width="auto" height="400px" style={{borderRadius:50}} />
                                </div>
                                <div data-aos="fade" className="d-flex align-items-center justify-content-center col-md-6 bg-transparent p-3">
                                    <h2 className="dislay-2 bg-transparent text-center">{movement.title}</h2>
                                    <article className="bg-transparent text-muted m-2"> {movement.description} </article>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                ))
            }
        </div>
    )

}

export default Gallery;

