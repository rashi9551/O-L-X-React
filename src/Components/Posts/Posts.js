import React,{useEffect,useContext,useState} from 'react';
import { getDocs,collection,getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from './../../App';


function Posts() {
const {firebase}=useContext(FirebaseContext)
const [products,setProducts]=useState([])
const {setPostDetails}=useContext(PostContext)
const navigate=useNavigate()
useEffect(()=>{
  const fetchData=async()=>{
    const firestore = getFirestore(firebase);
  const querySnapshot = await getDocs(collection(firestore, "products"));
  const data=querySnapshot.docs.map((product)=>{
    return{
      ...product.data(),
      id:product.id
    }
  })
setProducts(data)
  }
  fetchData();
},[firebase])
console.log(products);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map(product=>(
          <div
          className="card"
          onClick={()=>{setPostDetails(product);navigate('/view')}}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageURL} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {products.map(product=>(
          <div className="card"  onClick={()=>{setPostDetails(product);navigate('/view')}}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageURL} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
           ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
