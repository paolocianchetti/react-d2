import React, {Component} from "react";
import LatestRelease from "../latestRelease/LatestRelease";

class Main extends Component {
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