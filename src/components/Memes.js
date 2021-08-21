import React from "react";
import axios from "axios";
import "../components/meme.css";
class Hotels extends React.Component {
  state = { memes: [] };
  getMemes = async () => {
    const options = {
      method: "GET",
      url: " https://api.imgflip.com/get_memes",
    };

    const res = await axios.request(options);
    if (res) {
      console.log(res);
      this.setState({ memes: res.data.data.memes });
    }
  };

  render() {
    try {
    } catch (err) {}
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <button className="btn btn-primary" onClick={this.getMemes}>
              Show Memes
            </button>
            {this.state.memes.map((meme) => {
              return <ShowMemes key={meme.id} {...meme} />;
            })}
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
const ShowMemes = (props) => {
  const { url, name } = props;
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};
export default Hotels;
