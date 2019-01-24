import React from "react";
import "./ImageList.css";
import coke from './coke.jpg';
import twix from './twix.jpg';
import lays from './lays.jpg';
import oreo from './oreo.jpg';

class ImageList extends React.Component {
  state = {
    totalCost: 0,
    totalQty: 0,
    twixCost: 0,
    wafCost: 0,
    bisCost: 0,
    sodaCost: 0,
    twixQty: 0,
    sodaQty: 0,
    bisQty: 0,
    wafQty: 0
  };

  /*
        Compute the Total Cost of All items
        
    */
  computeTotalCost() {
    const {
      twixCost,
      wafCost,
      bisCost,
      sodaCost,
      sodaQty,
      twixQty,
      wafQty,
      bisQty
    } = this.state;
    const totalCost = (
      twixCost * twixQty +
      wafCost * wafQty +
      sodaCost * sodaQty +
      bisCost * bisQty
    ).toFixed(2);
    const totalQty =
      Number(twixQty) + Number(wafQty) + Number(sodaQty) + Number(bisQty);
    this.setState({ totalCost, totalQty });
  }

  /**
   * It will Push the new products in the vending machine
   */
  pushProducts() {
    const data = [
      {
        name: "Twix",
        price: this.state.twixCost,
        quantity: this.state.twixQty,
        description:
          "Twix is a biscuit made by Mars, Inc consisting of a biscuit"
      },
      {
        name: "Coke",
        price: this.state.sodaCost,
        quantity: this.state.sodaQty,
        description:
          "Coca-Cola, or Coke, is a carbonated soft drink manufactured by The Coca-Cola Company"
      },
      {
        name: "Lays",
        price: this.state.wafCost,
        quantity: this.state.wafQty,
        description:
          "Lay's is the name of a brand for a number of potato chip varieties"
      }
    ];
    const key = "IGjlk6B0qSjvj_EAnewz3cHxAbTpYY7v";
    const url = `https://api.mlab.com/api/1/databases/vending_machine/collections/products?apiKey=${key}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        //After PUSH pull to see the latest collection
        fetch(url, {
          method: "GET"
        })
          .then(response => response.text())
          .then(data => {
            console.log(`The new collection is ${data}`);
          });
      });
  }
  componentDidMount() {
    console.log("It mounted fine");
    //this.getProducts();
  }

  componentWillReceiveProps() {
    console.log("it received ...");
  }
  render() {
    return (
      <div className="ui container">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>COST</th>
              <th>QTY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">
                Twix
                <div className="ui card">
                  <div className="image">
                    <img
                      src={twix}
                      alt="kristy"
                    />
                  </div>
                  <div className="content">
                    <a href="test" className="header">
                      TWIX
                    </a>
                    <div className="description">
                      Twix is a biscuit made by Mars, Inc consisting of a
                      biscuit
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="Cost">
                <div className="inline fields">
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="twix"
                        value="0.65"
                        onClick={e => {
                          console.log("Cliked 0.65");
                          this.setState({
                            twixCost: 0.65
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$0.65</label>
                    </div>
                  </div>

                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="twix"
                        value="1"
                        onClick={e => {
                          console.log("Cliked 1");
                          this.setState({
                            twixCost: 1
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="twix"
                        value="1.5"
                        onClick={e => {
                          console.log("Cliked 1.5");
                          this.setState({
                            twixCost: 1.5
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1.50</label>
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="TwixQty">
                <div className="ui input focus">
                  <input
                    type="text"
                    placeholder="Add Quantity"
                    maxLength="1"
                    type="number"
                    onChange={e => {
                      console.log("Value is ", e.target.value);
                      this.setState({
                        twixQty: e.target.value
                      });
                      setTimeout(() => {
                        this.computeTotalCost();
                      }, 100);
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td data-label="Name">Waffers
              <div className="ui card">
                  <div className="image">
                    <img
                      src={lays}
                      alt="kristy"
                    />
                  </div>
                  <div className="content">
                    <a href="test" className="header">
                      WAFFER
                    </a>
                    <div className="description">
                      Twix is a biscuit made by Mars, Inc consisting of a
                      biscuit
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="Cost">
                <div className="inline fields">
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="waf"
                        value="0.65"
                        onClick={e => {
                          console.log("Cliked 0.65");
                          this.setState({
                            wafCost: 0.65
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$0.65</label>
                    </div>
                  </div>

                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="waf"
                        value="1"
                        onClick={e => {
                          console.log("Cliked 1");
                          this.setState({
                            wafCost: 1
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="waf"
                        value="1.5"
                        onClick={e => {
                          console.log("Cliked 1.5");
                          this.setState({
                            wafCost: 1.5
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1.50</label>
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="wafQty">
                <div className="ui input focus">
                  <input
                    type="text"
                    placeholder="Add Quantity"
                    maxLength="1"
                    type="number"
                    onChange={e => {
                      console.log("Waf Value is ", e.target.value);
                      this.setState({
                        wafQty: e.target.value
                      });
                      setTimeout(() => {
                        this.computeTotalCost();
                      }, 100);
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td data-label="Name">Biscuits
              <div className="ui card">
                  <div className="image">
                    <img
                      src={oreo}
                      alt="kristy"
                    />
                  </div>
                  <div className="content">
                    <a href="test" className="header">
                      WAFFER
                    </a>
                    <div className="description">
                      Twix is a biscuit made by Mars, Inc consisting of a
                      biscuit
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="Cost">
                <div className="inline fields">
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="bis"
                        value="0.65"
                        onClick={e => {
                          console.log("Cliked 0.65");
                          this.setState({
                            bisCost: 0.65
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$0.65</label>
                    </div>
                  </div>

                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="bis"
                        value="1"
                        onClick={e => {
                          console.log("Cliked 1");
                          this.setState({
                            bisCost: 1
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="bis"
                        value="1.5"
                        onClick={e => {
                          console.log("Cliked 1.5");
                          this.setState({
                            bisCost: 1.5
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1.50</label>
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="bisQty">
                <div className="ui input focus">
                  <input
                    type="text"
                    placeholder="Add Quantity"
                    maxLength="1"
                    type="number"
                    onChange={e => {
                      console.log("Bis Value is ", e.target.value);
                      this.setState({
                        bisQty: e.target.value
                      });
                      setTimeout(() => {
                        this.computeTotalCost();
                      }, 100);
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td data-label="Name">Soda
              <div className="ui card">
                  <div className="image">
                    <img
                      src={coke}
                      alt="kristy"
                    />
                  </div>
                  <div className="content">
                    <a href="test" className="header">
                      SODA
                    </a>
                    <div className="description">
                      Twix is a biscuit made by Mars, Inc consisting of a
                      biscuit
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="Cost">
                <div className="inline fields">
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="soda"
                        value="0.65"
                        onClick={e => {
                          console.log("Cliked 0.65");
                          this.setState({
                            sodaCost: 0.65
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$0.65</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="soda"
                        value="1"
                        onClick={e => {
                          console.log("Cliked 1");
                          this.setState({
                            sodaCost: 1
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        name="soda"
                        value="1.5"
                        onClick={e => {
                          console.log("Cliked 0.65");
                          this.setState({
                            sodaCost: 1.5
                          });
                          setTimeout(() => {
                            this.computeTotalCost();
                          }, 100);
                        }}
                      />
                      <label>$1.50</label>
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="sodaQty">
                <div className="ui input focus">
                  <input
                    type="text"
                    placeholder="Add Quantity"
                    maxLength="1"
                    type="number"
                    onChange={e => {
                      console.log("Soda Value is ", e.target.value);
                      this.setState({
                        sodaQty: e.target.value
                      });
                      setTimeout(() => {
                        this.computeTotalCost();
                      }, 100);
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td data-label="Name">Total </td>
              <td data-label="Cost">
                <label>Cost : {this.state.totalCost}</label>
              </td>
              <td data-label="Quatity">
                <label>Quantity : {this.state.totalQty}</label>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="ui primary basic button"
          onClick={e => {
            this.pushProducts();
          }}
        >
          Upload Items
        </button>
      </div>
    );
  }
}
export default ImageList;
