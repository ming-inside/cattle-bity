import Collision from '../core/Collision';
import GameObject from '../core/GameObject';

import BrickWallDestroyer from '../gameObjects/BrickWallDestroyer';

class CollideBrickWallWithBullet {
  private collision: Collision;
  private scene: GameObject;

  constructor(collision, scene) {
    this.collision = collision;

    // TODO: @mradionov Decouple scene from collisions.
    this.scene = scene;
  }

  public collide() {
    const wall = this.collision.target;
    const bullet = this.collision.source;

    const destroyer = new BrickWallDestroyer();
    destroyer.position = bullet.position.clone();
    destroyer.rotate(bullet.rotation);

    this.scene.add(destroyer);
  }
}

export default CollideBrickWallWithBullet;
