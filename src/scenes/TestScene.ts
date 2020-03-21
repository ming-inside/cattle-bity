import { GameObject, RectRenderer } from '../core';
import { GameObjectUpdateArgs } from '../game';
import { InputControl } from '../input';

import { Scene } from './Scene';

export class TestScene extends Scene {
  private parent: GameObject;
  private child: GameObject;
  private angle = 0;

  protected setup(): void {
    this.root.renderer = new RectRenderer('#777');

    this.parent = new GameObject(600, 300);
    this.parent.renderer = new RectRenderer('#00f');
    this.parent.position.set(200, 200);
    this.parent.pivot.set(0.5, 0.5);
    this.parent.rotate(45);

    this.child = new GameObject(100, 50);
    this.child.renderer = new RectRenderer('#f00');
    this.child.position.set(100, 100);
    this.child.pivot.set(0.5, 0.5);
    this.child.rotate(90);

    this.root.add(this.parent);
    this.parent.add(this.child);
  }

  protected update(updateArgs: GameObjectUpdateArgs): void {
    const { input } = updateArgs;

    if (input.isDown(InputControl.Select)) {
      this.angle += 90;
      this.child.rotate(this.angle);
    }

    this.root.traverseDescedants((child) => {
      child.invokeUpdate(updateArgs);
    });
  }
}