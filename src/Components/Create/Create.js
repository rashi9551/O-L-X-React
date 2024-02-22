import React, { Fragment,useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { collection,getFirestore,doc,setDoc } from "firebase/firestore"; 
import {FirebaseContext,AuthContext} from './../../store/Context'
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const [name,setName]=useState('')
  const[category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
 const firestore=getFirestore(firebase)
 const date = new Date().toDateString();
 const navigate=useNavigate()
  const handleSubmission= async()=>{
    if (!image) {
      alert("Please select an image");
      return;
    }
    try{
      const storage = getStorage();
      const storageRef = ref(storage, `/images/${image.name}`);
      const snapshot=await uploadBytes(storageRef, image)
      const imageURL = await getDownloadURL(snapshot.ref);
      const productsCollection = collection(firestore, "products");
      await setDoc(doc(productsCollection), {
       name,
       category,
       price,
       imageURL,
       createdAt:date.toString(),
       userId:user.uid
      });
      navigate("/");
    }catch (error) {
      console.error("Error uploading image or saving product:", error);
    }

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
             value={name}
             onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
         
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }}/>
            <br />
            <button className="uploadBtn" onClick={handleSubmission}>upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
