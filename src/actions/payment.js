
const savePayment = () => {
  return {
    type: "ADD_PAYMENT",
    payload: { message: "Successfully added payment" },
  };
};

export const addPayment = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  return (dispatch) => {
    fetch("http://localhost:8075/payments", requestOptions).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log("success");
        dispatch(savePayment());
      }
    });
  };
};
