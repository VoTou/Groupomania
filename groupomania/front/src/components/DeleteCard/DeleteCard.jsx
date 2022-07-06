import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/PostAction";
import Trash from "../../img/trash.svg";
import "./DeleteCard.css";




const DeleteCard = (props) => {
    const dispatch = useDispatch();
  
    const deleteQuote = () => dispatch(deletePost(props.id));
  
    return (
      <span
        onClick={() => {
          if (window.confirm("Voulez-vous supprimer cet article ?")) {
            deleteQuote();
          }
        }}
      >
        <img className="trash" src={Trash} alt="trash" width="20px" />
      </span>
    );
  };
  
  export default DeleteCard;