import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./FoodInfo.css";
import { toast } from "react-toastify";
const FoodInfo = () => {
  const loc = useLocation();
  console.log(loc.state.item);
  let item = loc.state.item;
  let expDate = new Date(item.useBefore);
  let m1 = expDate.getMonth();
  let d1 = expDate.getDate();
  let y1 = expDate.getFullYear();

  let postDate = new Date(item.date);
  //   console.log(postDate);
  let m2 = postDate.getMonth();
  let d2 = postDate.getDate();
  let y2 = postDate.getFullYear();
  return (
    <div>
      <Navbar />
      {/* <section className="foodInfo">
        <div className="fi">
          <div className="fiimg"></div>
          <div className="fiinfo"></div>
        </div>
      </section> */}
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src="https://d1oh9y2nmj4y5b.cloudfront.net/uploads/photo/filename/7580/Authentic_South_Indian_Meal_Served_for_guests.jpg" />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <div className="infolisthead">
                  <p className="name">{item.name}</p>
                  <p className="postedon">
                    Posted on {d1}-{m2}-{y2}
                  </p>
                </div>
                <div className="infolist">
                  <div className="key">Food type</div>
                  <span className="value">{item.type}</span>
                </div>
                <div className="infolist">
                  <div className="key">Quantity</div>
                  <span className="value">
                    {item.quantity} {item.quantityUnit}
                  </span>
                </div>
                <div className="infolist">
                  <div className="key">Description</div>
                  <span className="value">{item.description}</span>
                </div>
                <div className="infolist">
                  <div className="key">Address</div>
                  <span className="value">{item.address}</span>
                </div>
                <div className="infolist">
                  <div className="key">City</div>
                  <span className="value">{item.city}</span>
                </div>
                <div className="infolist">
                  <div className="key">Consume Before</div>
                  <span className="value">
                    {d1}-{m1}-{y1}
                  </span>
                </div>
                <div className="infolist">
                  <div className="key">Contact Phone</div>
                  <span className="value">{item.phone}</span>
                </div>

                <div className="action">
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={() => {
                      toast.success(`Pickup Request Sent!`);
                    }}
                  >
                    Request Pickup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodInfo;
