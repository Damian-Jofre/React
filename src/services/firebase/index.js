import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";

const FirebaseServices = {
    getProducts: () => {
        const db = getFirestore();
        const getProducts = collection(db, 'items');
        return getDocs(getProducts)
            .then((snapshot) => {
                return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            });
    },
    getCategories: () => {
        const db = getFirestore();
        const getCategoryCollection = collection(db, 'categorias');
        return getDocs(getCategoryCollection)
            .then((snapshot) => {
                return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            });
    },
    getProductsByCategory: (categoryId) => {
        const db = getFirestore();
        const q =  query(
            collection(db, 'items'),
            where('categoryId', '==', categoryId)
          );
        return getDocs(q)
        .then((snapshot) => {
            if(snapshot.size === 0) {
                return [];
              }
            return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        });
    },
    createOrder: (miCompra) => {
        const db = getFirestore();
        const compraCollection = collection(db, 'compra');
        return addDoc(compraCollection, miCompra)
        .then((docRef) => {
            return docRef.id;
        });
    },
}

export default FirebaseServices