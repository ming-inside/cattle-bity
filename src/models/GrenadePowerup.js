import Animation from '../core/Animation';
import DisplayObject from '../core/DisplayObject';
import Sprite from '../core/Sprite';
import Texture from '../core/Texture';

class GrenadePowerup extends DisplayObject {
  constructor() {
    super(64, 60);

    this.texture = new Texture('images/sprite.png');

    // Null as a second frame adds a blink effect
    this.animation = new Animation([
      new Sprite(this.texture, {
        x: 320, y: 112, w: 16, h: 15,
      }),
      null,
    ], { delay: 130 });
  }

  update() {
    this.animation.animate();
  }

  render() {
    const sprite = this.animation.getCurrentFrame();

    return {
      width: this.width,
      height: this.height,
      position: this.position,
      sprite,
    };
  }
}

export default GrenadePowerup;