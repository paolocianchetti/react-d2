import React, {Component} from "react";
import LatestRelease from "../latestRelease/LatestRelease";

class Main extends Component {

    /* constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }
    } */

    render() {
        return (
            <div>
                <LatestRelease
                    fantasyBooks={this.props.data}
                />
            </div>
        )
    }
}

export default Main;