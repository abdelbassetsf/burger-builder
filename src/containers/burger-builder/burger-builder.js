import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/build-controls/build-controls';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/order-summary/order-summary';
import axios from '../../axios/axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import WithErrorHandS from '../../hoc/wiith-error-handler/with-error-handler';
import * as actionTypes from '../../redux/actions';

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      purchasing: false,
      loading: false,
      error: false
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('https://react-my-burger-c3cd3.firebaseio.com/ingredients.json')
  //     .then(res => {
  //       this.setState({ ingredients: res.data });
  //     })
  //     .catch(error => {
  //       this.setState({ error: true });
  //     });
  // }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    // If the amount of ingredient have negative values
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabledInfo={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          totalPrice={this.props.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  onIngredientAdded: ingredientName =>
    dispatch({
      type: actionTypes.ADD_INGREDIENT,
      ingredientName: ingredientName
    }),
  onIngredientRemoved: ingredientName =>
    dispatch({
      type: actionTypes.REMOVE_INGREDIENT,
      ingredientName: ingredientName
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandS(BurgerBuilder, axios));
