import React from "react";
import {
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";

class Tooltipper extends React.Component {
    render() {
        return (
            <OverlayTrigger
                key={this.props.pos || "top"}
                placement={this.props.pos || "top"}
                overlay={
                    <Tooltip>{this.props.text}</Tooltip>
                }
            >
                <span>
                    {this.props.children}
                </span>
            </OverlayTrigger>
        )
    }
}

export default Tooltipper