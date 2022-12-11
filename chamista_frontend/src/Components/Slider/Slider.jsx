// bad animation handling. timing is 2x too long
import "./slider.scss";
import React from "react";
import Cardchem from "../../assets/card-chem.png";

class Slider extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      animating: false,
      animationDirection: "",
      animationDuration: 300,
      currentSlide: 0,
      slides: [
        {
          title: "Chemistry",
          imageUrl:
            "https://chemista-images.s3.eu-central-1.amazonaws.com/card-chem.png",
          description: "We deal with all levels of Chemsitry",
          details: {
            description_long:
              "We have levcture notes of all classes for chemistry",
          },
        },
        {
          title: "Physics",
          imageUrl:
            "https://chemista-images.s3.eu-central-1.amazonaws.com/physics-card-pic.png",
          description: "We deal with all levels of Physics",
          details: {
            description_long:
              "We have levcture notes of all classes for Physics",
          },
        },
      ],
    };

    this.changeSlide = this.changeSlide.bind(this);
  }

  fireAnims(duration) {
    this.setState({
      animating: true,
      animationDirection: "out",
    });
    // halfway
    setTimeout(() => {
      this.setState({
        animating: true,
        animationDirection: "in",
      });
    }, duration / 2);
    // done
    setTimeout(() => {
      this.setState({
        animating: false,
        animationDirection: "",
      });
    }, duration);
  }

  changeSlide() {
    const currentSlide = this.state.currentSlide;
    const slides = this.state.slides;

    if (currentSlide < slides.length - 1) {
      this.fireAnims(this.state.animationDuration * 2);
      window.setTimeout(() => {
        this.setState({
          currentSlide: currentSlide + 1,
        });
      }, this.state.animationDuration);
    }

    if (currentSlide > 0) {
      this.fireAnims(this.state.animationDuration * 2);
      window.setTimeout(() => {
        this.setState({
          currentSlide: currentSlide - 1,
        });
      }, this.state.animationDuration);
    }
  }

  determineDir(delta) {
    if (delta > 0) {
      return "right";
    } else {
      return "left";
    }
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
    setInterval(() => {
      // console.log(dir);

      this.changeSlide();
    }, 5000);
  }

  render() {
    let classes = ["slideshow"];

    if (this.state.animating) {
      classes.push(
        "slideshow--animated slideshow--" + this.state.animationDirection
      );
    } else {
      classes = ["slideshow"];
    }
    return (
      <div className={classes.join(" ")}>
        <Slide
          title={this.state.slides[this.state.currentSlide].title}
          image={this.state.slides[this.state.currentSlide].imageUrl}
          description={this.state.slides[this.state.currentSlide].description}
          details={this.state.slides[this.state.currentSlide].details}
          count={this.state.currentSlide + 1}
          changeSlide={this.changeSlide}
          slideLength={this.state.slides.length}
        />
      </div>
    );
  }
}

class Slide extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="slide">
        <div className="slide__decorative-sidebar">
          <img src={this.props.image} />
        </div>

        <div className="slide__info">
          <div className="slide__info__text">
            <h1 className="slide__info__title">{this.props.title}</h1>
            <p className="slide__info__description">{this.props.description}</p>
          </div>
          <img
            src={this.props.image}
            alt={this.props.title}
            className="slide__info__image"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
