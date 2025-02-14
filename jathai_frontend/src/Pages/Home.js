import { connect } from "react-redux";
import { refresh } from "../reducer/Actions";
import { Navigate } from "react-router-dom";

function Home({ refresh, isAuthenticated }) {
  // ถ้า isAuthenticated เป็น true, redirect ไปยัง /dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome in mywebsite.co.id</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button
          className="btn btn-primary btn-lg"
          type="button"
          onClick={refresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, { refresh })(Home);
