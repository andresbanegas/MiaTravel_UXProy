import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
//import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

class ConnectedItem extends Component {
  render() {
    return (
      <Card
        style={{ width: 200, height: 270, margin: 10, display: "inline-block" }}
      >
        <CardActionArea
          onClick={() => {
            this.props.history.push("/promodetails/" + this.props.item.id);
          }}
        >
          <CardMedia
            style={{ height: 140 }}
            image={this.props.item.imageUrls[0]}
          />
          <CardContent style={{ height: 270 }}>
            <div
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {this.props.item.name}
            </div>
            <div style={{ margin: 5 }}>Price: {this.props.item.price} $</div>
            <div style={{ color: "#1a9349", fontWeight: "bold", margin: 5 }}>
              {this.props.item.category}
            </div>
            <div
              style={{
                color: "#93891a",
                marginLeft: 5,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              Promoción
            </div>
          </CardContent>
        </CardActionArea>
        
      </Card>
    );
  }
}

export default withRouter(connect()(ConnectedItem));


/*
<CardActions
          style={{ display: "flex", alignItems: "center", height: 45 }}
        >
          <div>
          <Button
            size="small"
            style={{ marginRight: 60 }}
            onClick={() => {
              this.props.history.push("/details/" + this.props.item.id);
            }}
          >
            {" "}
            Details
          </Button>
          </div>
         
        </CardActions>
*/