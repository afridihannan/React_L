import { connect } from 'react-redux';
import { addtoCart,removefromcart } from '../Services/Actions/action';
import T from '../Components/Redux-tut/Home'

const mapStateToProps=(state)=>({
    cardData:state
})

const mapDispatchToProps=dispatch=>({
    addtoCartHandler:data=>dispatch(addtoCart(data)),
    removefromcartHandler:data=>dispatch(removefromcart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(T);