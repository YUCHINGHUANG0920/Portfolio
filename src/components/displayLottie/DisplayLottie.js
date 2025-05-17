import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const { animationData, style } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          // style={{width: "90%", height: "90%"}}
          style={style}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
